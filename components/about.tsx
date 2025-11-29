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

        {/* Technologies Section - 3D Interactive */}
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Drag to rotate • Click to explore • Hover for details
          </p>

          {/* 3D Tech Stack Display */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center min-h-[120px]">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
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
                      </div>
                      <h4 className="font-bold text-base text-center group-hover:text-primary transition-colors duration-300">
                        {tech}
                      </h4>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" style={{ animationDelay: "0.5s" }} />
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
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
