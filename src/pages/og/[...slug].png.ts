import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { generateOgImage } from "@lib/open-graph";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogEntries = await getCollection("blog");
  return blogEntries.map(entry => ({
    params: { slug: `blog/${entry.slug}` },
    props: {
      title: entry.data.title,
      date: entry.data.pubDate,
    },
  }));
};

interface Props {
  title: string;
  date: Date;
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const response = await generateOgImage(props.title, props.date);

  return new Response(response, {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
};
