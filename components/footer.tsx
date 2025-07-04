import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Md. Tauseef Ur Rahman
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Computer Science student at University of Dhaka, competitive programmer, 
              and full-stack developer passionate about solving complex problems and building impactful solutions.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/TAUSEEF-01"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/md-tauseef-ur-rahman-9240bb259/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://codeforces.com/profile/Thebest_01"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:mdtauseef.rahmang01@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Full-Stack Development</li>
              <li className="text-muted-foreground">Competitive Programming</li>
              <li className="text-muted-foreground">AI/ML Training</li>
              <li className="text-muted-foreground">Algorithm Design</li>
              <li className="text-muted-foreground">Web Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Md. Tauseef Ur Rahman. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            🎓 Computer Science Engineering Student | 🏆 Competitive Programmer | 💻 Full-Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
     