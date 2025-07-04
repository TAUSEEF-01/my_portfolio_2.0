import { Card, CardContent } from "@/components/ui/card";
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
        "Current CGPA: 3.62 (CSE, University of Dhaka)",
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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic excellence, competitive programming achievements, and
            professional milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-2 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-left">{item}</span>
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
