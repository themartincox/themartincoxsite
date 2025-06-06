'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredPost = {
  id: 1,
  title: 'From Trans America Racing to Building Businesses: How Cycling Shaped My Entrepreneurial Journey',
  excerpt: 'The mental resilience, strategic thinking, and endurance mindset developed through ultra-distance cycling became the foundation for building three successful businesses.',
  category: 'Entrepreneurship',
  readTime: '8 min read',
  date: '2025-01-15',
  image: '🚴',
  featured: true,
  slug: 'trans-america-racing-to-building-businesses'
};

const blogPosts = [
  {
    id: 2,
    title: 'The ADHD Advantage: Why Neurodiversity is Your Entrepreneurial Superpower',
    excerpt: 'Discover how ADHD traits like hyperfocus, pattern recognition, and creative problem-solving can become massive advantages in business.',
    category: 'ADHD',
    readTime: '6 min read',
    date: '2025-01-10',
    image: '🧠',
    slug: 'adhd-entrepreneurial-advantage'
  },
  {
    id: 3,
    title: 'Building Milk Bottle Tops: Turning Nostalgia into a Sustainable Business',
    excerpt: 'The story behind reviving a nostalgic product and creating a business that spans decades, from idea to implementation.',
    category: 'Business Case Study',
    readTime: '5 min read',
    date: '2025-01-05',
    image: '🥛',
    slug: 'milk-bottle-tops-nostalgic-business'
  },
  {
    id: 4,
    title: 'Late ADHD Diagnosis: How Recognition Changed Everything',
    excerpt: 'My journey from confusion to clarity - getting diagnosed with ADHD as an adult and how it transformed my self-understanding.',
    category: 'ADHD',
    readTime: '7 min read',
    date: '2024-12-28',
    image: '💡',
    slug: 'late-adhd-diagnosis'
  },
  {
    id: 5,
    title: 'Ultra-Distance Cycling: Lessons in Mental Resilience',
    excerpt: 'What 4,200km across America teaches you about pushing through barriers, both on the bike and in business.',
    category: 'Cycling',
    readTime: '6 min read',
    date: '2024-12-20',
    image: '🏔️',
    slug: 'ultra-distance-cycling-lessons'
  },
  {
    id: 6,
    title: 'Growing SMEs: Marketing Strategies That Actually Work',
    excerpt: 'Practical marketing insights from helping dozens of UK small businesses grow through Postino consultancy.',
    category: 'Marketing',
    readTime: '8 min read',
    date: '2024-12-15',
    image: '📊',
    slug: 'growing-smes-marketing'
  },
  {
    id: 7,
    title: 'The Art of Hyperfocus: Maximizing ADHD Productivity',
    excerpt: 'How to harness the ADHD superpower of hyperfocus for maximum productivity and creative output in business.',
    category: 'ADHD',
    readTime: '5 min read',
    date: '2024-12-10',
    image: '🎯',
    slug: 'hyperfocus-productivity'
  },
  {
    id: 8,
    title: 'From Zero to £10k/week: Scaling Glazing Supplies Direct',
    excerpt: 'The strategic decisions and tactical moves that took a traditional manufacturing business to new heights.',
    category: 'Business Case Study',
    readTime: '7 min read',
    date: '2024-12-05',
    image: '🏭',
    slug: 'glazing-supplies-scaling'
  },
  {
    id: 9,
    title: 'Race Preparation: Strategic Planning for Business and Cycling',
    excerpt: 'The parallels between preparing for an ultra-distance race and planning a business strategy.',
    category: 'Strategy',
    readTime: '6 min read',
    date: '2024-11-28',
    image: '🗺️',
    slug: 'race-preparation-strategy'
  },
  {
    id: 10,
    title: 'ADHD in the Workplace: Creating Systems That Work',
    excerpt: 'Practical strategies for thriving in business when your brain works differently from the norm.',
    category: 'ADHD',
    readTime: '5 min read',
    date: '2024-11-20',
    image: '⚙️',
    slug: 'adhd-workplace-systems'
  },
  {
    id: 11,
    title: 'Building Multiple Businesses: Resource Management and Focus',
    excerpt: 'How to successfully manage multiple ventures without burning out, using lessons from endurance sports.',
    category: 'Entrepreneurship',
    readTime: '7 min read',
    date: '2024-11-15',
    image: '🏗️',
    slug: 'building-multiple-businesses'
  },
  {
    id: 12,
    title: 'The Neurodivergent Entrepreneur: A Different Path to Success',
    excerpt: 'Why traditional business advice doesn\'t always work for ADHD entrepreneurs and what does instead.',
    category: 'ADHD',
    readTime: '8 min read',
    date: '2024-11-10',
    image: '🌟',
    slug: 'neurodivergent-entrepreneur'
  }
];

