import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Md. Tauseef Ur Rahman - Computer Science Student & Full-Stack Developer",
  description:
    "Portfolio of Md. Tauseef Ur Rahman - Computer Science student at University of Dhaka, competitive programmer (Codeforces Pupil, Codechef 3-Star), and full-stack developer with professional AI training experience.",
  keywords:
    "competitive programming, full-stack developer, computer science, University of Dhaka, Codeforces, Codechef, React, Next.js, Python, Java, Spring Boot, AI training, web development",
  authors: [{ name: "Md. Tauseef Ur Rahman" }],
  openGraph: {
    title: "Md. Tauseef Ur Rahman - Computer Science Student & Developer",
    description:
      "Competitive programmer and full-stack developer passionate about solving complex problems and building impactful solutions.",
    type: "website",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
