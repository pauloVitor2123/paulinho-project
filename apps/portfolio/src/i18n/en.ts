export const en = {
  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
  },
  hero: {
    available: "Open to new opportunities",
    headlinePre: "I build products that people",
    headlineAccent: "actually use.",
    sub: "Senior Full-Stack Developer & Tech Lead with 6+ years shipping at scale. 100K+ active users. Full ownership — from spec to production.",
    ctaPrimary: "See my work",
    ctaSecondary: "Let's talk",
    location: "Rio de Janeiro, Brazil · Remote",
  },
  numbers: {
    title: "Impact by the numbers",
    items: [
      { value: "6+", label: "years of production\ncode" },
      { value: "100K+", label: "active users on\nplatforms I built" },
      { value: "~80%", label: "of Exploradores\nbuilt by me" },
      { value: "83→95%", label: "platform health\nscore improved" },
      { value: "3", label: "cross-platform\nproducts shipped" },
    ],
  },
  pillars: {
    title: "What I bring",
    items: [
      {
        title: "Full Ownership",
        desc: "Code, deploy, monitor, deliver results. For me, it's all the same job. I don't hand off and walk away — I own the outcome.",
      },
      {
        title: "Tech-Product Bridge",
        desc: "I understand the WHY behind every feature. That makes me a sharper engineer and a better partner for product and business teams.",
      },
      {
        title: "AI-Native",
        desc: "I treat AI as a force multiplier — with evals, rigorous review, and zero blind trust. I've built systems to validate AI-generated code before it ever merges.",
      },
      {
        title: "Real Builder",
        desc: "Tickets don't motivate me. Real users do. I care deeply about the people who end up using what I ship, and that changes how I code.",
      },
    ],
  },
  projects: {
    title: "Featured projects",
    items: [
      {
        name: "Exploradores",
        company: "Jovens Gênios",
        type: "Edtech · Cross-platform",
        description:
          "Gamified learning platform for K-12 students built from scratch. Available on Android, iOS, and Web. I designed and built approximately 80% of its features — from the graph-based progression engine to five distinct quiz types.",
        impact:
          "100K+ active students · Approved by MEC · Used in public and private schools across Brazil",
        tags: ["Flutter", "Dart", "Vue.js", "Node.js", "GraphQL", "Neo4j", "PostgreSQL"],
        status: "live",
      },
      {
        name: "Orga Brain",
        company: "Side Project",
        type: "SaaS · AI-native",
        description:
          "White-label corporate chatbot platform with RAG. Learns from each company's documents, answers with a confidence score, and auto-escalates to Zendesk when it doesn't know enough — saving real support hours.",
        impact:
          "Multi-tenant architecture · Semantic retrieval · Embeddable widget · In development",
        tags: ["Next.js", "Node.js", "TypeScript", "Supabase", "pgvector", "OpenRouter"],
        status: "wip",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Tech Lead",
        company: "Jovens Gênios",
        period: "Nov 2024 – Present",
        bullets: [
          "Technical reference: architecture decisions, code standards, structured code reviews",
          "Bridge between business and engineering — briefings, scope definition, backlog management",
          "Raised platform health score from 83% to 95% in 8 months",
          "Direct team management: 1:1s, structured feedback, technical mentoring",
        ],
      },
      {
        role: "Senior Full-Stack Developer",
        company: "Jovens Gênios",
        period: "Nov 2022 – Present",
        bullets: [
          "Built ~80% of Exploradores — Flutter multi-platform app with 100K+ active users",
          "Architected gamification system: missions, planets, XP, rewards, adaptive progression on a Neo4j graph",
          "Built and maintained GraphQL APIs (Node.js) serving mobile, web, and admin panel clients",
          "Adopted Spec-Driven Development + TDD as the team's engineering standard",
        ],
      },
      {
        role: "Frontend Developer",
        company: "TDSA Sistemas",
        period: "Apr 2021 – Dec 2022",
        bullets: [
          "Built reusable components in React.js + TypeScript following design system standards",
          "Wrote unit and integration tests with Jest and Playwright, increasing coverage and reducing regressions",
          "Contributed to API contract decisions and data modeling with .NET backend",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Signo Web",
        period: "Aug 2020 – Feb 2021",
        bullets: [
          "Developed web and mobile apps for clients across different verticals",
        ],
      },
      {
        role: "Web Developer (Intern)",
        company: "FSB Comunicação",
        period: "Sep 2019 – Jun 2020",
        bullets: [
          "Development and maintenance of internal systems for a large-scale communications agency",
        ],
      },
      {
        role: "Programmer (Intern)",
        company: "Banco do Brasil",
        period: "Jun 2018 – Aug 2019",
        bullets: [
          "Automated internal operational processes using VBA and Selenium",
        ],
      },
    ],
  },
  stack: {
    title: "Tech stack",
    categories: [
      { label: "Mobile", items: ["Flutter", "Dart", "React Native"] },
      { label: "Frontend", items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "GraphQL", "Laravel", "PHP", ".NET"] },
      { label: "Databases", items: ["PostgreSQL", "Neo4j", "MongoDB", "SQL Server"] },
      { label: "Testing", items: ["Jest", "Playwright", "Vitest", "TDD", "Spec-Driven"] },
      { label: "DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "AWS", "GCP"] },
      { label: "AI & Agents", items: ["Claude Code", "OpenAI API", "Anthropic API", "RAG", "Prompt Eng."] },
    ],
  },
  ai: {
    title: "How I work with AI",
    sub: "Most developers use AI. I've built structured workflows around it.",
    items: [
      {
        phase: "Before coding",
        title: "I grill my specs",
        desc: "I describe requirements and let AI challenge my assumptions, expose edge cases, and suggest architectural alternatives. This prevents downstream rework — the most expensive kind.",
      },
      {
        phase: "During development",
        title: "Accelerated delivery",
        desc: "Boilerplate, tests, code reviews — all accelerated. I've also built features using AI agents (Claude Code, Cursor) with prompts that encode project conventions and quality standards.",
      },
      {
        phase: "Architecture level",
        title: "Evals before merge",
        desc: "I built evaluation pipelines to validate AI-generated code before it merges. The agent accelerates; I ensure quality. I've also integrated OpenAI and Anthropic Claude directly in product features.",
      },
    ],
  },
  contact: {
    title: "Ready to ship something real.",
    sub: "I'm looking for roles where I can own features end-to-end — from problem definition to production metrics. If that sounds like what you need, let's talk.",
    email: "paulovitor2123@gmail.com",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    cta: "Send me an email",
  },
  footer: {
    built: "Built by Paulo Vitor",
    stack: "Next.js · Tailwind · Framer Motion",
  },
};

export type Translations = typeof en;
