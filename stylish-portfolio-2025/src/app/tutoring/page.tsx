'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const tutoringLevels = [
  { level: 'GCSE', description: 'Building fundamental business knowledge and exam confidence.', icon: '📚' },
  { level: 'A-Level', description: 'Mastering complex theories, case studies, and critical analysis.', icon: '🎓' },
  { level: 'Undergraduate', description: 'Support for degree-level business, management, and marketing modules.', icon: '🏛️' },
  { level: 'Post-graduate', description: 'Specialized guidance for MBA and Masters level business studies.', icon: '🚀' }
];

const faqs = [
  {
    question: "Do you offer in-person tutoring in Nottingham?",
    answer: "Yes, I offer in-person business tutoring sessions across Nottingham and surrounding areas. For those further afield or who prefer digital sessions, I provide fully remote tutoring via Zoom or Google Meet."
  },
  {
    question: "How does your ADHD affect your tutoring style?",
    answer: "I leverage my 'ADHD Advantage' to create highly engaging, non-linear, and practical learning experiences. I specialize in helping neurodiverse students find learning strategies that actually work for their brains, rather than forcing traditional methods."
  },
  {
    question: "Is the tutoring based on academic theory or real-world experience?",
    answer: "Both. I bridge the gap between academic requirements and real-world business application. Having built multiple million-pound businesses, I can explain theories using actual examples from the UK business landscape."
  }
];

export default function TutoringPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Business Studies Tutoring",
    "provider": {
      "@type": "Person",
      "name": "Martin Cox"
    },
    "description": "Expert private business studies tutoring in Nottingham and online. GCSE, A-Level, Degree, and Post-grad levels. Specialized support for ADHD students.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Nottingham"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tutoring Levels",
      "itemListElement": tutoringLevels.map((lvl, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${lvl.level} Business Tutoring`
        }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="container relative overflow-hidden mb-20 px-4">
        <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="gradient-text-vibrant mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Business Tutoring
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real-world entrepreneurial experience meets academic excellence. 
            Personalized tutoring from GCSE to Post-grad levels, in-person in Nottingham or online nationwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full px-12 py-6 text-lg bg-secondary hover:bg-secondary/90">
              Book a Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-16">Academic Support Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutoringLevels.map((lvl, index) => (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full flex flex-col items-center text-center hover:border-accent transition-colors duration-300">
                  <div className="text-5xl mb-6">{lvl.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{lvl.level}</h3>
                  <p className="text-muted-foreground">{lvl.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADHD Advantage Section */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">The <span className="text-creative">Neurodiverse</span> Advantage</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As an adult-diagnosed entrepreneur with ADHD, I don't just teach business; I teach how to navigate business with a neurodiverse brain. 
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-creative/5 border border-creative/10">
                  <div className="text-2xl mt-1">🧩</div>
                  <div>
                    <h4 className="font-bold text-creative">Adaptive Learning</h4>
                    <p className="text-sm text-muted-foreground">Moving beyond textbooks to find the learning style that fits your cognitive profile.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <div className="text-2xl mt-1">⚡</div>
                  <div>
                    <h4 className="font-bold text-accent">Hyperfocus Utilization</h4>
                    <p className="text-sm text-muted-foreground">Turning ADHD traits into intense productivity and deep subject mastery.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-creative/20 to-accent/20 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
               <div className="text-9xl">🧠</div>
               <div className="absolute inset-0 pattern-grid opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-lg font-bold mb-3 text-accent">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-6">Ready to Accelerate Your Learning?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Whether you're struggling with concepts or aiming for top grades, let's build your path to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full px-12 py-6 text-lg bg-secondary hover:bg-secondary/90">
              Book Business Tutoring
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-12 py-6 text-lg border-accent text-accent hover:bg-accent/10">
              View All Locations
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
