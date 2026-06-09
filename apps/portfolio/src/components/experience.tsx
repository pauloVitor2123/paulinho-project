"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./fade-up";
import { useLang } from "@/i18n/context";

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

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

        {/* Resume download */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="/curriculo_paulo_techlead.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-muted hover:text-foreground hover:border-accent/50 transition-colors duration-200 cursor-pointer"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
            aria-label="Download resume PDF"
          >
            <DownloadIcon />
            {t.experience.downloadResume}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
