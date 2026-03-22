import { redirect } from "next/navigation";
import { createPostAction } from "@/server/actions/post-actions";

export default function NovoPostPage() {
  async function handleCreate(formData: FormData) {
    "use server";
    const slug = formData.get("slug") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const status = (formData.get("status") as "draft" | "published") ?? "draft";
    const coverImageUrl = (formData.get("coverImageUrl") as string) || undefined;

    await createPostAction({ slug, title, content, excerpt, status, coverImageUrl });
    redirect("/painel/posts");
  }

  return (
    <main>
      <h1>Novo Post</h1>
      <form action={handleCreate}>
        <div>
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" type="text" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="title">Título</label>
          <input id="title" name="title" type="text" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="excerpt">Resumo</label>
          <input id="excerpt" name="excerpt" type="text" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="coverImageUrl">URL da imagem de capa</label>
          <input id="coverImageUrl" name="coverImageUrl" type="url" />
        </div>
        <div>
          <label htmlFor="content">Conteúdo</label>
          <textarea id="content" name="content" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue="draft">
            <option value="draft">Rascunho</option>
            <option value="published">Publicado</option>
          </select>
        </div>
        <button type="submit">Criar post</button>
      </form>
    </main>
  );
}
