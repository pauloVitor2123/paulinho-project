import { z } from "zod";

export const PostCreateInputSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  excerpt: z.string().min(1),
  status: z.enum(["draft", "published"]).default("draft"),
  coverImageUrl: z.string().url().optional(),
});

export const PostUpdateInputSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  excerpt: z.string().min(1).optional(),
  status: z.enum(["draft", "published"]).optional(),
  coverImageUrl: z.string().url().optional(),
});

export type PostCreateInput = z.infer<typeof PostCreateInputSchema>;
export type PostUpdateInput = z.infer<typeof PostUpdateInputSchema>;
