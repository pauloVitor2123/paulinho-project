# CLAUDE.md — paulinho-project

> Este arquivo é o contrato de trabalho entre você e o agente de IA.
> Leia este arquivo inteiro antes de qualquer interação no projeto.
> Atualize-o sempre que descobrir um novo hurdle ou tomar uma decisão de arquitetura.
> Toda decisão de linguagem, biblioteca, pacote ou tecnologia deve ser consultada
> com o dono do projeto antes de ser adotada — apresente pelo menos 3 opções
> e recomende 1 com justificativa clara.

---

## Visão Geral do Monorepo

**Nome do repositório:** `paulinho-project`
**Estrutura:** Monorepo com múltiplas aplicações independentes.
**Linguagem padrão:** TypeScript em todos os projetos sempre que possível.
**Gerenciador de pacotes:** pnpm (workspaces nativos, mais rápido, links automáticos entre pacotes internos).

Todas as aplicações ficam em `/apps`. Cada app é independente, mas compartilha
configurações e pacotes internos do monorepo via `/packages`.

```
paulinho-project/
├── CLAUDE.md                        ← você está aqui
├── package.json                     ← root do monorepo (pnpm workspaces)
├── pnpm-workspace.yaml              ← declaração dos workspaces
├── tsconfig.base.json               ← tsconfig compartilhado
├── .eslintrc.base.js                ← eslint base compartilhado
├── .prettierrc                      ← prettier compartilhado
├── docs/                            ← documentação de regras de negócio (.md)
├── apps/
│   └── blog-do-pv/                  ← blog pessoal (ver seção abaixo)
└── packages/
    ├── ui/                          ← componentes compartilhados (futuro)
    ├── config/                      ← configurações compartilhadas (tsconfig, eslint)
    └── db/                          ← schema Drizzle e cliente de banco compartilhado
```

---

## Aplicações

### blog-do-pv

Blog pessoal sobre tecnologia, liderança e negócios. Começa como projeto privado
sem divulgação — foco total em construir a base certa antes de crescer.

#### Estrutura de pastas

```
apps/blog-do-pv/
├── src/
│   ├── app/
│   │   ├── (public)/                ← rotas públicas (sem autenticação)
│   │   └── (private)/               ← rotas autenticadas/fechadas
│   │       └── minha-rota/
│   │           ├── _components/     ← componentes específicos desta rota
│   │           └── _hooks/          ← hooks específicos desta rota
│   ├── components/                  ← componentes React compartilhados
│   ├── hooks/                       ← hooks compartilhados (lógica de UI/cliente)
│   ├── libs/                        ← utilitários e helpers
│   ├── providers/                   ← providers de contexto compartilhados
│   ├── server/
│   │   ├── actions/                 ← Server Actions (escrita client → server)
│   │   ├── repositories/            ← acesso a dados (Drizzle)
│   │   └── services/                ← regras de negócio
│   │       └── meu-service/
│   │           ├── meu-service.ts
│   │           └── meu-service.test.ts
│   ├── types/                       ← tipos TypeScript globais do app
│   └── validators/                  ← schemas Zod de validação
├── docs/                            ← documentação de regras de negócio (.md)
├── public/
├── next.config.ts
├── tsconfig.json                    ← extends ../../tsconfig.base.json
├── vitest.config.ts
└── package.json
```

**Regras de estrutura:**
- `(public)` e `(private)` são route groups do App Router. Use `(private)` para rotas autenticadas.
- Pastas prefixadas com `_` são exclusivas da rota onde estão (`_components`, `_hooks`).
- `src/providers/` é o local para providers compartilhados (ThemeProvider, QueryClientProvider, etc.).
- A correspondência **service ↔ teste é obrigatória**: `meu-service.ts` sempre tem `meu-service.test.ts`.

#### Stack do blog-do-pv

