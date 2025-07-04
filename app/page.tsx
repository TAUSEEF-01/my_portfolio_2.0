import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Achievements } from "@/components/achievements";
import { Portfolio } from "@/components/portfolio";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Achievements />
      <Portfolio />
      <Contact />
    </main>
  );
}
