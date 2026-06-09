"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";

function ArrowDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function MapPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-grid"
      aria-label="Introduction"
    >
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="animate-blob2 absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Profile picture */}
        <motion.div {...fadeUp(0.05)} className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-2 ring-offset-background">
            <img
              src="/profile_picture.jpeg"
              alt="Paulo Vitor"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8 inline-flex">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-success/30 bg-success/8 text-success text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            {t.hero.available}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          {t.hero.headlinePre}
          <br />
          <span className="gradient-text">{t.hero.headlineAccent}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-colors duration-200 cursor-pointer"
          >
            {t.hero.ctaPrimary}
            <ArrowDown />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-surface hover:border-accent/40 transition-all duration-200 cursor-pointer"
          >
            {t.hero.ctaSecondary}
            <ArrowRight />
          </a>
        </motion.div>

        {/* Location + social */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted"
        >
          <span className="flex items-center gap-1.5">
            <MapPin />
            {t.hero.location}
          </span>
          <span className="hidden sm:block">·</span>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/paulovitor2123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pauloVitor2123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
