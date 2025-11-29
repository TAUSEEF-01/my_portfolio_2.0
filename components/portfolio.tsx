"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform (Online Shop Management System)",
      description:
        "A full-stack e-commerce platform built as a university project, featuring secure authentication, advanced product browsing, admin dashboard with analytics, and robust SQL database concepts.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80", // e-commerce
      category: "Web Development",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/TAUSEEF-01/Online-Shop-Management-System",
    },
    {
      id: 2,
      title: "LivingConnect - Home Rental Mobile App",
      description:
        "A mobile app to revolutionize the home rental experience: interactive map search, direct messaging, secure payments, and essential home services. Built by Team DU_CodeX_Legends.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // home rental
      category: "Mobile Development",
      technologies: [
        "React Native (Expo)",
        "Node.js",
        "MongoDB",
        "react-native-maps",
        "Axios",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/TAUSEEF-01/LivingConnect",
    },
    {
      id: 3,
      title: "Angry Birds Game (SDL, C++)",
      description:
        "“Angry Birds” is an SDL-based game written in C++. The game consists of three levels, utilizing C++ and the Simple DirectMedia Layer Library (SDL) to replicate the mechanics of the classic Angry Birds game.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80", // angry birds
      category: "Game Development",
      technologies: [
        "C++",
        "SDL",
        "Physics Engine",
        "Game Development",
        "Image Processing",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/TAUSEEF-01/CSEDU_Game_Project_Angry_Birds",
    },
    {
      id: 4,
      title: "Teacher-Student Portal",
      description:
        "A web-based platform for teachers and students: assignment submissions, grade tracking, forums, course management, to-do lists, and schedules.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", // education portal
      category: "Web Development",
      technologies: [
        "Web Development",
        "Database Management",
        "User Authentication",
        "Forum System",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/TAUSEEF-01/OOP_Project_2024",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "My first mobile app! Get real-time weather updates with a simple and user-friendly interface. Download and install the .apk to try it out.",
      image:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80", // weather app
      category: "Mobile Development",
      technologies: [
        "Mobile Development",
        "API Integration",
        "Real-time Data",
        "Weather API",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/TAUSEEF-01/Weather-App",
    },
  ];

  const categories = ["All", "Web Development", "Design"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background decorative elements - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/4 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              💼 Featured Work
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and creative work
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden h-56">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Hover overlay with actions */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-center justify-center gap-3 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <Button size="lg" variant="secondary" asChild className="shadow-lg">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 border-t border-border/50">
                <Button variant="ghost" asChild className="w-full group/btn">
                  <Link href={project.githubUrl} target="_blank" className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </span>
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
