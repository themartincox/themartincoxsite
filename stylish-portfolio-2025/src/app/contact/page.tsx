'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    description: 'Send me a message and I\'ll respond within 24 hours',
    value: 'hello@themartincox.co.uk',
    action: 'Send Email'
  },
  {
    icon: '💬',
    title: 'LinkedIn',
    description: 'Connect with me for professional networking',
    value: 'linkedin.com/in/martincox',
    action: 'Connect'
  },
  {
    icon: '🎵',
    title: 'TikTok',
    description: 'ADHD, personal insights, and cocker spaniel content',
    value: '@themartincox',
    action: 'Follow'
  },
  {
    icon: '📊',
    title: 'Postino',
    description: 'Business enquiries and marketing consultancy',
    value: 'www.postino.cc',
    action: 'Visit Postino'
  }
];

const projectTypes = [
  'Marketing Strategy & Consultancy',
  'Business Development',
  'Brand Strategy',
  'Digital Marketing',
  'ADHD Coaching & Mentoring',
  'Cycling Industry Projects',
  'E-commerce Development',
  'Other'
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM GMT' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM GMT' },
  { day: 'Sunday', hours: 'By appointment only' }
];

export default function ContactPage() {
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
            <h1 className="mb-8">Let's Start a <span className="italic text-accent">Conversation</span></h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Whether you have a specific project in mind, need creative guidance,
              or just want to explore possibilities, I'd love to hear from you.
              Every great collaboration begins with a simple conversation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
                <h2 className="text-2xl font-display font-semibold mb-6">Send a Message</h2>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company/Organization</label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    >
                      <option value="">When do you need this completed?</option>
                      <option value="asap">ASAP (Rush job)</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      placeholder="Tell me about your project, goals, challenges, and vision. The more details you provide, the better I can understand how to help you."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium mb-2">How did you hear about me?</label>
                    <Input
                      id="referralSource"
                      name="referralSource"
                      placeholder="Referral, search, social media, etc."
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full py-4 text-lg">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I'll review your message and respond within 24 hours with next steps.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Methods */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{method.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="text-sm font-medium text-accent">{method.value}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Office Hours</h3>
                <Card className="p-6">
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={schedule.day} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      For urgent projects outside office hours, please call or send a WhatsApp message.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Location</h3>
                <Card className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🇬🇧</div>
                    <h4 className="font-semibold mb-2">Nottingham, UK</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Working with clients across the UK and internationally
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Available for local meetings and consultations throughout the East Midlands
                    </div>
                  </div>
                </Card>
              </div>

              {/* Rush Project */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Rush Project?</h3>
                <Card className="p-6 bg-accent/5 border-accent/20">
                  <h3 className="font-semibold mb-2 text-accent">🚀 Need it urgently?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I offer expedited services for time-sensitive projects with rush timelines.
                  </p>
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    Discuss Rush Timeline
                  </Button>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Prefer a Different Approach?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Not ready to fill out a form? No problem. Here are other ways we can connect
              and start exploring your creative needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 rounded-full">
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-full">
                View My Work First
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
