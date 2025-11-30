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

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <GhostCursor
          color="#a78bfa"
          brightness={1.5}
          bloomStrength={0.2}
          trailLength={40}
          inertia={0.6}
          mixBlendMode="screen"
          zIndex={0}
        />
      </div>
      <main className="min-h-screen relative" style={{ zIndex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <LeetCodeStats />
        <Certificates />
        <Portfolio />
        <SnakeGame />
        <Contact />
      </main>
    </>
  );
}
