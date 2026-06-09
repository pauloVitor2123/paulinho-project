"use client";

import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

export function Numbers() {
  const { t } = useLang();

  return (
    <section className="py-20 bg-surface border-y border-border" aria-label="Key metrics">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-12">
            {t.numbers.title}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {t.numbers.items.map((item, i) => (
            <FadeUp key={item.value} delay={i * 0.08}>
              <div className="text-center group">
                <div className="font-sans text-4xl md:text-5xl font-bold text-success group-hover:scale-105 transition-transform duration-300 mb-3">
                  {item.value}
                </div>
                <p className="text-xs text-muted leading-relaxed whitespace-pre-line font-body">
                  {item.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
