"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../images/profile_img.jpg";
import React, { useEffect, useState } from "react";

export function Hero() {
  // Typewriter effect for name
  const name = "Md. Tauseef - Ur - Rahman";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < name.length) {
        timeout = setTimeout(() => {
          setDisplayed(name.slice(0, displayed.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(name.slice(0, displayed.length - 1));
        }, 40);
      } else {
        timeout = setTimeout(() => setTyping(true), 600);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, name]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={0.5}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  {displayed}
                  <span className="animate-pulse">|</span>
                </span>
                </h1>
              {/* <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Computer Science Student & Full-Stack Developer
              </h2> */}
              <p className="text-lg text-muted-foreground max-w-lg">
                🎓 Computer Science Student | 👨‍💻 Competitive programmer | 💻 Full-stack Developer | 🧠
                Passionate about solving complex problems & 🚀 building
                impactful projects!
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Codeforces Pupil</Badge>
                <Badge variant="secondary">Codechef 3⭐</Badge>
                <Badge variant="secondary">Python AI Trainer</Badge>
                <Badge variant="secondary">University of Dhaka</Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#portfolio">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 backdrop-blur-sm bg-background/10">
                <Image
                  src={profileImage}
                  alt="Md. Tauseef Ur Rahman - Computer Science Student & Developer"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-full bg-primary/10 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />
    </section>
  );
}
