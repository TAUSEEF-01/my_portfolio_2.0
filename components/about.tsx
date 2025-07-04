"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Palette, Zap, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function About() {
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

  const techTrackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently pursuing Bachelor of Science in Computer Science and
            Engineering at University of Dhaka (3rd year, CGPA: 3.62). I have
            professional experience as a Python AI Trainer and a strong
            background in competitive programming with multiple contest
            achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Highlights Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              What I Do
            </h3>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills/Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Experience & Skills
            </h3>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border shadow-sm">
                <h4 className="font-semibold mb-2">Python AI Trainer</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Professional Experience
                </p>
                <p className="text-muted-foreground">
                  Training and fine-tuning AI models with expertise in Python
                  development
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border shadow-sm">
                <h4 className="font-semibold mb-2">Competitive Programming</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Codeforces Pupil | Codechef 3-Star
                </p>
                <p className="text-muted-foreground">
                  Strong algorithmic problem-solving skills with contest
                  achievements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section - Full Width */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Technologies I Work With
          </h3>

          {/* Auto-scrolling track - Full Width */}
          <div className="relative overflow-hidden group rounded-2xl bg-gradient-to-r from-muted/30 via-background to-muted/30 border shadow-lg">
            <div
              ref={techTrackRef}
              className="flex gap-8 py-6 animate-scroll group-hover:[animation-play-state:paused]"
              style={{
                animationDuration: "20s", // Increased speed
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                width: "200%", // Ensure full width coverage
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="min-w-[160px] max-w-[200px] flex-shrink-0 flex flex-col items-center justify-center px-6 py-8 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-background border border-border shadow-md relative group/tech transition-all duration-300 hover:scale-110 hover:shadow-[0_0_32px_0_rgba(59,130,246,0.3)] hover:z-10"
                >
                  <span className="text-3xl mb-3 group-hover/tech:animate-bounce">
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
                  <span className="font-semibold text-base text-foreground group-hover/tech:text-primary transition-colors text-center">
                    {tech}
                  </span>
                  <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover/tech:opacity-80 blur-[2px] transition-opacity duration-300" />
                  <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/tech:opacity-100 animate-glowline" />
                </div>
              ))}
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-sm opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation-name: scroll;
        }

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

        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
