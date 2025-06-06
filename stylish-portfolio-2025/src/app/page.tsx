'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const identityFacets = [
  { label: 'Builder', icon: '🏗️', color: 'text-secondary', description: '3 successful businesses' },
  { label: 'Creator', icon: '💡', color: 'text-accent', description: 'Content & products' },
  { label: 'Cyclist', icon: '🚴', color: 'text-success', description: 'Trans America racer' },
  { label: 'Innovator', icon: '🚀', color: 'text-creative', description: 'Market disruptor' },
  { label: 'Neurodiverse', icon: '🧠', color: 'text-secondary', description: 'ADHD advantage' },
  { label: 'Mentor', icon: '🎯', color: 'text-accent', description: 'Business guidance' },
  { label: 'Consultant', icon: '📈', color: 'text-success', description: 'Growth strategy' }
];

const businessPortfolio = [
  {
    title: "Postino",
    subtitle: "Marketing & Strategy Consultancy",
    description: "Empowering UK SMEs with data-driven marketing solutions",
    metric: "3x Traffic Growth",
    color: "from-secondary/20 to-accent/20",
    icon: "📊",
    url: "https://www.postino.cc"
  },
  {
    title: "Milk Bottle Tops",
    subtitle: "Product Innovation & E-commerce",
    description: "Reviving nostalgic products with modern sustainability",
    metric: "3M+ Sold Since '93",
    color: "from-success/20 to-accent/20",
    icon: "🥛",
    url: "https://www.milkbottletops.co.uk",
    featured: true
  },
  {
    title: "Glazing Supplies Direct",
    subtitle: "Manufacturing & B2B Excellence",
    description: "UK-made glazing solutions trusted by 8,000+ professionals",
    metric: "£0-£10k/week in 90 days",
    color: "from-creative/20 to-secondary/20",
    icon: "🏭",
    url: "https://www.glazingsuppliesdirect.com"
  }
];

const selectedClients = [
  {
    title: "FinTech Scale-Up",
    category: "UK market entry, brand positioning, leadership consulting",
    icon: "💳"
  },
  {
    title: "Health Tech",
    category: "Growth strategy, positioning, automation",
    icon: "🏥"
  },
  {
    title: "SaaS Platform",
    category: "Growth marketing, leadership consulting, brand positioning",
    icon: "⚡"
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0">
        {/* Dynamic Background Elements with Interactive Blobs */}
        <div className="absolute inset-0 pattern-grid opacity-30" />

        {/* Main Floating Identity Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 cycling-route neuro-shape opacity-20" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-creative/10 to-success/10 neuro-shape" />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-secondary/20 neuro-shape" />

        {/* Mini Interactive Blobs */}
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-secondary/40 to-success/40 neuro-shape mini-blob animate-float-2" />
        <div className="absolute top-3/4 left-1/4 w-10 h-10 bg-gradient-to-br from-creative/25 to-accent/25 neuro-shape mini-blob animate-float-3" />
        <div className="absolute top-1/6 left-3/4 w-7 h-7 bg-gradient-to-br from-success/35 to-secondary/35 neuro-shape mini-blob animate-float-4" />
        <div className="absolute bottom-1/4 left-2/3 w-5 h-5 bg-gradient-to-br from-accent/45 to-creative/45 neuro-shape mini-blob animate-float-5" />

        {/* Hero Content */}
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Identity Badges */}
            <motion.div
              className="hidden md:flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {identityFacets.map((facet, index) => (
                <motion.div
                  key={facet.label}
                  className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-lg">{facet.icon}</span>
                  <span className={facet.color}>{facet.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.h1
              className="gradient-text-vibrant mb-6 md:mb-8 pb-4 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              From Crossing Continents to
              <br />
              <span className="italic font-light">Building Businesses</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Adventure cyclist and content creator turned serial entrepreneur.
              From 4,200km Trans America races to building £multi-million businesses.
              Transforming ADHD into entrepreneurial advantage.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200 bg-secondary hover:bg-secondary/90"
              >
                Explore My Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-accent rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Building Portfolio Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Building Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Three distinct businesses, each solving real problems. From marketing strategy to
              innovative products to manufacturing excellence.
            </p>
          </motion.div>

          {/* Dynamic Business Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {businessPortfolio.map((business, index) => (
              <motion.div
                key={business.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={business.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card className="builder-card group cursor-pointer overflow-hidden h-full">
                  <div className={`p-8 h-full bg-gradient-to-br ${business.color} relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 pattern-dots opacity-20" />

                    {/* Dynamic Shape */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 neuro-shape" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-5xl">{business.icon}</div>
                        <div className="text-sm font-bold bg-white/10 text-accent px-3 py-1 rounded-full">
                          {business.metric}
                        </div>
                      </div>

                      <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                        {business.title}
                      </h3>

                      <p className="text-accent font-medium mb-4 text-sm">
                        {business.subtitle}
                      </p>

                      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {business.description}
                      </p>

                      <Button
                        variant="outline"
                        className="w-full rounded-full bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm group-hover:border-accent group-hover:text-accent transition-all duration-300"
                      >
                        Explore Business
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Selected Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by growing businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {selectedClients.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="text-4xl mb-4">{client.icon}</div>
                  <h3 className="font-semibold mb-2">{client.title}</h3>
                  <p className="text-sm text-muted-foreground">{client.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-8">Some of the other brands I've worked with</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Oakley', 'Sony', 'Jaguar Land Rover', 'Ericsson', 'Thales', 'Ikano', 'Genie Lifting'].map((brand) => (
                <span key={brand} className="text-muted-foreground font-medium">{brand}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADHD Section */}
      <section className="section-padding bg-gradient-to-br from-creative/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">ADHD: My <span className="text-creative">Entrepreneurial Edge</span></h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Diagnosed at age 47, what many see as a challenge became my
                greatest business asset. ADHD brings hyperfocus, pattern
                recognition, and the ability to see opportunities others miss. Late
                diagnosis meant years of unconsciously leveraging these strengths.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { trait: 'Hyperfocus', benefit: 'Deep work on critical business challenges' },
                  { trait: 'Pattern Recognition', benefit: 'Spotting market gaps and opportunities' },
                  { trait: 'Creative Problem-Solving', benefit: 'Innovative solutions to complex problems' },
                  { trait: 'High Energy', benefit: 'Managing multiple businesses simultaneously' }
                ].map((item) => (
                  <div key={item.trait} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-creative rounded-full mt-2" />
                    <div>
                      <span className="font-semibold text-creative">{item.trait}:</span>
                      <span className="text-muted-foreground ml-2">{item.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="rounded-full px-8 py-4 bg-creative hover:bg-creative/90">
                Learn About Neurodiversity in Business
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-creative/20 to-accent/5 rounded-3xl neuro-shape flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-30" />
                <div className="text-8xl relative z-10">🧠</div>
                {/* Neural network visualization */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-creative/60 rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* From Road to Boardroom */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">From Road to Boardroom</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The discipline, goal-setting, and performance optimisation skills from ultra-endurance cycling
              directly translate to building and scaling businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🎯', title: 'Goal Setting', description: 'Clear objectives with measurable outcomes' },
              { icon: '⚡', title: 'Performance', description: 'Continuous optimisation and improvement' },
              { icon: '💪', title: 'Resilience', description: 'Overcoming setbacks and staying focused' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-white mb-6">Ready to Build Something Extraordinary?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto text-pretty">
              Whether you need business strategy, want to understand the ADHD advantage, or are
              curious about my journey from cycling to entrepreneurship, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200"
              >
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200 border-white text-white hover:bg-white hover:text-primary"
              >
                Explore My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
