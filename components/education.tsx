import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Trophy, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "University of Dhaka",
      degree: "Bachelor of Science in Computer Science and Engineering",
    //   duration: "2022 - 2026",
      status: "3rd year 1st semester",
      cgpa: "3.62",
      location: "Dhaka, Bangladesh",
      icon: GraduationCap,
      highlights: ["Current CGPA: 3.62/4.00", "Expected graduation: 2026"],
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
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey with consistent excellence and scholarship
            achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div> */}
                      </div>

                      <p className="text-lg text-muted-foreground mb-3">
                        {edu.degree}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {edu.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          CGPA/GPA: {edu.cgpa}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>

                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
