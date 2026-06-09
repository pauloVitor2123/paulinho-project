"use client";

import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

const stepIcons = [
  // Inspect / glasses
  <svg key="spec" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M6 9a6 6 0 0 0 12 0M3 6H1M23 6h-2M9 6h6" />
  </svg>,
  // Zap / lightning
  <svg key="dev" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // Shield check
  <svg key="eval" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>,
];

export function AiWorkflow() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-background" aria-labelledby="ai-title">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              AI-Native
            </p>
            <h2
              id="ai-title"
              className="font-sans text-3xl md:text-4xl font-bold mb-4"
            >
              {t.ai.title}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">{t.ai.sub}</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.ai.items.map((item, i) => (
            <FadeUp key={item.phase} delay={i * 0.12}>
              <article className="group relative p-8 rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/50 transition-all duration-300">
                {/* Gradient accent on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-6 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors duration-300">
                    {stepIcons[i]}
                  </div>
                  <span className="text-xs font-mono text-muted font-semibold uppercase tracking-widest">
                    {item.phase}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold mb-3 relative">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed relative text-sm">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
