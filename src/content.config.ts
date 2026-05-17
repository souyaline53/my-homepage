import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Astro v5 の新しい loader を使用
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    pubDate: z.coerce.date(),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blog,
};