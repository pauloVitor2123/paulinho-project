<div align="center">

<img src="https://img.shields.io/badge/vibe%20coding-powered%20by%20AI-blueviolet?style=for-the-badge&logo=anthropic&logoColor=white" />
<img src="https://img.shields.io/badge/status-em%20construção-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/licença-MIT-green?style=for-the-badge" />

# paulinho-project

**Um blog pessoal construído inteiramente por IA — sem digitar uma linha de código.**

*Tecnologia · Liderança · Negócios*

</div>

---

## O que é isso?

O **paulinho-project** é um monorepo que abriga o **blog-do-pv**, um blog pessoal sobre tecnologia, liderança e negócios.

Mas esse projeto vai além de um blog. Ele é um **experimento real de vibe coding**: toda linha de código é escrita por IA (Claude da Anthropic). O dono do projeto atua exclusivamente como **arquiteto e revisor** — define a visão, aprova decisões de arquitetura e faz code review nos PRs. Zero código digitado manualmente.

A pergunta que este projeto responde:

> *É possível construir um produto de produção com padrões rigorosos — TDD, tipagem total, arquitetura em camadas — confiando a execução inteira para uma IA?*

---

## O problema

Blogs pessoais de desenvolvedores costumam cair em dois extremos:

- **Muito simples** — plataformas prontas (Medium, Substack) que não refletem a identidade técnica do autor e oferecem zero controle sobre dados, layout e funcionalidades.
- **Muito complexos** — projetos super-engenheirados que nunca saem do estado "em construção" porque o desenvolvedor se perde em decisões técnicas infinitas.

---

## A solução

Um blog próprio, com código de produção, construído com a stack certa desde o início — sem gastar semanas tomando decisões técnicas sozinho.

A IA cuida da execução. O dono do projeto cuida da direção.

Resultado: um produto real, com testes, arquitetura limpa e deploy, construído em uma fração do tempo normal.

---

## O experimento de vibe coding

Este projeto documenta, na prática, o poder da IA como parceira de desenvolvimento:

| O dono faz | A IA faz |
|------------|----------|
| Define arquitetura e estrutura de pastas | Implementa o código |
| Escolhe tecnologias (com opções apresentadas pela IA) | Escreve testes antes do código (TDD) |
| Faz code review nos PRs | Abre PRs com commits claros e diretos |
| Decide regras de negócio | Documenta decisões e atualiza o CLAUDE.md |
| Valida o produto final | Mantém padrões: zero `any`, sem classes, imports com `@` |

Cada PR deste repositório foi criado e implementado pela IA. O histórico de commits é o diário do experimento.

---

## Stack

### Core do blog-do-pv

<table>
  <tr>
    <td align="center" width="110">
      <img src="https://skillicons.dev/icons?i=nextjs" width="45" height="45" /><br/>
      <strong>Next.js 15</strong><br/>
      <sub>App Router · SSR · SEO</sub>
    </td>
    <td align="center" width="110">
      <img src="https://skillicons.dev/icons?i=ts" width="45" height="45" /><br/>
      <strong>TypeScript</strong><br/>
      <sub>strict · zero any</sub>
    </td>
    <td align="center" width="110">
      <img src="https://skillicons.dev/icons?i=tailwind" width="45" height="45" /><br/>
      <strong>Tailwind CSS</strong><br/>
      <sub>estilização</sub>
    </td>
    <td align="center" width="110">
      <img src="https://skillicons.dev/icons?i=postgres" width="45" height="45" /><br/>
      <strong>PostgreSQL</strong><br/>
      <sub>banco de dados</sub>
    </td>
    <td align="center" width="110">
      <img src="https://skillicons.dev/icons?i=cloudflare" width="45" height="45" /><br/>
      <strong>Cloudflare</strong><br/>
      <sub>CDN · proxy · SSL</sub>
    </td>
  </tr>
</table>

### Bibliotecas e serviços