| Camada          | Ferramenta                                                |
|-----------------|-----------------------------------------------------------|
| Framework       | Next.js (App Router, SSR/SSG, SEO nativo)                 |
| Linguagem       | TypeScript                                                |
| Autenticação    | BetterAuth (simples, extensível, TS-first)                |
| Banco de dados  | PostgreSQL + Drizzle ORM                                  |
| Validação       | Zod                                                       |
| Testes          | Vitest                                                    |
| Linting         | ESLint + Prettier                                         |
| Comentários     | Giscus (GitHub Discussions)                               |
| Analytics       | Umami (self-hosted)                                       |
| Imagens         | Cloudinary (free tier)                                    |
| Vídeos          | YouTube / Vimeo embed                                     |
| CDN / proxy     | Cloudflare (plano gratuito)                               |
| Hosting         | Railway ou Render (free tier início)                      |
| SSL             | Let's Encrypt (automático)                                |

**Princípio fundador:** quanto menos código, melhor.
Ferramentas existentes fazem o trabalho pesado. Só criamos código para o que é exclusivamente nosso.

---

## Regra de Consulta para Novas Tecnologias

> Antes de adotar qualquer linguagem, biblioteca, pacote ou tecnologia nova,
> o agente DEVE apresentar opções e aguardar decisão. Nunca adotar por conta própria.

**Formato obrigatório de consulta:**

```
Preciso de uma ferramenta para [problema]. Aqui estão as opções:

1. [Opção A] — [descrição curta]. Prós: [...]. Contras: [...].
2. [Opção B] — [descrição curta]. Prós: [...]. Contras: [...].
3. [Opção C] — [descrição curta]. Prós: [...]. Contras: [...].

Recomendo a opção [X] porque [justificativa direta e objetiva].
Qual você prefere?
```

Só depois da resposta do dono do projeto o agente pode instalar ou escrever código.

---

## Paradigma de Programação

- O projeto segue o **paradigma funcional**.
- **Não use classes.** Prefira funções puras e composição.

---

## Metodologia de Desenvolvimento

### TDD — Test-Driven Development (não negociável)

Todo código de lógica de negócio segue o ciclo RED → GREEN → REFACTOR:

```
1. RED    — escreva o teste que descreve o comportamento esperado (ele falha)
2. GREEN  — escreva o mínimo de código para o teste passar
3. REFACTOR — melhore o código sem quebrar o teste
```

**Regras rígidas:**
- Nenhum serviço com regra de negócio é criado sem ter um teste unitário escrito ANTES
- Nenhum commit entra sem todos os testes passando
- Se um teste estiver difícil de escrever, o design está errado — simplifique o código, não o teste
- Mocks apenas para dependências externas reais (APIs de terceiros, banco de dados)
- Descrições dos testes sempre em **inglês**

### O que SEMPRE tem teste unitário antes:
- Qualquer serviço em `src/server/services/`
- Qualquer helper/utility com lógica condicional em `src/libs/`
- Qualquer integração com API externa (testada com mock via `vi.mock`)

### O que NÃO precisa de teste unitário:
- Configuração de rotas sem lógica
- Scripts de seed/migration
- Código de UI puro sem lógica de negócio
- Repositories (validados indiretamente via services)

---

## Arquitetura do Backend (`src/server`)

### Responsabilidades por camada

| Camada         | Responsabilidade                                                 |
|----------------|------------------------------------------------------------------|
| `services/`    | Regras de negócio e orquestrações. Contém `import "server-only"` |
| `repositories/`| Acesso a dados via Drizzle. Contém `import "server-only"`        |
| `actions/`     | Coordenação de escrita entre client components e services. Usa `"use server"` |

### Política de Data Fetch

**Leituras:**
- Sempre em **Server Components**, chamando **services** diretamente.
- **Proibido** usar Server Actions para leitura.
- Hooks client **não** importam services (todos os services têm `import "server-only"`).

**Leitura dinâmica iniciada no cliente (busca, filtros, paginação):**
- O Client Component escreve estado na **URL (search params)** ou **cookies**.
- O Server Component lê `searchParams`/cookies e chama o service.
- Evitar rotas `/api` internas para isso.

