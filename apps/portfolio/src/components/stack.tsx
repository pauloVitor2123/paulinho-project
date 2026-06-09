"use client";

import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

const categoryColors: Record<string, string> = {
  Mobile: "text-sky-400 border-sky-400/30 bg-sky-400/8",
  Frontend: "text-violet-400 border-violet-400/30 bg-violet-400/8",
  Backend: "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  Databases: "text-amber-400 border-amber-400/30 bg-amber-400/8",
  Testing: "text-pink-400 border-pink-400/30 bg-pink-400/8",
  DevOps: "text-orange-400 border-orange-400/30 bg-orange-400/8",
  "AI & Agents": "text-indigo-400 border-indigo-400/30 bg-indigo-400/8",
  // PT labels
  "Bancos de Dados": "text-amber-400 border-amber-400/30 bg-amber-400/8",
  Testes: "text-pink-400 border-pink-400/30 bg-pink-400/8",
  "IA & Agentes": "text-indigo-400 border-indigo-400/30 bg-indigo-400/8",
};

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="py-24 bg-surface" aria-labelledby="stack-title">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2
            id="stack-title"
            className="font-sans text-3xl md:text-4xl font-bold text-center mb-16"
          >
            {t.stack.title}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.stack.categories.map((cat, i) => {
            const color = categoryColors[cat.label] ?? "text-muted border-border bg-surface-2";
            return (
              <FadeUp key={cat.label} delay={i * 0.07}>
                <div className="p-5 rounded-xl border border-border bg-background">
                  <h3 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${color.split(" ")[0]}`}>
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className={`px-2.5 py-1 rounded-md border text-xs font-mono ${color}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
