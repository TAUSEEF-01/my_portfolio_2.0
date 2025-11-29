import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Programming Contests",
      items: [
        "7th Position at East West University CTF",
        "3rd Position at DU CTF",
        "15th Position at Asia Pacific University",
      ],
    },
    {
      icon: Award,
      title: "Academic Excellence",
      items: [
        "HSC: GPA 5.00 (General Scholarship)",
        "SSC: GPA 5.00 (General Scholarship)",
        "Current CGPA: (To be determined) (CSE, University of Dhaka)",
      ],
    },
    {
      icon: Target,
      title: "Competitive Programming",
      items: [
        "Codeforces: Pupil Rank",
        "Codechef: 3 Star Rating",
        "Multiple contest participations",
      ],
    },
    {
      icon: Star,
      title: "Hackathons & Professional",
      items: [
        "Code Samurai - Advanced to 2nd Stage",
        "Python AI Trainer at SuperAnnotate",
        "Multiple hackathon, CTF, and contest participations",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background effects - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-amber-500/8 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              🏆 Accomplishments
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence, competitive programming achievements, and professional milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-3 transition-all duration-500 group border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-0 relative z-10">
                <div className="relative mb-6">
                  <div className="p-5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <achievement.icon className="h-12 w-12 text-primary" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                
                <h3 className="font-bold text-xl mb-6 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <ul className="space-y-3 text-sm">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-left">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></span>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">
              Contest Participations
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              5.00
            </div>
            <div className="text-sm text-muted-foreground">HSC & SSC GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              3⭐
            </div>
            <div className="text-sm text-muted-foreground">Codechef Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              10+
            </div>
            <div className="text-sm text-muted-foreground">
              Hackathons & CTFs
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