```tsx
// CORRETO — app/posts/page.tsx (Server Component)
import { listPosts } from "@/server/services/post/list-posts";

export default async function PostsPage({
  searchParams,
}: { searchParams: { q?: string; page?: string } }) {
  const q = searchParams.q ?? "";
  const page = Number(searchParams.page ?? "1");
  const posts = await listPosts({ q, page });
  return <PostsClient posts={posts} />;
}
```

**Escritas:**
- Sempre via **Server Actions** em `src/server/actions/`.
- Nunca chamar services diretamente de Client Components.

### Estrutura de um service (padrão obrigatório)

```typescript
// src/server/services/post/get-post-by-slug.ts
import "server-only";
import { z } from "zod";
import { getPostBySlugRepo } from "@/server/repositories/post-repository";

const InputSchema = z.object({ slug: z.string().min(1) });

export async function getPostBySlug(slug: string) {
  InputSchema.parse({ slug });
  try {
    return await getPostBySlugRepo(slug);
  } catch (error) {
    console.error("getPostBySlug error", error);
    throw new Error("Failed to get post by slug");
  }
}
```

```typescript
// src/server/services/post/get-post-by-slug.test.ts (escrito ANTES)
import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPostBySlug } from "./get-post-by-slug";

vi.mock("@/server/repositories/post-repository", () => ({
  getPostBySlugRepo: vi.fn(),
}));

import { getPostBySlugRepo } from "@/server/repositories/post-repository";

describe("getPostBySlug", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws when slug is empty", async () => {
    await expect(getPostBySlug("")).rejects.toThrow();
  });

  it("returns post when slug is valid", async () => {
    vi.mocked(getPostBySlugRepo).mockResolvedValue({ id: "1", slug: "hello" });
    const result = await getPostBySlug("hello");
    expect(result).toEqual({ id: "1", slug: "hello" });
  });

  it("throws when repository fails", async () => {
    vi.mocked(getPostBySlugRepo).mockRejectedValue(new Error("db error"));
    await expect(getPostBySlug("hello")).rejects.toThrow("Failed to get post by slug");
  });
});
```

### Mock padrão para banco de dados

Use este padrão para mockar o Drizzle nos testes:

```typescript
vi.mock("@/libs/db", () => ({
  db: {
    select: vi.fn(),
    insert: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    query: {},
  },
}));
```

---

## Validações com Zod

- Use **Zod** para todas as validações de input e schemas.
- **Obrigatório:** toda função pública de service valida o input com Zod antes de qualquer lógica.
- Schemas ficam em `src/validators/`.
- Não valide inputs nos repositories — já são validados no service.

**Regras específicas:**

| Tipo    | Use                  | Não use                  |
|---------|----------------------|--------------------------|
| IDs     | `z.string().uuid()`  | `z.string()`             |
| URLs    | `z.url()`            | `z.string().url()`       |
| E-mails | `z.email()`          | `z.string().email()`     |

---

## Padrões de Código

### TypeScript
- `strict: true` em todos os tsconfigs
- Sem `any` — se necessário, use `unknown` e faça type guard
- Tipos explícitos em assinaturas de funções públicas
- Prefira `interface` para objetos, `type` para unions e primitivos

### Nomenclatura

| Elemento                    | Padrão                          |
|-----------------------------|---------------------------------|
| Arquivos e pastas           | `kebab-case`                    |
| Pastas de rotas Next.js     | **português** (ex: `sobre-mim`) |
| Variáveis e funções         | `camelCase`                     |
| Interfaces e tipos          | `PascalCase`                    |
| Constantes globais          | `UPPER_SNAKE_CASE`              |
| Componentes React           | `PascalCase.tsx`                |
| Todos os demais (funções, vars, etc.) | **inglês**         |

### Alias `@` — obrigatório em todos os imports internos

**SEMPRE use `@` em vez de caminhos relativos.**

