import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { LeetCodeStats } from "@/components/leetcode-stats";
import { Certificates } from "@/components/certificates";
import { Portfolio } from "@/components/portfolio";
import { SnakeGame } from "@/components/snake-game";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
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
  );
}
