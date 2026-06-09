# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Contrato de trabalho entre você e o agente de IA.
> Toda decisão de linguagem, biblioteca, pacote ou tecnologia deve ser consultada
> com o dono do projeto — apresente pelo menos 3 opções e recomende 1 com justificativa.

## Comandos Comuns

```bash
# Raiz do monorepo
pnpm dev          # inicia blog-do-pv em modo dev
pnpm build        # build de produção do blog-do-pv
pnpm lint         # lint em todos os packages
pnpm test         # testes em todos os packages
pnpm format       # prettier em todo o monorepo

# apps/blog-do-pv
pnpm test                             # todos os testes
pnpm vitest run src/path/to/file.test.ts  # teste único

# packages/db
pnpm db:generate  # gera SQL de migration a partir do schema TypeScript
# NÃO use db:migrate nem db:studio (porta 5432 bloqueada — ver database.md)
```

## Regras detalhadas em `.claude/rules/`

- [`architecture.md`](.claude/rules/architecture.md) — camadas do backend, data fetch, estrutura de services
- [`testing.md`](.claude/rules/testing.md) — TDD obrigatório, mocks, exemplos
- [`code-standards.md`](.claude/rules/code-standards.md) — TypeScript, nomenclatura, alias `@`, Zod, commits
- [`nextjs.md`](.claude/rules/nextjs.md) — boas práticas Next.js, acessibilidade, env vars, Umami
- [`database.md`](.claude/rules/database.md) — workflow de migrations, Supabase project
- [`project-context.md`](.claude/rules/project-context.md) — decisões de arquitetura, hurdles, lições, checklist

---

## Visão Geral do Monorepo

**Repositório:** `paulinho-project` — monorepo pnpm workspaces, TypeScript em tudo.

```
paulinho-project/
├── apps/
│   └── blog-do-pv/     ← blog pessoal (Next.js, App Router)
└── packages/
    ├── ui/             ← componentes compartilhados (futuro)
    ├── config/         ← tsconfig, eslint compartilhados
    └── db/             ← schema Drizzle e cliente de banco
```

## Stack do blog-do-pv

| Camada      | Ferramenta                          |
|-------------|-------------------------------------|
| Framework   | Next.js (App Router)                |
| Auth        | BetterAuth                          |
| Banco       | PostgreSQL + Drizzle ORM (Supabase) |
| Validação   | Zod                                 |
| Testes      | Vitest                              |
| Hosting     | Vercel                              |
| Analytics   | Umami (self-hosted)                 |
| Comentários | Giscus (GitHub Discussions)         |
| Imagens     | Cloudinary                          |

**Princípio fundador:** quanto menos código, melhor.

---

## Autonomia do Agente

O agente pode **criar, editar e deletar arquivos livremente** sem pedir permissão.

O dono do projeto decide sobre:
- **Arquitetura** — como os sistemas se comunicam, padrões globais
- **Estrutura de pastas** — organização de diretórios
- **Tecnologias novas** — qualquer lib, framework ou serviço não listado aqui

Para essas três categorias, o agente DEVE apresentar opções e aguardar decisão.

**Formato obrigatório de consulta:**

```
Preciso de uma ferramenta para [problema]. Aqui estão as opções:

1. [Opção A] — [descrição curta]. Prós: [...]. Contras: [...].
2. [Opção B] — [descrição curta]. Prós: [...]. Contras: [...].
3. [Opção C] — [descrição curta]. Prós: [...]. Contras: [...].

Recomendo a opção [X] porque [justificativa direta e objetiva].
Qual você prefere?
```

---

## Notas de Arquitetura Não-Óbvias

### `server-only` em testes
O Vitest não entende o pacote `server-only`. O `vitest.config.ts` do `blog-do-pv` o aliasa para um stub em `src/__mocks__/server-only.ts`. Ao criar novos services/repositories com `import "server-only"`, os testes funcionam sem configuração adicional.

### Pacote `@paulinho-project/db`
Exporta o schema Drizzle (`posts`, `tags`, `postsToTags`, `user`, `session`, `account`, `verification`) e os helpers de query do Drizzle (`eq`, `desc`, etc.). O `db` client (instância `pg`) fica em `apps/blog-do-pv/src/libs/db.ts`.

### Proteção de rotas
O middleware (`apps/blog-do-pv/middleware.ts`) protege `/painel/:path*` verificando o cookie `better-auth.session_token`. Rotas não autenticadas redirecionam para `/entrar`. Para adicionar novas rotas protegidas, atualize o `matcher` no middleware.

### Serviços de post — público vs. admin
- **Públicos** (`listPublishedPosts`, `getPublishedPostBySlug`) — retornam apenas posts com `status: "published"`.
- **Admin** (`listAllPosts`, `getPostBySlug`) — retornam todos os posts independente do status.
- `publishedAt` e `slug` são imutáveis após a primeira publicação (ver `docs/post-lifecycle.md`).
