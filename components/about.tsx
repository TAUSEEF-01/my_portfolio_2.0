"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Palette, Zap, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function About() {
  const skills = [
    { name: "Java (Spring Boot)", level: 92 },
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 82 },
    { name: "C++", level: 95 },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Competitive Programming",
      description: "Codeforces Pupil & Codechef 3-Star rated programmer",
    },
    {
      icon: Palette,
      title: "Full-Stack Development",
      description:
        "Modern web applications with React, Next.js, and backend technologies",
    },
    {
      icon: Zap,
      title: "AI/ML Training",
      description:
        "Professional experience in Python AI training and model development",
    },
    {
      icon: Users,
      title: "Problem Solving",
      description: "Passionate about tackling complex algorithmic challenges",
    },
  ];

  const technologies = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "Next.js",
    "MySQL",
    "Oracle",
    "MongoDB",
    "Supabase",
    "PostgreSQL",
    "Git",
    "Github",
    "Postman",
    "Expo Router",
    "Tailwind CSS",
  ];

  // For horizontal scroll, use a ref if you want to add scroll buttons later
  const techTrackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science student at University of Dhaka, passionate about
            competitive programming and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              {/* <p>
                👨‍💻 Competitive programmer | 💻 Full-stack Developer | 🧠
                Passionate about solving complex problems & 🚀 building
                impactful projects!
              </p> */}
              <p className="text-muted-foreground mt-4">
                Currently pursuing Bachelor of Science in Computer Science and
                Engineering at University of Dhaka (3rd year, CGPA: 3.62). I
                have professional experience as a Python AI Trainer and a strong
                background in competitive programming with multiple contest
                achievements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-4 group relative overflow-hidden transition-all duration-300 border-0 bg-background/80 shadow-none hover:shadow-2xl hover:shadow-primary/30"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-2">
                      <highlight.icon className="h-8 w-8 text-primary group-hover:drop-shadow-glow" />
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                </Card>
              ))}
            </div>

            <Button asChild size="lg">
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="space-y-10">
            <h3 className="text-xl font-semibold mb-4">
              Technologies I Work With
            </h3>
            {/* Horizontal scrolling track */}
            <div className="relative">
              <div
                ref={techTrackRef}
                className="flex gap-6 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollSnapType: "x mandatory",
                }}
              >
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="min-w-[140px] max-w-[180px] flex-shrink-0 flex flex-col items-center justify-center px-4 py-6 rounded-2xl bg-gradient-to-br from-background via-muted to-background border border-border shadow-md relative group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_0_rgba(59,130,246,0.4)] hover:z-10"
                    style={{
                      scrollSnapAlign: "center",
                    }}
                  >
                    <span className="text-2xl mb-2 group-hover:animate-pulse">
                      {/* Optionally, add an emoji/icon for each tech */}
                      {tech === "Java" && "☕"}
                      {tech === "Spring Boot" && "🌱"}
                      {tech === "Spring MVC" && "🛠️"}
                      {tech === "Python" && "🐍"}
                      {tech === "C++" && "💡"}
                      {tech === "JavaScript" && "✨"}
                      {tech === "TypeScript" && "🔷"}
                      {tech === "Node.js" && "🟢"}
                      {tech === "React.js" && "⚛️"}
                      {tech === "Next.js" && "⏭️"}
                      {tech === "MySQL" && "🐬"}
                      {tech === "Oracle" && "🏛️"}
                      {tech === "MongoDB" && "🍃"}
                      {tech === "Supabase" && "🦾"}
                      {tech === "PostgreSQL" && "🐘"}
                      {tech === "Git" && "🔀"}
                      {tech === "Github" && "🐙"}
                      {tech === "Postman" && "📮"}
                      {tech === "Expo Router" && "📱"}
                      {tech === "Tailwind CSS" && "🌈"}
                    </span>
                    <span className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                      {tech}
                    </span>
                    {/* Glowing border effect */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-80 blur-[2px] transition-opacity duration-300" />
                    {/* Animated glowing line */}
                    <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-glowline" />
                  </div>
                ))}
              </div>
              {/* Optional: Add a subtle animated line below the track */}
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      {/* Custom glowing line animation */}
      <style jsx global>{`
        @keyframes glowline {
          0% {
            transform: translateX(100%);
            opacity: 0.2;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0.2;
          }
        }
        .animate-glowline {
          animation: glowline 1.8s linear infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #3b82f6) drop-shadow(0 0 16px #3b82f6);
        }
      `}</style>
    </section>
  );
}
