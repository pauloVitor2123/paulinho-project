# paulinho-project

Blog pessoal sobre tecnologia, liderança e negócios — construído do zero com padrões de engenharia rigorosos.

> Este projeto é um experimento de **vibe coding**: todo o código é escrito por IA (Claude), com o dono do projeto atuando apenas como arquiteto e revisor. O objetivo é testar até onde a IA consegue ir com autonomia real em um projeto de produção.

---

## Propósito

- Construir um blog pessoal de qualidade de produção
- Provar que é possível manter padrões rígidos (TDD, arquitetura em camadas, tipagem total) com desenvolvimento orientado por IA
- Documentar as decisões e aprendizados ao longo do caminho

---

## Stack

| Camada         | Tecnologia                          |
|----------------|-------------------------------------|
| Framework      | Next.js 15 (App Router)             |
| Linguagem      | TypeScript (strict)                 |
| Banco de dados | PostgreSQL + Drizzle ORM            |
| Autenticação   | BetterAuth                          |
| Validação      | Zod                                 |
| Testes         | Vitest                              |
| Linting        | ESLint + Prettier                   |
| Comentários    | Giscus (GitHub Discussions)         |
| Analytics      | Umami (self-hosted)                 |
| Imagens        | Cloudinary                          |
| CDN / Proxy    | Cloudflare                          |
| Hosting        | Railway ou Render                   |

---

## Estrutura

```
paulinho-project/
├── apps/
│   └── blog-do-pv/        ← blog pessoal (Next.js)
└── packages/
    ├── ui/                ← componentes compartilhados (futuro)
    ├── config/            ← configurações compartilhadas
    └── db/                ← schema Drizzle e cliente de banco
```

Monorepo gerenciado com **pnpm workspaces**.

---

## Princípios

- **TDD obrigatório** — testes escritos antes do código, sem exceção
- **Paradigma funcional** — sem classes, funções puras e composição
- **Zero `any`** — TypeScript strict em tudo
- **Quanto menos código, melhor** — ferramentas existentes fazem o trabalho pesado

---

## Como rodar

```bash
# Instalar dependências
pnpm install

# Rodar o blog em dev
pnpm dev

# Rodar todos os testes
pnpm test
```

Copie `.env.example` para `.env` e preencha as variáveis antes de rodar.

---

## Variáveis de ambiente

Veja [`.env.example`](.env.example) para a lista completa.
