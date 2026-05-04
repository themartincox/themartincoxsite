'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Target, Lightbulb, Zap, Handshake } from 'lucide-react';

const benefits = [
  {
    Icon: Target,
    title: 'Strategic Clarity',
    description: 'Clear direction on your growth goals, positioning, and what moves the needle.'
  },
  {
    Icon: Lightbulb,
    title: 'Expert Insights',
    description: 'Actionable recommendations from 20+ years building and scaling businesses.'
  },
  {
    Icon: Zap,
    title: 'Fast Results',
    description: 'Walk away with immediate next steps — no vague advice, no fluff.'
  },
  {
    Icon: Handshake,
    title: 'Right Fit',
    description: "Ensure we're aligned on vision, approach, and working style before committing."
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: "We'll discuss your business challenges, goals, and where you want to be in 12 months.",
    duration: '20 minutes'
  },
  {
    step: '02',
    title: 'Strategic Review',
    description: "I'll analyse your situation and prepare a focused proposal with clear recommendations.",
    duration: '24–48 hours'
  },
  {
    step: '03',
    title: 'Getting Started',
    description: 'Once aligned on scope and outcomes, we move fast. No drawn-out onboarding.',
    duration: 'Timeline varies'
  }
];

const testimonials = [
  {
    text: "Martin's strategic approach helped us identify growth opportunities we'd completely missed. His perspective as a founder who's been through it was invaluable.",
    author: "Sarah Wilson",
    role: "Founder",
    company: "Tech Startup"
  },
  {
    text: "Working with Martin through Postino was transformative. His blend of strategic thinking and real-world entrepreneurial experience is exactly what we needed.",
    author: "James Patterson",
    role: "Business Owner",
    company: "UK SME"
  },
  {
    text: "Martin gave us immediate clarity on our go-to-market strategy. His cycling mindset — setting a target and finding the most efficient route — applies directly to business.",
    author: "Emma Clarke",
    role: "Marketing Director",
    company: "Growing Business"
  }
];

const faqs = [
  {
    question: "What happens during the consultation?",
    answer: "We'll focus on your business — your goals, your blockers, and the strategic options in front of you. I'll share honest, direct recommendations based on what I've seen work across multiple businesses."
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer: "The initial 20-minute discovery call is complimentary. It helps us both figure out if working together makes sense."
  },
  {
    question: "What kinds of businesses do you work with?",
    answer: "Primarily UK SMEs and scale-ups looking for growth strategy, marketing direction, or leadership consulting. I've worked across manufacturing, e-commerce, SaaS, and professional services."
  },
  {
    question: "What if we're not ready to start immediately?",
    answer: "No problem. Many of my best client relationships started as planning conversations. The consultation helps you get ready faster."
  }
];

export default function BookCallPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Free Consultation · No Commitment
            </p>
            <h1 className="mb-6">
              Let&apos;s Talk{' '}
              <span className="italic text-accent">Business Strategy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Book a complimentary consultation to explore how I can help you grow your business,
              sharpen your strategy, or navigate a critical decision.
            </p>
          </motion.div>

          {/* Form + Benefits grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Card className="p-8 border border-border rounded-none shadow-none">
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Schedule Your Consultation
                </h2>

                {/* Calendar placeholder */}
                <div className="bg-accent/5 border border-dashed border-accent/30 p-8 mb-6 text-center">
                  <p className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground mb-3">
                    Calendar Integration
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose from available time slots
                  </p>
                  <Button className="w-full rounded-none">
                    Select Time Slot
                  </Button>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Or send me a message</h3>
                  <Input placeholder="Your Name" className="rounded-none" />
                  <Input placeholder="Email Address" className="rounded-none" />
                  <Input placeholder="Company (optional)" className="rounded-none" />
                  <Textarea
                    placeholder="What are you working on? What's the challenge you're trying to solve?"
                    className="min-h-[120px] rounded-none"
                  />
                  <Button className="w-full rounded-none bg-secondary hover:bg-secondary/90">
                    Send Message
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  I respond within 24 hours.
                </p>
              </Card>
            </motion.div>

            {/* Benefits + Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-12"
            >
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">
                  What You&apos;ll Get
                </h2>
                <div className="divide-y divide-border border-t border-border">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 py-5"
                    >
                      <benefit.Icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">
                  The Process
                </h2>
                <div className="space-y-6">
                  {process.map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-foreground flex items-center justify-center font-bold text-sm font-stat flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">{step.title}</h3>
                          <span className="text-xs text-muted-foreground">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl mb-16"
          >
            <h2 className="mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Honest words from founders and business leaders I&apos;ve worked with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full rounded-none border border-border shadow-none">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent">{testimonial.company}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl mb-16"
          >
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Answers to what people usually ask before booking.
            </p>
          </motion.div>

          <div className="max-w-3xl space-y-0 divide-y divide-border border-t border-border">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="py-6"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50 mb-6">
              Ready When You Are
            </p>
            <h2 className="text-primary-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
              Every significant move starts with a clear conversation. Let&apos;s
              identify what&apos;s holding you back and build a path forward.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-12 py-6 text-base rounded-none font-semibold"
            >
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
