import { listPublishedPosts } from "@/server/services/post/list-published-posts";

export default async function HomePage() {
  const posts = await listPublishedPosts();

  return (
    <main>
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>Nenhum post publicado ainda.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`/${post.slug}`}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                {post.publishedAt && (
                  <time dateTime={post.publishedAt.toISOString()}>
                    {post.publishedAt.toLocaleDateString("pt-BR")}
                  </time>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
