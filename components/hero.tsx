"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../images/profile_img.jpg";
import React, { useEffect, useState } from "react";
import Orb from "./Orb";

export function Hero() {
  // Simplified typewriter - only runs once, no loop
  const name = "Md. Tauseef - Ur - Rahman";
  const [displayed, setDisplayed] = useState("");
  const [showOrb, setShowOrb] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (animationComplete) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayed(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setAnimationComplete(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [name, animationComplete]);

  // Delay Orb rendering to improve initial load
  useEffect(() => {
    const timer = setTimeout(() => setShowOrb(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Optimized Background - Reduced particles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={1.2}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={0.2}
        />
      </div>

      {/* Simplified Gradient Orbs - Static, no animation */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>

              <div>
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  style={{ minHeight: "8rem" }}
                >
                  <span className="block text-foreground/90 mb-2">Hi, I'm</span>
                  <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-cyan-500">
                    {displayed}
                    {!animationComplete && <span className="animate-pulse">|</span>}
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-medium text-foreground/80">
                  Computer Science Student & Developer
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Passionate about <span className="text-primary font-semibold">competitive programming</span>, 
                  building <span className="text-primary font-semibold">full-stack applications</span>, 
                  and solving complex problems with elegant solutions.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors">
                    🏆 Codeforces Pupil
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors">
                    ⭐ Codechef 3-Star
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors">
                    🤖 Python AI Trainer
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors">
                    🎓 University of Dhaka
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all">
                <Link href="#portfolio">
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base px-8 py-6 border-2 hover:bg-primary/5">
                <Link href="https://drive.google.com/file/d/1Y2lnExWPWTl--QUrokcDMKWDaA6wNhJY/view?usp=sharing" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Optimized Orb - Perfectly aligned */}
              {showOrb && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Orb
                    hoverIntensity={0.4}
                    rotateOnHover={false}
                    hue={0}
                    forceHoverState={false}
                  />
                </div>
              )}
              
              {/* Profile Image with enhanced styling */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  {/* Simplified border - no animation */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-60"></div>
                  
                  {/* Image container - matches Orb size */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <Image
                      src={profileImage}
                      alt="Md. Tauseef Ur Rahman - Computer Science Student & Developer"
                      width={320}
                      height={320}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-full bg-gradient-to-br from-primary/15 to-blue-500/15 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background pointer-events-none" />
      

    </section>
  );
}