const categories = [
  { name: 'All Posts', count: blogPosts.length + 1, color: 'text-foreground' },
  { name: 'ADHD', count: 5, color: 'text-creative' },
  { name: 'Entrepreneurship', count: 2, color: 'text-secondary' },
  { name: 'Cycling', count: 1, color: 'text-success' },
  { name: 'Business Case Study', count: 2, color: 'text-accent' },
  { name: 'Marketing', count: 1, color: 'text-accent' },
  { name: 'Strategy', count: 1, color: 'text-success' }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="mb-8">Insights & <span className="italic text-accent">Stories</span></h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Sharing lessons learned from ultra-distance cycling, building businesses,
              and navigating life with ADHD. Real experiences, practical insights,
              and honest reflections from the journey.
            </p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium border border-border hover:scale-105 transition-transform duration-200 ${category.color}`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="mb-4">Featured Story</h2>
              <p className="text-muted-foreground">Latest insights from the journey</p>
            </div>

            <Card className="p-8 md:p-12 hover:shadow-lg transition-all duration-300 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{featuredPost.image}</div>
                <div className="inline-flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    {featuredPost.category}
                  </span>
                  <span>{featuredPost.readTime}</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
              </div>

              <h3 className="text-3xl font-display font-semibold mb-6 text-center text-balance">
                {featuredPost.title}
              </h3>

              <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto text-pretty leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="text-center">
                <Button size="lg" className="px-8 py-4 rounded-full" asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>Read Full Story</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">All Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore insights on entrepreneurship, ADHD, cycling, and business building
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <div className="text-5xl mb-4 text-center">{post.image}</div>

                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full bg-muted font-medium ${
                        post.category === 'ADHD' ? 'text-creative' :
                        post.category === 'Entrepreneurship' ? 'text-secondary' :
                        post.category === 'Cycling' ? 'text-success' :
                        post.category === 'Business Case Study' ? 'text-accent' :
                        post.category === 'Marketing' ? 'text-accent' :
                        'text-success'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="text-sm font-medium text-accent hover:underline">
                        Read More →
                      </span>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button variant="outline" size="lg" className="px-8 py-4 rounded-full">
              Load More Stories
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-creative/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Get the latest insights on entrepreneurship, ADHD advantages, cycling lessons,
              and business building delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="your.email@domain.com"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background"
              />
              <Button className="px-8 py-3 rounded-full whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Weekly insights • No spam • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Explore by Topic</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into specific areas of interest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'ADHD Insights', icon: '🧠', desc: 'Neurodiversity as advantage', color: 'from-creative/20 to-creative/5' },
              { name: 'Business Building', icon: '🏗️', desc: 'Entrepreneurial lessons', color: 'from-secondary/20 to-secondary/5' },
              { name: 'Cycling Stories', icon: '🚴', desc: 'Ultra-distance adventures', color: 'from-success/20 to-success/5' },
              { name: 'Growth Strategy', icon: '📈', desc: 'Marketing & scaling', color: 'from-accent/20 to-accent/5' }
            ].map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br ${topic.color}`}>
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="font-semibold mb-2">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{topic.desc}</p>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View All →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
