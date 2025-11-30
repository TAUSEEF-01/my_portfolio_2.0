import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "DIU CTF 2025",
      image: "/Certificates/BUP_CTF_2025.png",
      description: "Capture The Flag Competition",
    },
    {
      title: "AI Fiction",
      image: "/Certificates/photo_2025-11-29_15-20-57.jpg",
      description: "Achievement Certificate",
    },
    {
      title: "BUP CTF 2025",
      image: "/Certificates/photo_2025-11-29_15-23-13.jpg",
      description: "Achievement Certificate",
    },
    {
      title: "API Avengers",
      image: "/Certificates/photo_2025-11-29_15-23-17.jpg",
      description: "Achievement Certificate",
    },
  ];

  return (
    <section id="certificates" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background effects - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 mb-4 lg:mb-6">
            <Award className="h-5 w-5 lg:h-6 lg:w-6 text-amber-600 dark:text-amber-400" />
            <span className="text-sm lg:text-base font-semibold text-amber-600 dark:text-amber-400">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Certificates & Awards
          </h2>
          <p className="text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Recognition and certifications earned through competitions and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-3 transition-all duration-500 group border-2 hover:border-amber-500/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  {/* Show full certificate with proper aspect ratio */}
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Award icon overlay */}
                  <div className="absolute top-2 right-2 lg:top-3 lg:right-3 p-1.5 lg:p-2 bg-amber-500/90 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-500">
                    <Award className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  </div>
                </div>
                <div className="p-3 lg:p-4 bg-gradient-to-br from-card to-card/80">
                  <h3 className="font-bold text-sm lg:text-base mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
