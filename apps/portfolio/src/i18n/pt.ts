import type { Translations } from "./en";

export const pt: Translations = {
  nav: {
    work: "Projetos",
    experience: "Experiência",
    stack: "Stack",
    contact: "Contato",
  },
  hero: {
    available: "Aberto a novas oportunidades",
    headlinePre: "Eu construo produtos que pessoas de verdade",
    headlineAccent: "usam.",
    sub: "Desenvolvedor Full-Stack & Tech Lead com 7+ anos entregando em escala. 100K+ usuários ativos. Ownership total — do spec à produção.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Vamos conversar",
    location: "Rio de Janeiro, Brasil · Remoto",
  },
  numbers: {
    title: "Impacto em números",
    items: [
      { value: "7+", label: "anos de código\nem produção" },
      { value: "100K+", label: "usuários ativos em\nplataformas que construí" },
      { value: "~80%", label: "de uma plataforma de\n100K usuários construída por mim" },
      { value: "83→95%", label: "saúde da plataforma\nem 8 meses como Tech Lead" },
      { value: "3", label: "produtos\ncross-platform entregues" },
    ],
  },
  pillars: {
    title: "O que eu trago",
    items: [
      {
        title: "Ownership Total",
        desc: "Do código ao deploy, do monitoramento ao resultado. Não terceirizo responsabilidade — acompanho até o final.",
      },
      {
        title: "Bridge Técnico-Produto",
        desc: "Entendo o porquê de cada feature. Isso me torna um engenheiro mais afiado e um parceiro melhor para times de produto e negócio.",
      },
      {
        title: "AI-Native",
        desc: "Uso IA como force multiplier — com evals, revisão rigorosa e zero confiança cega. Construí sistemas para validar código gerado por IA antes do merge.",
      },
      {
        title: "Construtor de Verdade",
        desc: "Tickets não me motivam. Usuários reais sim. Me importo profundamente com quem usa o que entrego, e isso muda como eu codifico.",
      },
    ],
  },
  projects: {
    title: "Projetos em destaque",
    items: [
      {
        name: "Exploradores",
        company: "EdTech · Full Ownership",
        type: "Edtech · Cross-platform",
        description:
          "Projetei e construí ~80% de uma plataforma de aprendizagem gamificada do zero — Android, iOS e Web. Motor de progressão em grafo, cinco tipos distintos de quiz, sistema de gamificação completo.",
        impact:
          "100K+ alunos ativos · Aprovado pelo MEC · Usado em redes públicas e privadas do Brasil",
        tags: ["Flutter", "Dart", "Vue.js", "Node.js", "GraphQL", "Neo4j", "PostgreSQL"],
        status: "live",
      },
      {
        name: "Orga Brain",
        company: "Projeto Pessoal",
        type: "SaaS · AI-native",
        description:
          "Plataforma whitelabel de chatbot corporativo com RAG. Aprende com os documentos de cada empresa, responde com score de confiança e escalona automaticamente para o Zendesk — economizando horas reais de suporte.",
        impact:
          "Arquitetura multi-tenant · Retrieval semântico · Widget embeddável · Em desenvolvimento",
        tags: ["Next.js", "Node.js", "TypeScript", "Supabase", "pgvector", "OpenRouter"],
        status: "wip",
      },
    ],
  },
  experience: {
    title: "Experiência",
    downloadResume: "Baixar currículo",
    items: [
      {
        role: "Tech Lead → Desenvolvedor Full-Stack",
        company: "Jovens Gênios",
        period: "Nov 2022 – Atual",
        bullets: [
          "Promovido a Tech Lead (Nov 2024): decisões de arquitetura, padrões de código, code reviews estruturados",
          "Ponto de contato entre negócio e engenharia — briefings, definição de escopo, gestão de backlog",
          "Aumentei o health score da plataforma de 83% para 95% em 8 meses",
          "Gestão de time: 1:1s, feedback estruturado, mentoria técnica",
          "Construí ~80% da plataforma — app Flutter multiplataforma com 100K+ usuários ativos",
          "Arquitetei o sistema de gamificação: missões, planetas, XP, recompensas e progressão adaptativa em grafo Neo4j",
          "Construí e mantive APIs GraphQL (Node.js) servindo mobile, web e painel admin",
          "Estabeleci Spec-Driven Development + TDD como padrão de engenharia do time",
        ],
      },
      {
        role: "Desenvolvedor Frontend",
        company: "TDSA Sistemas",
        period: "Abr 2021 – Dez 2022",
        bullets: [
          "Construí componentes reutilizáveis em React.js + TypeScript seguindo design system",
          "Escrevi testes unitários e de integração com Jest e Playwright, aumentando cobertura e reduzindo regressões",
          "Participei de decisões sobre contratos de API e modelagem de dados com backend .NET",
        ],
      },
      {
        role: "Desenvolvedor Full-Stack",
        company: "Signo Web",
        period: "Ago 2020 – Fev 2021",
        bullets: [
          "Desenvolvi aplicações web e mobile para clientes nos segmentos de varejo, serviços e logística.",
        ],
      },
      {
        role: "Desenvolvedor Web (Estágio)",
        company: "FSB Comunicação",
        period: "Set 2019 – Jun 2020",
        bullets: [
          "Desenvolvimento e manutenção de ferramentas internas para uma das maiores agências de comunicação do Brasil.",
        ],
      },
      {
        role: "Programador (Estágio)",
        company: "Banco do Brasil",
        period: "Jun 2018 – Ago 2019",
        bullets: [
          "Automatizei fluxos operacionais internos com VBA e Selenium em estágio no maior banco público do Brasil.",
        ],
      },
    ],
  },
  stack: {
    title: "Stack técnica",
    categories: [
      { label: "Mobile", items: ["Flutter", "Dart", "React Native"] },
      { label: "Frontend", items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "GraphQL", "Laravel", "PHP", ".NET"] },
      { label: "Bancos de Dados", items: ["PostgreSQL", "Neo4j", "MongoDB", "SQL Server"] },
      { label: "Testes", items: ["Jest", "Playwright", "Vitest", "TDD", "Spec-Driven"] },
      { label: "DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "AWS", "GCP"] },
      { label: "IA & Agentes", items: ["Claude Code", "OpenAI API", "Anthropic API", "RAG", "Prompt Eng."] },
    ],
  },
  ai: {
    title: "Como uso IA no meu trabalho",
    sub: "A maioria dos devs usa IA. Eu construí workflows estruturados ao redor dela.",
    items: [
      {
        phase: "Antes de codar",
        title: "Eu stresso meus specs",
        desc: "Descrevo os requisitos e deixo a IA desafiar minhas suposições, expor edge cases e sugerir alternativas arquiteturais. Isso previne retrabalho downstream — o mais caro de todos.",
      },
      {
        phase: "Durante o desenvolvimento",
        title: "Entrega acelerada",
        desc: "Boilerplate, testes, code reviews — tudo acelerado. Também construí features usando agentes de IA (Claude Code, Cursor) com prompts que encodam as convenções e padrões de qualidade do projeto.",
      },
      {
        phase: "Nível arquitetural",
        title: "Evals antes do merge",
        desc: "Construí pipelines de avaliação para validar código gerado por IA antes do merge. O agente acelera; eu garanto a qualidade. Também integrei OpenAI e Anthropic Claude diretamente em features de produto.",
      },
    ],
  },
  contact: {
    title: "Pronto para entregar algo real.",
    sub: "Tenho ownership total — da definição do problema às métricas em produção. Se é isso que seu time precisa, vamos conversar.",
    email: "paulovitor2123@gmail.com",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    cta: "Me manda um email",
  },
  footer: {
    built: "Feito por Paulo Vitor",
    stack: "Next.js · Tailwind · Framer Motion",
  },
};
