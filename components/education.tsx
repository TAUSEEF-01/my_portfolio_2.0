import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "University of Dhaka",
      degree: "Bachelor of Science in Computer Science and Engineering",
    //   duration: "2022 - 2026",
      status: "3rd year 2nd semester",
      cgpa: "To be determined",
      location: "Dhaka, Bangladesh",
      icon: GraduationCap,
      highlights: ["Current CGPA: To be determined", "Expected graduation: 2026"],
    },
    {
      institution: "Dhaka College",
      degree: "Higher Secondary Certificate (HSC)",
    //   duration: "2020 - 2022",
      status: "Completed",
      cgpa: "5.00",
      location: "Dhaka, Bangladesh",
      icon: Trophy,
      highlights: ["GPA: 5.00/5.00", "General Scholarship recipient"],
    },
    {
      institution: "Government Laboratory High School",
      degree: "Secondary School Certificate (SSC)",
    //   duration: "2018 - 2009",
      status: "Completed",
      cgpa: "5.00",
      location: "Dhaka, Bangladesh",
      icon: Trophy,
      highlights: ["GPA: 5.00/5.00", "General Scholarship recipient"],
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background effects - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/4 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              🎓 Academic Journey
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey with consistent excellence and scholarship achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-4">
                      <edu.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {edu.institution}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 font-medium text-center line-clamp-2">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    <Badge variant="secondary" className="px-2 py-1 text-xs font-medium">
                      {edu.status}
                    </Badge>
                    <Badge className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-primary to-blue-600">
                      {edu.cgpa}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4 p-2 rounded-lg bg-muted/50">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span className="font-medium">{edu.location}</span>
                  </div>

                  <div className="space-y-2 p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-start gap-2 text-xs"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-foreground/80 font-medium text-left">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
