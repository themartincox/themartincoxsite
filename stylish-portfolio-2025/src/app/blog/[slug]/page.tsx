'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { BlogPost, blogPosts } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Updated for Next.js 15 with client-side params handling
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;

      const uniqueKey = `${paragraph.substring(0, 20).replace(/\s+/g, '-')}-${index}`;

      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={uniqueKey} className="text-4xl md:text-5xl font-display font-bold mb-8 text-balance">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }

      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={uniqueKey} className="text-2xl md:text-3xl font-display font-semibold mb-6 mt-12 text-balance">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }

      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={uniqueKey} className="text-xl font-display font-semibold mb-4 mt-8">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={uniqueKey} className="font-semibold text-lg mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </p>
        );
      }

      if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
        return (
          <p key={uniqueKey} className="italic text-muted-foreground text-center mb-6 text-lg">
            {paragraph.replace(/\*/g, '')}
          </p>
        );
      }

      if (paragraph.startsWith('- ')) {
        return (
          <li key={uniqueKey} className="text-muted-foreground leading-relaxed mb-2 ml-4">
            {paragraph.replace('- ', '')}
          </li>
        );
      }

      return (
        <p key={uniqueKey} className="text-muted-foreground leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <span>→</span>
              <span>{post.category}</span>
              <span>→</span>
              <span className="text-foreground">{post.title}</span>
            </motion.div>

            {/* Post Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="text-6xl mb-6">{post.image}</div>

              <div className="inline-flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className={`px-3 py-1 rounded-full ${post.category === 'ADHD' ? 'bg-creative text-creative-foreground' :
                    post.category === 'Entrepreneurship' ? 'bg-secondary text-secondary-foreground' :
                      post.category === 'Business Case Study' ? 'bg-accent text-accent-foreground' :
                        'bg-success text-success-foreground'
                  }`}>
                  {post.category}
                </span>
                <span>{post.readTime}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>By {post.author}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert"
          >
            <div className="blog-content">
              {formatContent(post.content)}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Tags */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm bg-background border border-border hover:border-accent transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-border">
              <Button variant="outline" asChild>
                <Link href="/blog">← Back to Blog</Link>
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Share on LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Share on Twitter
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-display font-semibold mb-12 text-center">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {post.relatedPosts.slice(0, 3).map((relatedSlug: string, index: number) => {
                  const relatedPost = blogPosts[relatedSlug];
                  if (!relatedPost) return null;

                  return (
                    <motion.div
                      key={relatedSlug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <Link href={`/blog/${relatedSlug}`} className="block p-6">
                          <div className="text-4xl mb-4 text-center">{relatedPost.image}</div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium">
                              {relatedPost.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                          </div>
                          <h3 className="font-semibold mb-3 line-clamp-2">{relatedPost.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                        </Link>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
