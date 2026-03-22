<p align="center">
  <h1 align="center">paulinho-project</h1>
  <p align="center">Monorepo de um blog pessoal sobre tecnologia, liderança e negócios.</p>
  <p align="center">
    <img src="https://img.shields.io/badge/vibe%20coding-100%25%20IA-blueviolet?style=for-the-badge" />
    <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/pnpm-workspaces-F69220?style=for-the-badge&logo=pnpm&logoColor=white" />
  </p>
</p>

---

## Sobre o projeto

O **paulinho-project** é um monorepo que abriga o **blog-do-pv** — um blog pessoal sobre tecnologia, liderança e negócios.

Mas mais do que um blog, este projeto é um **experimento de vibe coding**: todo o código é escrito por IA (Claude), com o dono do projeto atuando exclusivamente como **arquiteto e revisor**. Nenhuma linha de código é digitada manualmente — apenas decisões de arquitetura, revisão de PR e validação de negócio.

> O objetivo é provar que é possível construir um produto de produção com padrões rigorosos — TDD, tipagem total, arquitetura em camadas — usando IA com autonomia real.

---

## Aplicações

| App | Descrição | Status |
|-----|-----------|--------|
| `blog-do-pv` | Blog pessoal com SSR, autenticação e analytics | Em construção |

---

## Stack — blog-do-pv

### Core

<table>
  <tr>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=nextjs" width="48" /><br/>
      <strong>Next.js 15</strong><br/>
      <sub>App Router + SSR</sub>
    </td>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=ts" width="48" /><br/>
      <strong>TypeScript</strong><br/>
      <sub>strict mode</sub>
    </td>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" /><br/>
      <strong>Tailwind CSS</strong><br/>
      <sub>estilização</sub>
    </td>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=postgres" width="48" /><br/>
      <strong>PostgreSQL</strong><br/>
      <sub>banco de dados</sub>
    </td>
  </tr>
</table>

### Bibliotecas e ferramentas

| Categoria | Tecnologia | Por quê |
|-----------|-----------|---------|
| ORM | Drizzle | SQL-first, tipagem total, sem geração de client |
| Autenticação | BetterAuth | TypeScript-first, extensível, sem serviço externo pago |
| Validação | Zod | Validação runtime + tipos inferidos automaticamente |
| Testes | Vitest | Nativo com TS, ultra-rápido, API compatível com Jest |
| Linting | ESLint + Prettier | Padrão da indústria, suporte maduro em monorepos |
| Comentários | Giscus | Baseado em GitHub Discussions, sem banco extra |
| Analytics | Umami | Self-hosted, privacidade, GDPR-friendly |
| Imagens | Cloudinary | CDN automático, otimização, free tier |
| CDN / Proxy | Cloudflare | Performance e segurança gratuitos |
| Hosting | Railway / Render | Deploy simples, free tier para início |

---

## Arquitetura

```
paulinho-project/                  ← raiz do monorepo (pnpm workspaces)
├── apps/
│   └── blog-do-pv/                ← blog pessoal (Next.js App Router)
│       └── src/
│           ├── app/
│           │   ├── (public)/      ← rotas públicas
│           │   └── (private)/     ← rotas autenticadas
│           ├── components/        ← componentes React compartilhados
│           ├── server/
│           │   ├── actions/       ← Server Actions (mutações)
│           │   ├── repositories/  ← acesso a dados via Drizzle
│           │   └── services/      ← regras de negócio (com testes)
│           └── validators/        ← schemas Zod
└── packages/
    ├── ui/                        ← componentes compartilhados (futuro)
    ├── config/                    ← tsconfig e eslint base
    └── db/                        ← schema Drizzle e cliente compartilhado
```

---

## Princípios de desenvolvimento

- **TDD obrigatório** — o teste é escrito antes do código, sem exceção
- **Paradigma funcional** — sem classes, apenas funções puras e composição
- **Zero `any`** — TypeScript strict em tudo, sem atalhos
- **Quanto menos código, melhor** — ferramentas existentes fazem o trabalho pesado
- **Server Components por padrão** — `"use client"` só onde for realmente necessário
- **Server Actions apenas para escrita** — leituras sempre em Server Components

---

## Como rodar

**Pré-requisitos:** Node.js >= 20, pnpm >= 9, PostgreSQL local

```bash
# 1. Clonar e instalar
git clone https://github.com/pauloVitor2123/paulinho-project.git
cd paulinho-project
pnpm install

# 2. Configurar variáveis de ambiente
cp .env.example apps/blog-do-pv/.env.local
# edite o arquivo com suas credenciais

# 3. Rodar migrations
pnpm --filter blog-do-pv db:migrate

# 4. Subir em desenvolvimento
pnpm dev
```

### Scripts disponíveis

| Comando | O que faz |
|---------|-----------|
| `pnpm dev` | Sobe o blog em modo desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm test` | Roda todos os testes |
| `pnpm lint` | Verifica linting em todo o monorepo |
| `pnpm format` | Formata todos os arquivos com Prettier |

---

## Variáveis de ambiente

Veja [`.env.example`](.env.example) para a lista completa. As principais:

```bash
DATABASE_URL=                      # conexão com PostgreSQL
BETTER_AUTH_SECRET=                # string aleatória >= 32 chars
BETTER_AUTH_URL=                   # URL pública do app
CLOUDINARY_CLOUD_NAME=             # para upload de imagens
NEXT_PUBLIC_UMAMI_WEBSITE_ID=      # analytics
NEXT_PUBLIC_GISCUS_REPO=           # comentários
```

---

<div align="center">

Feito com Claude &nbsp;·&nbsp; Revisado por humano &nbsp;·&nbsp; Zero linhas digitadas manualmente

</div>
