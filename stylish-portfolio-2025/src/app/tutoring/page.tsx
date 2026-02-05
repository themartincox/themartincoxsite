'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LevelData, LocationData, LOCATIONS, LEVELS } from '@/lib/tutoring-data';
import Link from 'next/link';

const defaultLevels = [
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

interface TutoringPageProps {
  level?: LevelData | null;
  location?: LocationData | null;
}

export default function TutoringPage({ level, location }: TutoringPageProps) {
  const isMatrixPage = !!(level || location);
  const cityName = location?.name || 'Nottingham';
  const levelName = level?.title || 'Business';

  const pageTitle = isMatrixPage
    ? `Expert ${levelName} Tutoring in ${cityName}`
    : 'Expert Business Tutoring';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${levelName} Tutoring in ${cityName}`,
    "provider": {
      "@type": "Person",
      "name": "Martin Cox"
    },
    "description": level?.description || `Expert private business studies tutoring in ${cityName} and online. GCSE, A-Level, Degree, and Post-grad levels. Specialized support for ADHD students.`,
    "areaServed": [
      {
        "@type": "City",
        "name": cityName
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tutoring Levels",
      "itemListElement": defaultLevels.map((lvl, i) => ({
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
            {pageTitle}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {level?.description || 'Real-world entrepreneurial experience meets academic excellence.'}
            <br className="hidden md:block" />
            Personalized tutoring {level ? `specifically for ${level.title}` : 'from GCSE to Post-grad levels'},
            {location ? ` serving students across ${location.name}` : ' in-person in Nottingham'} or online nationwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full px-12 py-6 text-lg bg-secondary hover:bg-secondary/90">
              Book {level ? level.title : 'a Session'}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Levels Section - Only show if not on a specific level page or keep as "Other levels"? */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-16">
            {level ? 'Other Academic Levels' : 'Academic Support Levels'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultLevels.map((lvl, index) => (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-8 h-full flex flex-col items-center text-center hover:border-accent transition-colors duration-300 ${level?.title.includes(lvl.level) ? 'border-accent bg-accent/5' : ''}`}>
                  <div className="text-5xl mb-6">{lvl.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{lvl.level}</h3>
                  <p className="text-muted-foreground">{lvl.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Content Section (if location exists) */}
      {location && (
        <section className="section-padding border-b">
          <div className="container max-w-4xl text-center">
            <h2 className="mb-8 font-display">Supporting Students in {location.name}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Providing specialized business studies support for students throughout {location.name}.
              {location.schools && location.schools.length > 0 && (
                <> Including those attending <strong>{location.schools.join(', ')}</strong> and other leading local institutions.</>
              )}
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">Local In-Person</div>
              <div className="px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium">Online Sessions</div>
            </div>
          </div>
        </section>
      )}

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

      {/* Internal Linking / Locations Section */}
      <section id="locations" className="section-padding border-t bg-muted/20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-pretty">Tutor Services by Location</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="space-y-4">
                <h3 className="font-bold text-lg text-accent">{loc.name}</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href={`/tutoring/${loc.slug}`} className="text-muted-foreground hover:text-accent transition-colors">
                      Business Tutor in {loc.name}
                    </Link>
                  </li>
                  {Object.values(LEVELS).map((lvl) => (
                    <li key={lvl.slug}>
                      <Link
                        href={`/tutoring/${lvl.slug}-${loc.slug}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {lvl.title} {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t">
            <h2 className="text-3xl font-bold mb-8 text-center">Business Studies Support Levels</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.values(LEVELS).map((lvl) => (
                <Link
                  key={lvl.slug}
                  href={`/tutoring/${lvl.slug}`}
                  className="px-6 py-3 rounded-full bg-card border hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {lvl.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-6">Ready to Accelerate Your Learning?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Whether you're struggling with concepts or aiming for top grades, let's build your path to success in {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full px-12 py-6 text-lg bg-secondary hover:bg-secondary/90">
              Book {levelName} Tutoring
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-12 py-6 text-lg border-accent text-accent hover:bg-accent/10"
              onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Locations
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
