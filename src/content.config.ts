import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
  blog: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) =>
      z
        .object({
          title: z.string(),
          description: z.string(),
          image: image().optional(),
          imageAlt: z.string().optional(),
          pubDate: z.date(),
          tags: z.array(z.string()),
          archived: z.boolean().default(false),
        })
        .refine((schema) => {
          if (schema.image !== undefined && schema.imageAlt === undefined) {
            return false;
          }
          return true;
        }),
  }),
  projects: defineCollection({
    loader: file("src/content/projects.json"),
    schema: ({ image }) =>
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        primaryLanguage: z.object({
          name: z.string(),
          color: z.string(),
        }),
        image: image().optional(),
        repoLink: z.string().optional(),
        demoLink: z.string().optional(),
        collaborator: z
          .object({
            name: z.string(),
            github: z.string(),
          })
          .optional(),
        favorite: z.boolean(),
      }),
  }),
  notes: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/notes" }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()),
    }),
  }),
};
