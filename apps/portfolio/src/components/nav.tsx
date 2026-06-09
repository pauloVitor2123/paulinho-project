"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/context";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Nav() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass bg-background/80 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-sans text-xl font-bold text-accent tracking-tight"
          aria-label="Paulo Vitor — Home"
        >
          PV<span className="text-foreground">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {(
            [
              ["#work", t.nav.work],
              ["#experience", t.nav.experience],
              ["#stack", t.nav.stack],
              ["#contact", t.nav.contact],
            ] as const
          ).map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold tracking-widest text-muted hover:text-foreground transition-colors cursor-pointer px-2 py-1 rounded-md hover:bg-surface"
            aria-label={`Switch to ${lang === "en" ? "Portuguese" : "English"}`}
          >
            {lang === "en" ? "PT" : "EN"}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
