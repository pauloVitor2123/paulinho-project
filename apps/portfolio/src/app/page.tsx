import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Numbers } from "@/components/numbers";
import { Pillars } from "@/components/pillars";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { AiWorkflow } from "@/components/ai-workflow";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Numbers />
        <Pillars />
        <Projects />
        <Experience />
        <Stack />
        <AiWorkflow />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>Paulo Vitor · {new Date().getFullYear()}</span>
          <span className="font-mono">Next.js · Tailwind · Framer Motion</span>
        </div>
      </footer>
    </>
  );
}
