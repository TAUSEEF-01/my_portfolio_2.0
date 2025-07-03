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
  title: "Md. Tauseef - Ur - Rahman - Front-End Developer",
  description:
    "Professional portfolio of Md. Tauseef - Ur - Rahman, a passionate front-end developer creating beautiful and functional web experiences.",
  keywords:
    "front-end developer, web developer, React, Next.js, TypeScript, portfolio",
  authors: [{ name: "Md. Tauseef - Ur - Rahman" }],
  openGraph: {
    title: "Md. Tauseef - Ur - Rahman - Front-End Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
    type: "website",
  },
  generator: "v0.dev",
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
          defaultTheme="system"
          enableSystem
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
