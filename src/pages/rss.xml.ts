import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");

  return rss({
    title: "Piero Lescano",
    description: "Piero Lescano's blog posts",
    site: context.site!,
    customData: `<generator>${context.generator}</generator>`,
    trailingSlash: false,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });
}
