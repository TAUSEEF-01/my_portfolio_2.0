"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

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
    "FastAPI",
    "RestAPI",
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
            Engineering at University of Dhaka (3rd year). I have
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

        {/* Technologies Section - 3D Orb Style */}
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
            Hover to interact • Explore my tech stack
          </p>

          {/* Compact 3D Orb-Style Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            
            <div className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-x-4 gap-y-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative w-full p-4 rounded-xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 border border-border/50 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 backdrop-blur-sm group-hover:scale-110 group-hover:z-10">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tech Icon and Name */}
                    <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                      <div className="text-3xl md:text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                        {tech === "Java" && "☕"}
                        {tech === "Spring Boot" && "🌱"}
                        {tech === "Spring MVC" && "🛠️"}
                        {tech === "Python" && "🐍"}
                        {tech === "FastAPI" && "⚡"}
                        {tech === "RestAPI" && "🔌"}
                        {tech === "C++" && "�"}
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
                      </div>
                      
                      {/* Tech name - always visible */}
                      <div className="text-[10px] md:text-xs font-bold text-center group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                        {tech}
                      </div>
                    </div>

                    {/* Orbiting particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full animate-orbit-1" />
                      <div className="absolute top-1/2 right-0 w-1 h-1 bg-blue-500 rounded-full animate-orbit-2" />
                      <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-orbit-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes orbit-1 {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          0% {
            transform: rotate(120deg) translateX(20px) rotate(-120deg);
          }
          100% {
            transform: rotate(480deg) translateX(20px) rotate(-480deg);
          }
        }

        @keyframes orbit-3 {
          0% {
            transform: rotate(240deg) translateX(20px) rotate(-240deg);
          }
          100% {
            transform: rotate(600deg) translateX(20px) rotate(-600deg);
          }
        }

        .animate-orbit-1 {
          animation: orbit-1 3s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit-2 3s linear infinite;
        }

        .animate-orbit-3 {
          animation: orbit-3 3s linear infinite;
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