```typescript
// ✅ CORRETO
import { Button } from "@/components/button";
import { auth } from "@/libs/auth";
import { getPostBySlug } from "@/server/services/post/get-post-by-slug";

// ❌ ERRADO
import { Button } from "../../components/button";
import { auth } from "../../../libs/auth";
```

O alias `@` aponta para `./src/*` e está configurado no `tsconfig.json` de cada app.

---

## Boas Práticas Next.js

- Adicione `import "server-only"` no topo de todos os **services** e **repositories** — obrigatório.
- Marque Server Actions com `"use server"` no topo do arquivo ou função.
- Use **Server Components** por padrão (padrão do App Router).
- Use `"use client"` apenas em arquivos `.tsx` que exportem componentes interativos.
- **Não use `"use client"` em arquivos `.ts`** (incluindo hooks). A marcação vive no componente consumidor.
- Nunca faça chamadas diretas a banco/HTTP em `.tsx` — delegue a services (leitura) ou actions (escrita).
- **Hooks client não chamam services.** Para leituras dinâmicas, escreva estado na URL e leia no Server Component.
- **Não use Server Actions para leitura.** Actions são exclusivas para mutações.

---

## Acessibilidade

- Todos os componentes devem ser acessíveis com atributos `aria-*` quando necessário.
- Todos os elementos interativos devem ser navegáveis via teclado.
- Use roles semânticos corretos: `button`, `dialog`, `alert`, `navigation`, etc.
- Adicione descrições e rótulos acessíveis em todos os elementos interativos.
- Todo elemento clicável deve ter `cursor: pointer`.

---

## Documentação de Regras de Negócio

Sempre que uma regra de negócio relevante for implementada, crie ou atualize
um arquivo `.md` em `/docs` (na raiz do monorepo) ou em `apps/blog-do-pv/docs/`.

**Formato do arquivo:**
- Nome: `kebab-case.md` descrevendo o domínio (ex: `post-lifecycle.md`, `reading-metrics.md`)
- Conteúdo: o quê a regra faz, por quê existe, exemplos de casos de borda

---

## Padrão de Commits

```
Test: add [o que o teste cobre]
Add: implement [o que foi criado] (tests passing)
Fix: [o que foi corrigido] (tests passing)
Refactor: [o que foi simplificado] (tests passing)
Security: [o que foi protegido]
Docs: update CLAUDE.md with [o que foi documentado]
Chore: [configuração, dependências, infraestrutura]
```

**Regra:** commits de teste e de implementação são sempre separados.

---

## Variáveis de Ambiente

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/blog_do_pv

# BetterAuth
BETTER_AUTH_SECRET=              # string aleatória >= 32 chars
BETTER_AUTH_URL=https://seudominio.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Umami
NEXT_PUBLIC_UMAMI_SCRIPT_URL=    # URL do seu Umami self-hosted
NEXT_PUBLIC_UMAMI_WEBSITE_ID=    # ID do site no Umami

