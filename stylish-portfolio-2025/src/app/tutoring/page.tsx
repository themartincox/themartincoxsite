'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LevelData, LocationData, LOCATIONS, LEVELS, TESTIMONIALS } from '@/lib/tutoring-data';
import Link from 'next/link';
import TutoringContactForm from '@/components/tutoring/TutoringContactForm';
import { Star } from 'lucide-react';

const defaultLevels = [
  { level: 'GCSE', description: 'Building fundamental business knowledge and exam confidence.', icon: '📚' },
  { level: 'A-Level', description: 'Mastering complex theories, case studies, and critical analysis.', icon: '🎓' },
  { level: 'Undergraduate', description: 'Support for degree-level business, management, and marketing modules.', icon: '🏛️' },
  { level: 'Post-graduate', description: 'Specialised guidance for MBA and Masters level business studies.', icon: '🚀' }
];

const faqs = [
  {
    question: "Do you offer in-person tutoring in Nottingham?",
    answer: "Yes, I offer in-person business tutoring sessions across Nottingham and surrounding areas. For those further afield or who prefer digital sessions, I provide fully remote tutoring via Zoom or Google Meet."
  },
  {
    question: "How does your ADHD affect your tutoring style?",
    answer: "I leverage my 'ADHD Advantage' to create highly engaging, non-linear, and practical learning experiences. I specialise in helping neurodiverse students find learning strategies that actually work for their brains, rather than forcing traditional methods."
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
    ? `Top-Rated ${levelName} Tutoring in ${cityName}`
    : 'Expert Business Studies Tutoring';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${levelName} Tutoring in ${cityName}`,
    "provider": {
      "@type": "Person",
      "name": "Martin Cox"
    },
    "description": level?.description || `Top-rated private business studies tutoring in ${cityName} and online. Over 20 years of experience helping students succeed at GCSE, A-Level, and Degree levels. SEN friendly and neurodiverse specialist.`,
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
            {level?.description || 'With over 20 years of award-winning experience, I help students navigate the complexities of the business syllabus with confidence.'}
            <br className="hidden md:block" />
            Personalised support {level ? `focused on ${level.title}` : 'from GCSE to Post-graduate levels'},
            {location ? ` serving students across ${location.name}` : ' available in-person in Nottingham'} or online worldwide.
            <br />
            <span className="text-sm font-medium text-accent mt-4 inline-block italic">SEN Friendly & Neurodiverse Specialist</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="rounded-full px-12 py-6 text-lg bg-secondary hover:bg-secondary/90"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
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

      {/* About Martin Section */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
                <Star className="w-4 h-4 fill-accent" />
                Featured Academic Ambassador
              </div>
              <h2 className="mb-6 font-display">About Martin Cox</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm Martin, and my mission is to help students unlock their full potential through education that is relatable, engaging, and grounded in real-world application.
              </p>
              <div className="space-y-6 mb-8 text-muted-foreground">
                <p>
                  With an award-winning background in University-level teaching, I've supported thousands of students in achieving the grades they deserve—whether helping them master complex coursework or excel in final exams.
                </p>
                <p>
                  As an Academic Advisory Board Member for the American Institute of Business & Management, I consult on course design at the highest levels. My global perspective is shaped by teaching students across the UK and internationally, from London to Hong Kong and Dubai.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 p-6 bg-muted/50 rounded-2xl border">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">20+</div>
                  <div className="text-xs uppercase tracking-wider font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">1000s</div>
                  <div className="text-xs uppercase tracking-wider font-bold">Students Helped</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center relative">
                <div className="text-[12rem] filter grayscale opacity-20">📈</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-background/40 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">"Making sense of the business syllabus"</h3>
                  <p className="italic">Relatable, responsive, and outcomes-focused tutoring.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm font-medium leading-relaxed">
                  "One of our best tutors. Quality profile, verified qualifications, and a great response time."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localized Content Section (if location exists) */}
      {location && (
        <section className="section-padding border-b bg-muted/20">
          <div className="container max-w-4xl text-center">
            <h2 className="mb-8 font-display">Supporting Students in {location.name}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Providing specialist business studies support for students throughout {location.name}.
              {location.schools && location.schools.length > 0 && (
                <> Including those attending <strong>{location.schools.join(', ')}</strong> and other leading local institutions.</>
              )}
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">Local In-Person</div>
              <div className="px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">Online Sessions</div>
            </div>
            <p className="mt-8 text-sm text-muted-foreground italic">
              Available for home visits or sessions in public spaces within 10km of {location.name}.
            </p>
          </div>
        </section>
      )}

      {/* Teaching Approach Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-16">My Teaching Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-accent/20 transition-colors">
                  <h4 className="font-bold mb-3 text-accent flex items-center gap-2">
                    <span className="text-xl">🎓</span> Academic Excellence
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Personalised support for GCSE, A-levels, T-levels, and BTECs. I also specialise in entrance exam preparation for prestigious institutions like Bromsgrove and Gordon's.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-accent/20 transition-colors">
                  <h4 className="font-bold mb-3 text-creative flex items-center gap-2">
                    <span className="text-xl">🏛️</span> University & Beyond
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I support Undergraduates and Post-graduates at Russell Group universities, as well as students on programs at Oxford, Harvard, and various MBA pathways.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                  <h4 className="font-bold mb-3">Real-World Relevance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Business isn't just about textbooks. I bring the curriculum to life by relating every concept to real-world scenarios, ensuring students don't just learn—they understand.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
                  <h4 className="font-bold mb-3">Tailored Experience</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every student has a unique learning style. My sessions are designed to engage and connect, providing incisive support that delivers both results and confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center p-8 rounded-3xl bg-secondary/10 border border-secondary/20">
              <p className="text-lg font-medium italic">
                "I help students of all levels make sense of the curriculum, turning classroom challenges into opportunities for growth."
              </p>
            </div>
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
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-accent/5 rounded-2xl border border-accent/10 text-center italic">
            "I have had notable success supporting neurodiverse learners and those who find traditional classroom settings challenging. Being ADHD myself, I truly understand the hurdles students face."
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-16">Results & Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                    {testimonial.name[0]}
                  </div>
                  <div className="font-bold">{testimonial.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-accent/10 rounded-3xl border border-accent/20 text-center">
            <p className="font-medium text-lg mb-4 italic">
              "Martin's sessions are the best! High quality education, expert knowledge, and a respectful, fun atmosphere."
            </p>
            <div className="flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-accent">
              <span>Verified Qualifications</span>
              <span>•</span>
              <span>Award Winning</span>
              <span>•</span>
              <span>20+ Years Excellence</span>
            </div>
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
            <Button
              size="lg"
              className="rounded-full px-12 py-6 text-lg bg-secondary hover:bg-secondary/90"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
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

      {/* Specific Tutoring Contact Form */}
      <TutoringContactForm level={level} location={location} />
    </main>
  );
}
