import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // 'content' for markdown/mdx
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    // Add the tags field - an array of strings
    tags: z.array(z.string()).optional().default([]), // Make optional, default to empty array
  }),
});

export const collections = {
  'blog': blogCollection,
  // You could add a 'projects' collection here later if desired
};