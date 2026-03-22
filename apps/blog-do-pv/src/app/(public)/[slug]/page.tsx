import { notFound } from "next/navigation";
import { getPublishedPostBySlug } from "@/server/services/post/get-published-post-by-slug";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {post.publishedAt && (
        <time dateTime={post.publishedAt.toISOString()}>
          {post.publishedAt.toLocaleDateString("pt-BR")}
        </time>
      )}
      <div>{post.content}</div>
    </article>
  );
}
