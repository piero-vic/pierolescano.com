import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    comments: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
