-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, category, published) VALUES
('Getting Started with Next.js 14', 'getting-started-nextjs-14', 'Learn about the latest features in Next.js 14 and how to build modern web applications.', 'Full blog content here...', '/placeholder.svg?height=200&width=300', 'Web Development', true),
('The Future of CSS: Container Queries', 'future-css-container-queries', 'Explore how container queries are revolutionizing responsive design in modern web development.', 'Full blog content here...', '/placeholder.svg?height=200&width=300', 'CSS', true),
('Building Accessible React Components', 'building-accessible-react-components', 'Best practices for creating inclusive and accessible React components for all users.', 'Full blog content here...', '/placeholder.svg?height=200&width=300', 'React', true);
