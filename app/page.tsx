"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { LeetCodeStats } from "@/components/leetcode-stats";
import { Certificates } from "@/components/certificates";
import { Portfolio } from "@/components/portfolio";
import { SnakeGame } from "@/components/snake-game";
import { Contact } from "@/components/contact";
import GhostCursor from "@/components/GhostCursor";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  return (
    <>
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {mounted && (
          <GhostCursor
            color={isDark ? "#a78bfa" : "#e0d5ff"}
            brightness={isDark ? 0.8 : 0.4}
            bloomStrength={isDark ? 0.1 : 0.05}
            trailLength={30}
            inertia={0.6}
            mixBlendMode={isDark ? "screen" : "multiply"}
            zIndex={1}
          />
        )}
      </div>
      <main className="min-h-screen relative">
        <Hero />
        <div className="relative z-[10]">
          <About />
          <Education />
          <Achievements />
          <LeetCodeStats />
          <Certificates />
          <Portfolio />
          <SnakeGame />
          <Contact />
        </div>
      </main>
    </>
  );
}