# Giscus
NEXT_PUBLIC_GISCUS_REPO=seu-usuario/blog-comments
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
```

Nenhuma variável de ambiente é hardcoded no código. Jamais.
Todas as variáveis `NEXT_PUBLIC_` são seguras para o browser.
Variáveis sem prefixo são server-only.

---

## Métricas e Eventos do Umami

| Evento           | Disparado quando                         |
|------------------|------------------------------------------|
| `page_view`      | Leitor abre qualquer página (automático) |
| `scroll_25`      | Scroll atinge 25% do post                |
| `scroll_50`      | Scroll atinge 50% do post                |
| `scroll_75`      | Scroll atinge 75% do post                |
| `scroll_90`      | Scroll atinge 90% — leitura completa     |
| `share_twitter`  | Clique em compartilhar no X              |
| `share_linkedin` | Clique em compartilhar no LinkedIn       |
| `share_whatsapp` | Clique em compartilhar no WhatsApp       |
| `post_liked`     | Leitor curte o post                      |
| `post_favorited` | Leitor favorita o post                   |

---

## Checklist Pós-Implementação

### Toda feature nova
- [ ] Tecnologia nova consultada e aprovada pelo dono do projeto
- [ ] Teste unitário escrito ANTES do código (RED)
- [ ] Implementação mínima para passar (GREEN)
- [ ] Refactoring se necessário (REFACTOR)
- [ ] Nenhum teste anterior quebrado
- [ ] Commits separados: teste → implementação
- [ ] Imports usando alias `@` (sem caminhos relativos)
- [ ] `import "server-only"` em todo service e repository
- [ ] Sem `any`, sem variáveis hardcoded, sem `console.log` esquecido
- [ ] Regra de negócio documentada em `/docs` se relevante

### Segurança (a cada nova integração)
- [ ] Nenhuma chave de API exposta no código ou no Git
- [ ] Variáveis server-only sem prefixo `NEXT_PUBLIC_`
- [ ] Autenticação (BetterAuth) protegendo rotas `(private)`
- [ ] Robots.txt bloqueando rotas de admin
- [ ] Headers de segurança configurados (CSP, X-Frame-Options)

---

## Hurdles Documentados

> Seção que cresce durante o projeto. Cada problema resolvido vira conhecimento permanente.

| Problema | Causa | Solução |
|----------|-------|---------|
| Giscus não carrega em alguns browsers | Política de cookies de terceiros | Adicionar `data-loading="lazy"` e verificar configuração de iframe |
| Open Graph não atualiza preview no LinkedIn | LinkedIn cacheia agressivamente | Usar LinkedIn Post Inspector para forçar re-fetch |
| *(adicione aqui)* | *(causa)* | *(solução)* |

---

## Decisões de Arquitetura Registradas

| Data   | Decisão | Motivo |
|--------|---------|--------|
| Início | Monorepo com pnpm workspaces | Suporte a múltiplos projetos futuros, links automáticos entre packages, performance |
| Início | Next.js App Router | SSR/SSG nativo, SEO excelente, Server Components por padrão, TS-first |
| Início | PostgreSQL + Drizzle ORM | SQL-first, mais leve que Prisma, tipagem total com TS, sem geração de client |
| Início | BetterAuth | Simples, TypeScript-first, extensível, sem dependência de serviço externo pago |
| Início | Vitest | Nativo com TS, ultra-rápido, API compatível com Jest, zero config extra |
| Início | ESLint + Prettier | Padrão da indústria, suporte maduro em monorepos |
| Início | TypeScript strict em tudo | Segurança de tipos, sem `any`, erros pegos em compilação |
| Início | Paradigma funcional (sem classes) | Código mais previsível, testável e componível |
| Início | Zod para todas as validações | Validação runtime + tipos TypeScript inferidos automaticamente |
| Início | Alias `@` para todos os imports | Legibilidade, facilidade de refatoração, consistência |
| *(adicione aqui)* | *(decisão)* | *(motivo)* |

---

## Lições (Não Repita Esses Erros)

1. **Não construa o que já existe.** Antes de criar qualquer coisa, pergunte: "já existe uma ferramenta que resolve isso?"
2. **Teste retroativo é dívida técnica.** Código sem teste primeiro = medo de refatorar depois.
3. **A IA executa qualquer coisa com igual entusiasmo.** Over-engineering, código inseguro, duplicação — com entusiasmo. Você é o filtro.
4. **Refactoring sem testes é aposta.** Só refatore quando os testes existirem.
5. **Um arquivo com mais de 300 linhas é sinal de alarme.** Extraia responsabilidades antes de continuar.
6. **Toda tecnologia nova passa pelo dono do projeto primeiro.** A IA sugere, você decide.
7. **Server Actions são para escrita, nunca para leitura.** Leitura é Server Component → service, sempre.
8. **Hooks client não conhecem services.** Se precisar de dados no cliente, escreva na URL e leia no servidor.
