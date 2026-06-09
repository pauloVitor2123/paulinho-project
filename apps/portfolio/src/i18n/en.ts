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
    sub: "Senior Full-Stack Developer & Tech Lead with 7+ years shipping at scale. 100K+ active users. Full ownership — from spec to production.",
    ctaPrimary: "See my work",
    ctaSecondary: "Let's talk",
    location: "Rio de Janeiro, Brazil · Remote",
  },
  numbers: {
    title: "Impact by the numbers",
    items: [
      { value: "7+", label: "years of production\ncode" },
      { value: "100K+", label: "active users on\nplatforms I built" },
      { value: "~80%", label: "of a 100K-user platform\ndesigned & built by me" },
      { value: "83→95%", label: "platform health\nin 8 months as Tech Lead" },
      { value: "3", label: "cross-platform\nproducts shipped" },
    ],
  },
  pillars: {
    title: "What I bring",
    items: [
      {
        title: "Full Ownership",
        desc: "From code to deploy, from monitoring to results. I don't hand off responsibility — I see things through.",
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
        company: "EdTech · Full Ownership",
        type: "Edtech · Cross-platform",
        description:
          "Designed and built ~80% of a gamified K-12 learning platform from scratch — Android, iOS, and Web. Graph-based progression engine, five distinct quiz types, full gamification system.",
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
    downloadResume: "Download résumé",
    items: [
      {
        role: "Tech Lead → Senior Full-Stack Developer",
        company: "Jovens Gênios",
        period: "Nov 2022 – Present",
        bullets: [
          "Promoted to Tech Lead (Nov 2024): architecture decisions, code standards, structured code reviews",
          "Bridge between business and engineering — scope definition, briefings, backlog management",
          "Raised platform health score from 83% to 95% in 8 months",
          "Team management: 1:1s, structured feedback, technical mentoring",
          "Built ~80% of the platform — Flutter cross-platform app with 100K+ active users",
          "Architected gamification system: missions, planets, XP, rewards, adaptive progression on a Neo4j graph",
          "Built and maintained GraphQL APIs (Node.js) serving mobile, web, and admin clients",
          "Established Spec-Driven Development + TDD as the team's engineering standard",
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
          "Built web and mobile applications for clients across retail, services, and logistics verticals.",
        ],
      },
      {
        role: "Web Developer (Intern)",
        company: "FSB Comunicação",
        period: "Sep 2019 – Jun 2020",
        bullets: [
          "Development and maintenance of internal tools for one of Brazil's largest communications agencies.",
        ],
      },
      {
        role: "Programmer (Intern)",
        company: "Banco do Brasil",
        period: "Jun 2018 – Aug 2019",
        bullets: [
          "Automated internal operational workflows using VBA and Selenium during internship at Brazil's largest state-owned bank.",
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
    sub: "I take full ownership — from problem definition to production metrics. If that's what your team needs, let's talk.",
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
