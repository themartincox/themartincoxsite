'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin, Globe, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Tutoring', href: '/tutoring' },
      { name: 'Book a Call', href: '/book-call' },
      { name: 'Contact', href: '/contact' },
    ],
    explore: [
      { name: 'About', href: '/about' },
      { name: 'Cycling', href: '/cycling' },
      { name: 'ADHD', href: '/adhd' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/themartincox', Icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/themartincox', Icon: Instagram },
    { name: 'Twitter / X', href: 'https://x.com/themartincox', Icon: Twitter },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <section className="py-16 border-b border-white/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Get the Newsletter
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto text-pretty">
              Business strategy, ADHD insights, cycling adventures, and entrepreneurship lessons — delivered once or twice a month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
              />
              <Button
                variant="secondary"
                className="rounded-full px-8 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-white/60 mt-4">
              No spam, unsubscribe anytime. Usually 1–2 emails per month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Martin<span className="text-secondary">Cox</span><span className="text-accent">.</span>
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Serial entrepreneur, ultra-distance cyclist, and ADHD advocate. Building £multi-million businesses and transforming neurodiversity into entrepreneurial advantage. Based in Nottingham, UK.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:martin@postino.cc" className="hover:text-white transition-colors duration-200">
                    martin@postino.cc
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 shrink-0" />
                  <span>themartincox.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Nottingham, UK</span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Explore Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white hover:scale-110 transition-all duration-200"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="text-sm text-white/60 text-center sm:text-right">
              <p>© {currentYear} Martin Cox. All rights reserved.</p>
              <p className="mt-1">
                Website delivered by{' '}
                <a
                  href="https://www.postino.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Postino
                </a>
                , Nottingham, UK
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-accent opacity-60" />
    </footer>
  );
};

export default Footer;
