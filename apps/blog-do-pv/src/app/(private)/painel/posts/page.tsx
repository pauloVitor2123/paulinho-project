import { listAllPosts } from "@/server/services/post/list-all-posts";

export default async function AdminPostsPage() {
  const posts = await listAllPosts();

  return (
    <main>
      <h1>Posts</h1>
      <a href="/painel/posts/novo">Novo post</a>
      {posts.length === 0 ? (
        <p>Nenhum post criado ainda.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <span>{post.title}</span>
              <span>{post.status}</span>
              <a href={`/painel/posts/${post.slug}/editar`}>Editar</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
