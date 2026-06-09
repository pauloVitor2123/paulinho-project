"use client";

import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 bg-background" aria-labelledby="experience-title">
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp>
          <h2
            id="experience-title"
            className="font-sans text-3xl md:text-4xl font-bold text-center mb-16"
          >
            {t.experience.title}
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {t.experience.items.map((item, i) => (
              <FadeUp key={`${item.company}-${item.role}`} delay={i * 0.07}>
                <article className="relative pl-8 timeline-dot">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-accent font-semibold text-sm">{item.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-2" role="list">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted leading-relaxed">
                        <span className="text-accent mt-1 shrink-0" aria-hidden="true">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
