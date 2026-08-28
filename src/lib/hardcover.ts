import type { Loader } from "astro/loaders";
import { z } from "astro/zod";

const ENDPOINT = "https://api.hardcover.app/v1/graphql";

const precisionSchema = z.enum(["day", "month", "year", "undated"]);
export type DatePrecision = z.infer<typeof precisionSchema>;

const readDateSchema = z.object({
  date: z.date(),
  precision: precisionSchema,
});
export type BookDate = z.infer<typeof readDateSchema>;

const booksSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  status: z.enum(["reading", "finished", "planned"]),
  readDate: readDateSchema.optional(),
  coverUrl: z.url().optional(),
  hardcoverUrl: z.url().optional(),
});

export type BookData = z.infer<typeof booksSchema>;

export function formatReadDate(readDate: BookDate): string {
  const iso = readDate.date.toISOString();
  switch (readDate.precision) {
    case "day":
      return iso.slice(0, 10);
    case "month":
      return iso.slice(0, 7);
    case "year":
      return iso.slice(0, 4);
    case "undated":
      return "";
  }
}

interface HardcoverAuthor {
  name: string;
}

interface HardcoverContribution {
  contribution: string | null;
  author: HardcoverAuthor;
}

interface HardcoverBook {
  id: number;
  title: string;
  slug: string;
  image: { url: string } | null;
  contributions: HardcoverContribution[];
}

interface HardcoverUserBookRead {
  finished_at: string | null;
  finished_at_precision: number | null;
}

interface HardcoverUserBook {
  status_id: number;
  book: HardcoverBook;
  user_book_reads: HardcoverUserBookRead[];
}

interface HardcoverResponse {
  data?: {
    me: {
      user_books: HardcoverUserBook[];
    }[];
  };
  errors?: { message: string }[];
}

const STATUS_MAP: Record<number, BookData["status"]> = {
  1: "planned",
  2: "reading",
  3: "finished",
};

function precisionFromValue(value: number | null): DatePrecision {
  switch (value) {
    case 1:
      return "day";
    case 2:
      return "month";
    case 3:
      return "year";
    default:
      return "undated";
  }
}

function authorsFromContributions(contributions: HardcoverContribution[]): string {
  const authors = contributions.filter(c => c.contribution === "Author").map(c => c.author.name);
  const fallback = contributions.map(c => c.author.name);
  const names = authors.length > 0 ? authors : fallback;
  return [...new Set(names)].join(", ");
}

async function getHardcoverBooks(): Promise<BookData[]> {
  const apiKey = import.meta.env.HARDCOVER_API_KEY;
  if (!apiKey) {
    throw new Error("HARDCOVER_API_KEY is not set in the environment.");
  }

  const query = `{
    me {
      user_books {
        status_id
        book {
          id
          title
          slug
          image { url }
          contributions { contribution author { name } }
        }
        user_book_reads {
          finished_at
          finished_at_precision
        }
      }
    }
  }`;

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Hardcover API returned ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as HardcoverResponse;

  if (json.errors?.length) {
    throw new Error(`Hardcover API errors: ${json.errors.map(e => e.message).join("; ")}`);
  }

  const userBooks = json.data?.me?.[0]?.user_books ?? [];
  return userBooks
    .filter(entry => entry.status_id in STATUS_MAP)
    .map((entry): BookData => {
      const read = entry.user_book_reads.find(r => r.finished_at !== null);
      return {
        id: String(entry.book.id),
        title: entry.book.title,
        author: authorsFromContributions(entry.book.contributions),
        status: STATUS_MAP[entry.status_id],
        readDate:
          read?.finished_at != null
            ? {
                date: new Date(read.finished_at),
                precision: precisionFromValue(read.finished_at_precision),
              }
            : undefined,
        coverUrl: entry.book.image?.url,
        hardcoverUrl: `https://hardcover.app/books/${entry.book.slug}`,
      };
    });
}

export const hardcoverLoader: Loader = {
  name: "hardcover",
  schema: booksSchema,
  load: async ({ store, parseData, logger }) => {
    const books = await getHardcoverBooks();

    store.clear();
    for (const book of books) {
      const data = await parseData({ id: book.id, data: book });
      store.set({ id: book.id, data });
    }

    logger.debug(`Loaded ${books.length} books from Hardcover.`);
  },
};
