"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { en } from "./en";
import { pt } from "./pt";
import type { Translations } from "./en";

type Lang = "en" | "pt";

interface LangContext {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const Context = createContext<LangContext>({
  lang: "en",
  t: en,
  toggleLang: () => undefined,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "pt" || stored === "en") setLang(stored);
  }, []);

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  return (
    <Context.Provider value={{ lang, t: lang === "en" ? en : pt, toggleLang }}>
      {children}
    </Context.Provider>
  );
}

export const useLang = () => useContext(Context);