| Camada | Tecnologia | Por quê foi escolhida |
|--------|-----------|----------------------|
| ORM | **Drizzle** | SQL-first, tipagem total, sem geração de client, mais leve que Prisma |
| Autenticação | **BetterAuth** | TypeScript-first, extensível, sem dependência de serviço externo pago |
| Validação | **Zod** | Validação em runtime + tipos TypeScript inferidos automaticamente |
| Testes | **Vitest** | Nativo com TS, ultra-rápido, API compatível com Jest, zero config |
| Linting | **ESLint + Prettier** | Padrão da indústria, suporte maduro em monorepos |
| Comentários | **Giscus** | Baseado em GitHub Discussions — sem banco extra, sem custo |
| Analytics | **Umami** | Self-hosted, privacidade por padrão, GDPR-friendly |
| Imagens | **Cloudinary** | CDN automático, otimização, transformações on-the-fly, free tier |
| Vídeos | **YouTube / Vimeo** | Embed simples, sem custo de storage ou CDN |
| Hosting | **Railway / Render** | Deploy simples, free tier para o início |

### Monorepo

| Ferramenta | Uso |
|-----------|-----|
| **pnpm workspaces** | Gerenciamento de pacotes e links automáticos entre apps |
| **tsconfig.base.json** | TypeScript compartilhado com `strict: true` |
| **eslint.base.js** | Regras ESLint compartilhadas |
| **Prettier** | Formatação consistente em todo o monorepo |

---

## Arquitetura

```
paulinho-project/                        <- raiz do monorepo (pnpm workspaces)
|
+-- apps/
|   +-- blog-do-pv/                      <- blog pessoal (Next.js 15 App Router)
|       +-- src/
|           +-- app/
|           |   +-- (public)/            <- rotas publicas (sem autenticacao)
|           |   |   +-- [slug]/          <- pagina de post
|           |   +-- (private)/           <- rotas autenticadas (admin, editor)
|           |       +-- rota/
|           |           +-- _components/ <- componentes exclusivos da rota
|           |           +-- _hooks/      <- hooks exclusivos da rota
|           +-- components/              <- componentes React compartilhados
|           +-- hooks/                   <- hooks de UI compartilhados
|           +-- libs/                    <- utilitarios e helpers
|           +-- providers/               <- providers de contexto (Theme, Query)
|           +-- server/
|           |   +-- actions/             <- Server Actions - so para mutacoes
|           |   +-- repositories/        <- acesso a dados via Drizzle
|           |   +-- services/            <- regras de negocio (sempre com teste)
|           +-- types/                   <- tipos TypeScript globais
|           +-- validators/              <- schemas Zod de validacao
|
+-- packages/
    +-- ui/                              <- componentes compartilhados (futuro)
    +-- config/                          <- tsconfig e eslint base
    +-- db/                              <- schema Drizzle e cliente compartilhado
```

### Fluxo de dados

```
Client Component
      |
      +-- leitura --> URL/search params --> Server Component --> service --> repository --> DB
      |
      +-- escrita --> Server Action --> service --> repository --> DB
```

**Regras que não se quebram:**
- Server Actions são **exclusivamente para escrita** — nunca para leitura
- Leituras acontecem sempre em **Server Components** chamando services diretamente
- Hooks do lado do client **não conhecem services** (todos têm `import "server-only"`)

---

## Princípios de desenvolvimento

```
1. TDD obrigatório      — teste escrito ANTES do código, sem exceção
2. Paradigma funcional  — zero classes, apenas funções puras e composição
3. Zero any             — TypeScript strict em tudo, sem atalhos
4. Menos é mais         — ferramentas existentes fazem o trabalho pesado
5. Server first         — "use client" só onde for estritamente necessário
```

O ciclo de desenvolvimento para toda feature:

```
RED      -> escreve o teste que descreve o comportamento (ele falha)
GREEN    -> escreve o mínimo de código para o teste passar
REFACTOR -> melhora sem quebrar o teste
```

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
