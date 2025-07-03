import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn about the latest features in Next.js 14 and how to build modern web applications.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Future of CSS: Container Queries",
      excerpt: "Explore how container queries are revolutionizing responsive design in modern web development.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-10",
      category: "CSS",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building Accessible React Components",
      excerpt: "Best practices for creating inclusive and accessible React components for all users.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-05",
      category: "React",
      readTime: "6 min read",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
