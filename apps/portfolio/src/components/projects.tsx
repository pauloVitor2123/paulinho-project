"use client";

import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

function ExternalLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function Projects() {
  const { t } = useLang();

  return (
    <section id="work" className="py-24 bg-surface" aria-labelledby="projects-title">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2
            id="projects-title"
            className="font-sans text-3xl md:text-4xl font-bold text-center mb-16"
          >
            {t.projects.title}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.projects.items.map((project, i) => (
            <FadeUp key={project.name} delay={i * 0.15}>
              <article className="group flex flex-col h-full rounded-2xl border border-border bg-background overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                {/* Project header gradient */}
                <div
                  className={`relative h-40 flex items-end p-6 overflow-hidden ${
                    i === 0
                      ? "bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800"
                      : "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-800"
                  }`}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "radial-gradient(circle at 80% 20%, rgba(99,102,241,0.3) 0%, transparent 60%)",
                  }} />
                  <div className="relative">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300/70">
                      {project.type}
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-white mt-1">
                      {project.name}
                    </h3>
                  </div>

                  {project.status === "live" && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/20 border border-success/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-success" />
                      <span className="text-xs text-success font-medium">Live</span>
                    </div>
                  )}
                  {project.status === "wip" && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="text-xs text-amber-400 font-medium">In dev</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    {project.company}
                  </p>
                  <p className="text-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="bg-surface rounded-lg px-4 py-3 mb-5 border-l-2 border-success">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-surface-2 border border-border text-xs font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
