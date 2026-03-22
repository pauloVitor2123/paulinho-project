import { notFound, redirect } from "next/navigation";
import { getPostBySlug } from "@/server/services/post/get-post-by-slug";
import { updatePostAction, deletePostAction } from "@/server/actions/post-actions";

interface EditPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditarPostPage({ params }: EditPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  async function handleUpdate(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const status = formData.get("status") as "draft" | "published";
    const coverImageUrl = (formData.get("coverImageUrl") as string) || undefined;

    await updatePostAction(slug, { title, content, excerpt, status, coverImageUrl });
    redirect("/painel/posts");
  }

  async function handleDelete() {
    "use server";
    await deletePostAction(slug);
    redirect("/painel/posts");
  }

  return (
    <main>
      <h1>Editar Post</h1>
      <form action={handleUpdate}>
        <div>
          <label htmlFor="title">Título</label>
          <input id="title" name="title" type="text" defaultValue={post.title} required aria-required="true" />
        </div>
        <div>
          <label htmlFor="excerpt">Resumo</label>
          <input id="excerpt" name="excerpt" type="text" defaultValue={post.excerpt} required aria-required="true" />
        </div>
        <div>
          <label htmlFor="coverImageUrl">URL da imagem de capa</label>
          <input id="coverImageUrl" name="coverImageUrl" type="url" defaultValue={post.coverImageUrl ?? ""} />
        </div>
        <div>
          <label htmlFor="content">Conteúdo</label>
          <textarea id="content" name="content" required aria-required="true" defaultValue={post.content} />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue={post.status}>
            <option value="draft">Rascunho</option>
            <option value="published">Publicado</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
      <form action={handleDelete}>
        <button type="submit">Deletar post</button>
      </form>
    </main>
  );
}
