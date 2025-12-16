import type { APIContext } from "astro";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { Commit } from "@lib/remark-git-log";
import sanitizeHtml from "sanitize-html";

export async function GET(context: APIContext) {
  const entries: RSSFeedItem[] = [];

  const pages = await getCollection("pages");
  for (const page of pages) {
    const { remarkPluginFrontmatter } = await page.render();
    const commits = remarkPluginFrontmatter.commits as Commit[];
    const firstCommit = commits.length > 0 ? commits[commits.length - 1] : null;

    entries.push({
      title: page.data.title,
      description: page.data.description,
      pubDate: firstCommit?.date ? new Date(firstCommit?.date) : undefined,
      link: `/${page.slug}`,
      content: page.rendered?.html && sanitizeHtml(page.rendered?.html),
    });
  }

  const posts = await getCollection("blog", ({ data }) => !data.archived);
  for (const post of posts) {
    const { remarkPluginFrontmatter } = await post.render();
    const commits = remarkPluginFrontmatter.commits as Commit[];
    const firstCommit = commits.length > 0 ? commits[commits.length - 1] : null;

    entries.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: firstCommit?.date ? new Date(firstCommit?.date) : undefined,
      link: `/blog/${post.slug}`,
      content: post.rendered?.html && sanitizeHtml(post.rendered?.html),
    });
  }

  return rss({
    title: "Piero Lescano",
    description: "Piero Lescano's blog posts",
    site: context.site!,
    customData: `<generator>${context.generator}</generator>`,
    trailingSlash: false,
    items: entries,
  });
}
