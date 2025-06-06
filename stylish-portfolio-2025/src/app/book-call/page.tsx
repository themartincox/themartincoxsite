'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const benefits = [
  {
    icon: '🎯',
    title: 'Strategic Clarity',
    description: 'Get clear direction on your creative goals and project scope'
  },
  {
    icon: '💡',
    title: 'Expert Insights',
    description: 'Receive actionable recommendations based on industry best practices'
  },
  {
    icon: '⚡',
    title: 'Fast Results',
    description: 'Walk away with immediate next steps and timeline for your project'
  },
  {
    icon: '🤝',
    title: 'Perfect Fit',
    description: 'Ensure we\'re aligned on vision, process, and collaboration style'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We\'ll discuss your vision, challenges, and objectives in detail.',
    duration: '15-20 minutes'
  },
  {
    step: '02',
    title: 'Strategic Review',
    description: 'I\'ll analyze your needs and prepare a customized project proposal.',
    duration: '24-48 hours'
  },
  {
    step: '03',
    title: 'Project Kickoff',
    description: 'Once aligned, we begin bringing your vision to life.',
    duration: 'Project timeline varies'
  }
];

const testimonials = [
  {
    text: "Martin's strategic marketing approach helped us identify new growth opportunities. His ADHD perspective brought unique insights we hadn't considered.",
    author: "Sarah Wilson",
    role: "Founder",
    company: "Tech Startup"
  },
  {
    text: "Working with Martin through Postino was transformative. His blend of strategic thinking and entrepreneurial experience is exactly what we needed.",
    author: "James Patterson",
    role: "Business Owner",
    company: "Local SME"
  },
  {
    text: "Martin's consultation provided immediate clarity on our marketing direction. His cycling background brings a unique discipline to business strategy.",
    author: "Emma Clarke",
    role: "Marketing Director",
    company: "Growing Business"
  }
];

const faqs = [
  {
    question: "What happens during the consultation?",
    answer: "We'll discuss your project goals, timeline, budget, and creative vision. I'll share insights about your industry and provide initial strategic recommendations."
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer: "The initial 20-minute discovery call is complimentary. This helps us both determine if we're a good fit for collaboration."
  },
  {
    question: "How quickly can we start a project?",
    answer: "Project timelines vary based on scope and complexity. Most projects can begin within 1-2 weeks of finalizing the agreement."
  },
  {
    question: "What if we're not ready to start immediately?",
    answer: "No problem! I often work with clients who are in the planning stages. The consultation can help you prepare for when you're ready to move forward."
  }
];

export default function BookCallPage() {
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
            <h1 className="mb-8">Let's Discuss Your <span className="italic text-accent">Creative Vision</span></h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Book a complimentary consultation to explore how we can transform your ideas
              into compelling visual experiences that drive results and create lasting impact.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Immediate Value</span>
              </div>
            </div>
          </motion.div>

          {/* Main CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl">
                <h2 className="text-2xl font-display font-semibold mb-6">Schedule Your Consultation</h2>

                {/* Calendar Integration Placeholder */}
                <div className="bg-accent/10 border-2 border-dashed border-accent/30 rounded-lg p-8 mb-6 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="font-semibold mb-2">Calendar Integration</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose from available time slots that work with your schedule
                  </p>
                  <Button className="w-full rounded-full">
                    Select Time Slot
                  </Button>
                </div>

                {/* Contact Form Alternative */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-center mb-4">Or send me a message</h3>
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" />
                  <Input placeholder="Company/Organization (optional)" />
                  <Textarea
                    placeholder="Tell me about your project or creative challenge..."
                    className="min-h-[120px]"
                  />
                  <Button className="w-full rounded-full">
                    Send Message
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  I'll respond within 24 hours to schedule our conversation.
                </p>
              </Card>
            </motion.div>

            {/* Benefits & Process */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* What You'll Get */}
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">What You'll Get</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="text-2xl">{benefit.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* The Process */}
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">The Process</h2>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{step.title}</h3>
                          <span className="text-xs text-muted-foreground">{step.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">What Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it—hear from clients who have transformed
              their creative vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Still have questions? Here are answers to common inquiries about
              the consultation process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Have a different question? Feel free to reach out directly.
            </p>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Contact Me
            </Button>
          </motion.div>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">Ready to Transform Your Vision?</h2>
            <p className="text-xl text-white/80 mb-8 text-pretty">
              Every great project starts with a conversation. Let's discuss your creative
              challenges and explore how we can create something extraordinary together.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200"
            >
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
