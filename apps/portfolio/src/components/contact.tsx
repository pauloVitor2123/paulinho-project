"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-32 bg-surface" aria-labelledby="contact-title">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
            Get in touch
          </p>

          <h2
            id="contact-title"
            className="font-sans text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t.contact.title}
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            {t.contact.sub}
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${t.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-colors duration-200 mb-10 text-base cursor-pointer shadow-lg shadow-accent/20"
          >
            <MailIcon />
            {t.contact.cta}
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/paulovitor2123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
              {t.contact.linkedInLabel}
            </a>
            <span className="text-border" aria-hidden="true">·</span>
            <a
              href="https://github.com/pauloVitor2123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
              {t.contact.githubLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
