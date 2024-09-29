import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

export const collections = {
  blog: defineCollection({
    schema: ({ image }) =>
      z
        .object({
          title: z.string(),
          description: z.string(),
          image: image().optional(),
          imageAlt: z.string().optional(),
          pubDate: z.date(),
        })
        .refine(schema => {
          if (schema.image !== undefined && schema.imageAlt === undefined) {
            return false;
          }
          return true;
        }),
  }),
  projects: defineCollection({
    loader: file("src/data/projects.json"),
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
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
