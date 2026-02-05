'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LevelData, LocationData } from '@/lib/tutoring-data';

interface TutoringContactFormProps {
    level?: LevelData | null;
    location?: LocationData | null;
}

export default function TutoringContactForm({ level, location }: TutoringContactFormProps) {
    const levelTitle = level?.title || '';
    const cityName = location?.name || '';

    return (
        <section id="contact-form" className="section-padding bg-muted/20">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="mb-4">Book Your <span className="italic text-accent">Tutoring Session</span></h2>
                    <p className="text-xl text-muted-foreground">
                        Complete the form below to enquire about {levelTitle ? `${levelTitle} ` : ''}tutoring
                        {cityName ? ` in ${cityName}` : ''}. I'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl">
                        <form
                            name="tutoring-contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-6"
                        >
                            <input type="hidden" name="form-name" value="tutoring-contact" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                                    <Input id="name" name="name" placeholder="Enter your name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                                    <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                    <Input id="phone" name="phone" placeholder="Contact number" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                                    <Input id="subject" name="subject" defaultValue="Business Studies" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="level" className="text-sm font-medium">Level of Study *</label>
                                    <Input id="level" name="level" defaultValue={levelTitle} placeholder="e.g., GCSE, A-Level, Degree" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="location" className="text-sm font-medium">Location *</label>
                                    <Input id="location" name="location" defaultValue={cityName} placeholder="e.g., Nottingham, Online" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">How can I help you? *</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your goals, specific areas of difficulty, and preferred timing..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full rounded-full py-6 text-lg bg-secondary hover:bg-secondary/90 shadow-xl">
                                Submit Enquiry
                            </Button>

                            <div className="flex items-center justify-center gap-6 mt-6 pb-2 text-xs text-muted-foreground border-b border-border/50">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    <span>24-Hour Response</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    <span>Personal Attention</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                    <span>Expert Guidance</span>
                                </div>
                            </div>

                            <p className="text-[10px] text-center text-muted-foreground/60 mt-4 leading-relaxed">
                                By submitting this form, you agree to being contacted regarding your tutoring enquiry. Your data is handled securely and never shared with third parties for marketing purposes.
                            </p>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
