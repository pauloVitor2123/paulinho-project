"use client";

import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

const icons = [
  // Ownership — flag / target
  <svg key="ownership" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>,
  // Bridge — arrows both ways
  <svg key="bridge" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 3l4 4-4 4" />
    <path d="M3 7h18" />
    <path d="M7 21l-4-4 4-4" />
    <path d="M21 17H3" />
  </svg>,
  // AI — cpu / chip
  <svg key="ai" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M9 7V3M12 7V3M15 7V3M9 21v-4M12 21v-4M15 21v-4M3 9h4M3 12h4M3 15h4M21 9h-4M21 12h-4M21 15h-4" />
  </svg>,
  // Builder — hammer / wrench
  <svg key="builder" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
];

export function Pillars() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-background" aria-labelledby="pillars-title">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2
            id="pillars-title"
            className="font-sans text-3xl md:text-4xl font-bold text-center mb-16"
          >
            {t.pillars.title}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.pillars.items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <article className="group relative p-8 rounded-2xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-2 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-300" aria-hidden="true" />

                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                    {icons[i]}
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
