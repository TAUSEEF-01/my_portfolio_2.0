"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Working with [Md. Tauseef - Ur - Rahman] was an absolute pleasure. They delivered exceptional results on time and exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "The website [Md. Tauseef - Ur - Rahman] built for us has significantly improved our online presence. The design is beautiful, the code is clean, and the performance is excellent. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director at GrowthCo",
      content:
        "Professional, reliable, and incredibly talented. [Md. Tauseef - Ur - Rahman] transformed our vision into a stunning reality. The project was completed ahead of schedule with amazing results.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder at InnovateLab",
      content:
        "Exceptional work quality and great communication throughout the project. [Md. Tauseef - Ur - Rahman] understood our requirements perfectly and delivered a solution that perfectly fits our needs.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "CTO at DataFlow",
      content:
        "The technical skills and problem-solving abilities are top-notch. [Md. Tauseef - Ur - Rahman] helped us overcome complex challenges and delivered a robust, scalable solution.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="p-8 md:p-12">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={
                        testimonials[currentIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
