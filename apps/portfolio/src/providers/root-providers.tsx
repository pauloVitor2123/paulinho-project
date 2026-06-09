"use client";

import { useEffect, type ReactNode } from "react";
import { LangProvider } from "@/i18n/context";

function ThemeInitializer() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  return null;
}

export function RootProviders({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <ThemeInitializer />
      {children}
    </LangProvider>
  );
}
