import "server-only";
import { db } from "@/libs/db";
import { posts, eq, desc } from "@paulinho-project/db";
import type { PostCreateInput, PostUpdateInput } from "@/validators/post-validator";

export async function findPublishedPostsRepo() {
  return db.select().from(posts).where(eq(posts.status, "published")).orderBy(desc(posts.publishedAt));
}

export async function findPublishedPostBySlugRepo(slug: string) {
  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);
  const post = result[0] ?? null;
  if (!post || post.status !== "published") return null;
  return post;
}

export async function findAllPostsRepo() {
  return db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function findPostBySlugRepo(slug: string) {
  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);
  return result[0] ?? null;
}

export async function insertPostRepo(data: PostCreateInput & { publishedAt?: Date | null }) {
  const result = await db
    .insert(posts)
    .values({
      slug: data.slug,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      status: data.status,
      coverImageUrl: data.coverImageUrl,
      publishedAt: data.publishedAt ?? null,
    })
    .returning();
  return result[0]!;
}

export async function updatePostBySlugRepo(slug: string, data: PostUpdateInput & { publishedAt?: Date | null }) {
  const result = await db
    .update(posts)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(posts.slug, slug))
    .returning();
  return result[0] ?? null;
}

export async function deletePostBySlugRepo(slug: string) {
  await db.delete(posts).where(eq(posts.slug, slug));
}
