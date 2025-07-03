import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you'd fetch this from Supabase based on the slug
  const post = {
    title: "Getting Started with Next.js 14",
    excerpt: "Learn about the latest features in Next.js 14 and how to build modern web applications.",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-15",
    category: "Web Development",
    readTime: "5 min read",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 brings exciting new features and improvements that make building modern web applications even more enjoyable. In this comprehensive guide, we'll explore the key features and learn how to leverage them in your projects.</p>
      
      <h2>What's New in Next.js 14</h2>
      <p>The latest version of Next.js introduces several groundbreaking features:</p>
      <ul>
        <li><strong>Turbopack (Beta):</strong> A new bundler that's significantly faster than Webpack</li>
        <li><strong>Server Actions (Stable):</strong> Simplified server-side form handling</li>
        <li><strong>Partial Prerendering:</strong> Combine static and dynamic content seamlessly</li>
        <li><strong>Improved Developer Experience:</strong> Better error messages and debugging tools</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <h2>Key Features Deep Dive</h2>
      <h3>Turbopack</h3>
      <p>Turbopack is Next.js's new bundler built in Rust. It provides:</p>
      <ul>
        <li>Up to 10x faster local development</li>
        <li>Improved hot module replacement</li>
        <li>Better error handling and debugging</li>
      </ul>
      
      <h3>Server Actions</h3>
      <p>Server Actions allow you to run server-side code directly from your components:</p>
      <pre><code>async function createPost(formData: FormData) {
  'use server'
  
  const title = formData.get('title')
  // Handle form submission
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 represents a significant step forward in React development. With improved performance, better developer experience, and powerful new features, it's an excellent choice for your next project.</p>
    `,
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Badge>{post.category}</Badge>
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </header>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  More Articles
                </Link>
              </Button>

              <div className="text-sm text-muted-foreground">Share this article</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
