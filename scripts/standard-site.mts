import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { type MarkdownRenderer, unified } from "@astrojs/markdown-remark";
import {
	createOrUpdateStandardSite,
	type Document,
	type Publication,
} from "@mastrojs/atproto";
import { z } from "astro/zod";
import matter from "gray-matter";
import { remarkGitMetadata } from "../src/lib/remark-git-metadata";

const identifier = "pierolescano.com";
const password = process.env.ATP_APP_PASSWORD;
const pubUrl = new URL("https://pierolescano.com/");

const publication: Publication = {
	url: pubUrl,
	name: "Piero Lescano",
};

function getStandardSiteSlug(filePath: string) {
	const normalized = filePath.split(path.sep).join("/");
	const fileName = normalized.split("/").at(-1) ?? "";
	return fileName.replace(/\.mdx?$/, "");
}

async function listMarkdownFiles(dir: string): Promise<Array<string>> {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const entryPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				return listMarkdownFiles(entryPath);
			}
			if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
				return [entryPath];
			}
			return [];
		}),
	);

	return files.flat();
}

async function getGitMetadata(
	renderer: MarkdownRenderer,
	source: string,
	parsedData: Record<string, unknown>,
	filePath: string,
) {
	const { metadata } = await renderer.render(source, {
		fileURL: pathToFileURL(path.resolve(filePath)),
		frontmatter: parsedData,
	});

	const frontmatter = metadata.frontmatter ?? {};
	const createdAt =
		typeof frontmatter.createdAt === "string"
			? frontmatter.createdAt
			: undefined;
	const updatedAt =
		typeof frontmatter.updatedAt === "string"
			? frontmatter.updatedAt
			: undefined;

	if (!createdAt) {
		return undefined;
	}

	return { createdAt, updatedAt };
}

async function main(): Promise<void> {
	const contentDir = "src/content/blog";

	const processor = unified({
		remarkPlugins: [remarkGitMetadata],
	});
	const renderer = await processor.createRenderer({ syntaxHighlight: false });

	const files = await listMarkdownFiles(contentDir);
	const docs: Document[] = [];

	for (const file of files) {
		const source = await fs.readFile(file, "utf-8");
		const parsed = matter(source);
		const data = z
			.object({
				title: z.string(),
				description: z.string(),
				tags: z.array(z.string()),
				archived: z.boolean().default(false),
			})
			.parse(parsed.data);
		if (data.archived) {
			continue;
		}

		const slug = getStandardSiteSlug(file);
		const gitMetadata = await getGitMetadata(
			renderer,
			parsed.content,
			parsed.data,
			file,
		);
		if (!gitMetadata) {
			throw new Error(
				`Could not extract git metadata for "${file}". Is the file tracked by git?`,
			);
		}
		const createdAt = new Date(gitMetadata.createdAt);
		const pathname = path.join("blog", slug);

		docs.push({
			title: data.title,
			url: new URL(pathname, publication.url),
			publishedAt: createdAt,
			description: data.description,
		});
	}

	await createOrUpdateStandardSite(
		{ identifier, password },
		publication,
		docs,
		{ baseFolder: "public" },
	);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
