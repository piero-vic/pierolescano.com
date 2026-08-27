export type DatePrecision = "day" | "month" | "year" | "undated";

export interface BookDate {
  date: Date;
  precision: DatePrecision;
}

export interface BookData {
  title: string;
  author: string;
  status: "reading" | "finished" | "abandoned";
  readDate?: BookDate;
  coverUrl?: string;
  hardcoverUrl?: string;
}

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

const ENDPOINT = "https://api.hardcover.app/v1/graphql";

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
  user_book_status: { status: string };
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

const STATUS_MAP: Record<string, BookData["status"]> = {
  Read: "finished",
  Reading: "reading",
  "Did Not Finish": "abandoned",
  Abandoned: "abandoned",
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

/**
 * Fetches the authenticated user's books from the Hardcover GraphQL API at build
 * time and maps them to the `BookData` shape used by the reading page.
 */
export async function getHardcoverBooks(): Promise<BookData[]> {
  const apiKey = import.meta.env.HARDCOVER_API_KEY;
  if (!apiKey) {
    throw new Error("HARDCOVER_API_KEY is not set in the environment.");
  }

  const query = `{
    me {
      user_books {
        user_book_status { status }
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
    .map((entry): BookData => {
      const read = entry.user_book_reads.find(r => r.finished_at !== null);
      return {
        title: entry.book.title,
        author: authorsFromContributions(entry.book.contributions),
        status: STATUS_MAP[entry.user_book_status.status] ?? "finished",
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
    })
    .sort((a, b) => {
      const aTime = a.readDate?.date.getTime() ?? 0;
      const bTime = b.readDate?.date.getTime() ?? 0;
      return bTime - aTime;
    });
}
