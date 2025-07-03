import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  // In a real app, you'd fetch this from Supabase
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt:
        "Learn about the latest features in Next.js 14 and how to build modern web applications with improved performance and developer experience.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      category: "Web Development",
      readTime: "5 min read",
      slug: "getting-started-nextjs-14",
    },
    {
      id: 2,
      title: "The Future of CSS: Container Queries",
      excerpt:
        "Explore how container queries are revolutionizing responsive design in modern web development and changing the way we think about layouts.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-10",
      category: "CSS",
      readTime: "7 min read",
      slug: "future-css-container-queries",
    },
    {
      id: 3,
      title: "Building Accessible React Components",
      excerpt:
        "Best practices for creating inclusive and accessible React components that work for all users, including those with disabilities.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-05",
      category: "React",
      readTime: "6 min read",
      slug: "building-accessible-react-components",
    },
    {
      id: 4,
      title: "TypeScript Best Practices for 2024",
      excerpt:
        "Discover the latest TypeScript patterns and practices that will make your code more maintainable and type-safe.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-28",
      category: "TypeScript",
      readTime: "8 min read",
      slug: "typescript-best-practices-2024",
    },
    {
      id: 5,
      title: "Optimizing Web Performance with Core Web Vitals",
      excerpt:
        "Learn how to improve your website's performance by focusing on Core Web Vitals and user experience metrics.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-20",
      category: "Performance",
      readTime: "10 min read",
      slug: "optimizing-web-performance-core-web-vitals",
    },
    {
      id: 6,
      title: "Modern CSS Layout Techniques",
      excerpt:
        "Explore modern CSS layout methods including Grid, Flexbox, and the latest layout primitives for creating responsive designs.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-15",
      category: "CSS",
      readTime: "9 min read",
      slug: "modern-css-layout-techniques",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">{post.category}</Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" asChild className="group/btn p-0">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
