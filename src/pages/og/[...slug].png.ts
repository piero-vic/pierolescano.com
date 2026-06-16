import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, render } from "astro:content";
import { generateOgImage } from "@lib/open-graph";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogEntries = await getCollection("blog");

  return Promise.all(
    blogEntries.map(async entry => {
      const { remarkPluginFrontmatter } = await render(entry);
      const { createdAt } = remarkPluginFrontmatter;

      return {
        params: { slug: `blog/${entry.id}` },
        props: {
          title: entry.data.title,
          date: new Date(createdAt),
        },
      };
    }),
  );
};

interface Props {
  title: string;
  date: Date;
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const response = await generateOgImage(props.title, props.date);

  return new Response(new Uint8Array(response), {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
};
