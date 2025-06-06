'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample project data - in real app this would come from CMS or API
const projectData = {
  title: "TechFlow Brand Identity",
  subtitle: "Complete visual identity system for innovative fintech startup",
  category: "Brand Identity",
  year: "2024",
  client: "TechFlow Inc.",
  role: "Creative Director & Lead Designer",
  duration: "3 months",
  team: ["Alex Creative (Lead)", "Sarah Johnson (Strategy)", "Mike Chen (Development)"],
  challenge: "TechFlow needed a sophisticated brand identity that would appeal to both tech-savvy millennials and established financial institutions, while differentiating them in the crowded fintech space.",
  solution: "We developed a dynamic visual system based on the concept of 'fluid innovation' - using flowing geometric patterns that represent both technology and financial flow, paired with a modern yet trustworthy color palette.",
  results: [
    "40% increase in brand recognition within 6 months",
    "Successfully raised $15M Series A funding",
    "Featured in TechCrunch and Forbes",
    "300% growth in user acquisition"
  ],
  tools: ["Adobe Creative Suite", "Figma", "Principle", "After Effects"],
  tags: ["Brand Strategy", "Logo Design", "Visual Identity", "Digital Design", "Fintech"],
  testimonial: {
    text: "Alex transformed our vision into a brand that truly represents who we are and where we're going. The identity system they created has been instrumental in our fundraising success.",
    author: "Jennifer Park",
    role: "CEO, TechFlow Inc."
  }
};

const projectImages = [
  {
    src: "/api/placeholder/800/600",
    alt: "TechFlow logo variations",
    caption: "Primary logo and variations across different applications"
  },
  {
    src: "/api/placeholder/1200/800",
    alt: "Brand color palette",
    caption: "Sophisticated color system designed for digital and print applications"
  },
  {
    src: "/api/placeholder/800/1000",
    alt: "Business card designs",
    caption: "Business card design showcasing tactile brand elements"
  },
  {
    src: "/api/placeholder/1000/600",
    alt: "Website mockup",
    caption: "Brand application on digital touchpoints"
  },
  {
    src: "/api/placeholder/800/800",
    alt: "Brand guidelines",
    caption: "Comprehensive brand guidelines ensuring consistency"
  },
  {
    src: "/api/placeholder/1200/600",
    alt: "Marketing materials",
    caption: "Brand system applied across various marketing materials"
  }
];

export default function ProjectDetailPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                {projectData.category}
              </span>
              <span className="text-sm text-muted-foreground">{projectData.year}</span>
            </div>

            <h1 className="mb-6">{projectData.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {projectData.subtitle}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-6xl mx-auto mb-20"
          >
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-24">
                <h3 className="font-display font-semibold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Client</h4>
                    <p className="text-muted-foreground">{projectData.client}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Role</h4>
                    <p className="text-muted-foreground">{projectData.role}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Duration</h4>
                    <p className="text-muted-foreground">{projectData.duration}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Team</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {projectData.team.map((member) => (
                        <li key={member}>{member}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectData.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs bg-background px-2 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Project Story */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {projectData.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {projectData.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">The Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectData.results.map((result, index) => (
                    <motion.div
                      key={result}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-card rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-muted-foreground">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Visual Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the visual development and final applications of the brand identity system.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-16">
            {projectImages.map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <div className="text-4xl">🖼️</div>
                  </div>
                </div>
                <p className="text-center text-muted-foreground">{image.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl font-light italic text-muted-foreground mb-8 leading-relaxed">
                "{projectData.testimonial.text}"
              </blockquote>
              <div>
                <div className="font-semibold text-lg">{projectData.testimonial.author}</div>
                <div className="text-muted-foreground">{projectData.testimonial.role}</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Navigation & CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Project Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-between items-center mb-16"
            >
              <Button variant="outline" className="rounded-full px-6">
                ← Previous Project
              </Button>
              <Button variant="outline" className="rounded-full px-6">
                All Projects
              </Button>
              <Button variant="outline" className="rounded-full px-6">
                Next Project →
              </Button>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="mb-6">Like What You See?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Let's discuss how we can create something equally compelling for your brand.
                Every project starts with understanding your unique vision and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-4 rounded-full">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-full">
                  View More Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
