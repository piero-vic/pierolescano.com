import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        pubDate: z.date(),
      })
      .refine(
        schema => {
          if (schema.image !== undefined && schema.imageAlt === undefined) {
            return false;
          }
          return true;
        },
        { message: "your message" },
      ),
});

export const collections = {
  blog: blogCollection,
};
