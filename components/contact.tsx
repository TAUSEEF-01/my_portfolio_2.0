"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Static background for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full blur-3xl opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              📬 Let's Connect
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss competitive programming? Let's connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-1">Email</p>
                      <Link
                        href="mailto:mdtauseef.rahmang01@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                      >
                        mdtauseef.rahmang01@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-1">Phone</p>
                      <Link
                        href="tel:+8801852039838"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        +880 1852-039838
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-xl group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg mb-1">Location</p>
                      <p className="text-muted-foreground text-sm">
                        41 no Circular Road, Dhanmondi, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connect With Me */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                
                <div className="space-y-6">
                  {/* GitHub */}
                  <Link
                    href="https://github.com/TAUSEEF-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gray-900 dark:bg-gray-100 rounded-full">
                      <Github className="h-6 w-6 text-white dark:text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        GitHub
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Check out my repositories and contributions
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/md-tauseef-ur-rahman-9240bb259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-600 rounded-full">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        LinkedIn
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Connect with me professionally
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  {/* Codeforces */}
                  <Link
                    href="https://codeforces.com/profile/Thebest_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-500 rounded-full">
                      <div className="h-6 w-6 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">CF</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        Codeforces
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        View my competitive programming profile (Pupil)
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>

                  {/* Codechef */}
                  <Link
                    href="https://www.codechef.com/users/tauseef_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-amber-600 rounded-full">
                      <div className="h-6 w-6 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">CC</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        CodeChef
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Check my competitive programming journey (3⭐)
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    🏆 Available for:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Full-stack development projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Competitive programming mentoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>AI/ML training collaborations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Open source contributions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
