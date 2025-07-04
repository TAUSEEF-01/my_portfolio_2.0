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
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div> */}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2 w-full">
                  {/* <Button asChild className="flex-1">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button> */}
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
