import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import { RootProviders } from "@/providers/root-providers";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Paulo Vitor — Senior Full-Stack Developer & Tech Lead",
  description:
    "Senior Full-Stack Developer & Tech Lead with 6+ years shipping at scale. 100K+ active users. Based in Rio de Janeiro, available for remote work.",
  openGraph: {
    title: "Paulo Vitor — Senior Full-Stack Developer & Tech Lead",
    description:
      "Senior Full-Stack Developer & Tech Lead with 6+ years shipping at scale. 100K+ active users. Based in Rio de Janeiro, available for remote work.",
    type: "website",
  },
  keywords: [
    "Paulo Vitor",
    "Full-Stack Developer",
    "Tech Lead",
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "TypeScript",
    "Rio de Janeiro",
    "Remote",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',t==='dark'||(t===null&&d));})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
