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
import LaserFlow from "./LaserFlow";

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
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-r from-slate-50 via-purple-50/30 to-blue-50/30 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-background"
    >
      {/* Optimized Background - Reduced particles */}
      <div className="absolute inset-0 w-full h-full opacity-20 z-0">
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
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-40 z-0" />

      <div className="container mx-auto px-4 relative z-[5]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-foreground">Available for opportunities</span>
              </div>

              <div>
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ minHeight: "7rem" }}
                >
                  <span className="block text-foreground mb-2 text-2xl md:text-3xl lg:text-4xl">Hi, I'm</span>
                  <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-primary dark:via-blue-500 dark:to-cyan-500">
                    {displayed}
                    {!animationComplete && <span className="animate-pulse">|</span>}
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-lg md:text-xl font-medium text-foreground">
                  Computer Science Student & Developer
                </p>
                <p className="text-sm md:text-base text-slate-700 dark:text-muted-foreground max-w-xl leading-relaxed">
                  Passionate about <span className="text-blue-600 dark:text-primary font-semibold">competitive programming</span>, 
                  building <span className="text-blue-600 dark:text-primary font-semibold">full-stack applications</span>, 
                  and solving complex problems with elegant solutions.
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs font-medium hover:bg-primary/20 transition-colors shadow-sm bg-white/80 dark:bg-secondary">
                    🏆 Codeforces Pupil
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs font-medium hover:bg-primary/20 transition-colors shadow-sm bg-white/80 dark:bg-secondary">
                    ⭐ Codechef 3-Star
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs font-medium hover:bg-primary/20 transition-colors shadow-sm bg-white/80 dark:bg-secondary">
                    🤖 Python AI Trainer
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-xs font-medium hover:bg-primary/20 transition-colors shadow-sm bg-white/80 dark:bg-secondary">
                    🎓 University of Dhaka
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="group text-sm px-6 py-5 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all">
                <Link href="#portfolio">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-sm px-6 py-5 border-2 hover:bg-primary/5">
                <Link href="https://drive.google.com/file/d/1Y2lnExWPWTl--QUrokcDMKWDaA6wNhJY/view?usp=sharing" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Laser Flow positioned directly on profile - touching the orb */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <div className="relative w-full h-[700px] -translate-y-[190px]">
                  <LaserFlow
                    color="#a78bfa"
                    horizontalBeamOffset={0.0}
                    verticalBeamOffset={0.0}
                    fogIntensity={1.5}
                    wispDensity={2.5}
                    flowSpeed={0.5}
                    verticalSizing={3.5}
                    horizontalSizing={0.9}
                    wispSpeed={25}
                    wispIntensity={12}
                    decay={1.6}
                    falloffStart={2.5}
                    fogScale={0.2}
                  />
                </div>
              </div>

              {/* Optimized Orb - Perfectly aligned */}
              {showOrb && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <Orb
                    hoverIntensity={0.4}
                    rotateOnHover={false}
                    hue={0}
                    forceHoverState={false}
                  />
                </div>
              )}
              
              {/* Profile Image with enhanced styling */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
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

      {/* Enhanced gradient overlay - minimal to show laser */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background dark:from-background/60 dark:via-background/20 dark:to-background pointer-events-none z-[3]" />
      

    </section>
  );
}
