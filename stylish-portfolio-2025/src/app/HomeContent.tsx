"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  BarChart3,
  Package,
  Factory,
  Target,
  Zap,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

interface Business {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  Icon: LucideIcon;
  url: string;
}

const businessPortfolio: Business[] = [
  {
    num: "01",
    title: "Postino",
    subtitle: "Marketing & Strategy Consultancy",
    description:
      "Empowering UK SMEs with data-driven marketing solutions that compound over time.",
    metric: "3× Traffic Growth",
    Icon: BarChart3,
    url: "https://www.postino.cc",
  },
  {
    num: "02",
    title: "Milk Bottle Tops",
    subtitle: "Product Innovation & E-commerce",
    description:
      "Reviving nostalgic products with modern sustainability — 30 years and still going.",
    metric: "3M+ Sold Since '93",
    Icon: Package,
    url: "https://www.milkbottletops.co.uk",
  },
  {
    num: "03",
    title: "Glazing Supplies Direct",
    subtitle: "Manufacturing & B2B Excellence",
    description:
      "UK-made glazing solutions trusted by 8,000+ trade professionals.",
    metric: "£0 → £10k/wk in 90 days",
    Icon: Factory,
    url: "https://www.glazingsuppliesdirect.com",
  },
];

const heroStats = [
  { value: "03", label: "Businesses Built" },
  { value: "£3M+", label: "Revenue Generated" },
  { value: "4,200", label: "km Across America" },
  { value: "20+", label: "Years Experience" },
];

const adhdTraits = [
  {
    trait: "Hyperfocus",
    benefit: "Deep work on critical business challenges",
  },
  {
    trait: "Pattern Recognition",
    benefit: "Spotting market gaps before they're obvious",
  },
  {
    trait: "Creative Problem-Solving",
    benefit: "Innovative routes through impossible problems",
  },
  {
    trait: "High Energy",
    benefit: "Running multiple businesses simultaneously",
  },
];

const roadToBoardroom = [
  {
    Icon: Target,
    title: "Goal Setting",
    description:
      "Race strategy mapped to board metrics. Clear objectives, measurable outcomes.",
  },
  {
    Icon: Zap,
    title: "Performance",
    description:
      "Continuous optimisation, marginal gains, data-driven iteration.",
  },
  {
    Icon: Dumbbell,
    title: "Resilience",
    description:
      "4,200 km teaches you to sit with discomfort until you break through.",
  },
];

const brands = [
  "Oakley",
  "Sony",
  "Jaguar Land Rover",
  "Ericsson",
  "Thales",
  "Ikano",
  "Genie Lifting",
];

export default function HomeContent() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32">
        <div className="absolute inset-0 pattern-grid" />

        <div className="container relative z-10">
          {/* Tagline */}
          <motion.p
            className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Serial Entrepreneur · Ultra-Distance Cyclist · ADHD Advocate ·
            Nottingham, UK
          </motion.p>

          {/* Name — Massive Syne */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="text-[clamp(4.5rem,11vw,9.5rem)] leading-none font-extrabold tracking-tight font-display">
              Martin
            </div>
            <div className="text-[clamp(4.5rem,11vw,9.5rem)] leading-none font-extrabold tracking-tight font-display">
              <span className="text-secondary">Cox</span>
              <span className="text-accent">.</span>
            </div>
          </motion.div>

          {/* Animated rule */}
          <motion.div
            className="h-px bg-foreground mt-8 mb-10"
            style={{ transformOrigin: "0 50%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />

          {/* Description + CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl">
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              Adventure cyclist and serial entrepreneur. From 4,200 km Trans
              America races to building £multi-million businesses. Turning ADHD
              into competitive advantage since 2007.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Button
                asChild
                size="lg"
                className="px-10 py-6 text-base rounded-none font-semibold bg-secondary hover:bg-secondary/90"
              >
                <Link href="/about">My Story</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-10 py-6 text-base rounded-none font-semibold border-foreground hover:bg-foreground hover:text-background"
              >
                <Link href="/book-call">Work With Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-foreground/20 mt-16 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`pr-8 ${index > 0 ? "pl-8 border-l border-foreground/20" : ""}`}
              >
                <div className="stat-display text-foreground">{stat.value}</div>
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BUSINESS PORTFOLIO ── */}
      <section className="section-padding border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="mb-4">Building Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Three distinct businesses, each solving a real problem. Built from
              zero, scaled with intent.
            </p>
          </motion.div>

          <div className="divide-y divide-border border-t border-border">
            {businessPortfolio.map((biz, index) => (
              <motion.a
                key={biz.title}
                href={biz.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center gap-6 py-10 hover:border-secondary transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Number */}
                <div className="font-stat text-[3.5rem] leading-none text-muted-foreground/40 group-hover:text-secondary transition-colors duration-300 w-20 flex-shrink-0">
                  {biz.num}
                </div>

                {/* Icon */}
                <div className="hidden md:flex w-12 h-12 items-center justify-center border border-border group-hover:border-secondary group-hover:text-secondary transition-colors duration-300 flex-shrink-0">
                  <biz.Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-secondary transition-colors duration-300">
                      {biz.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {biz.subtitle}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {biz.description}
                  </p>
                </div>

                {/* Metric + arrow */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 border border-accent/20">
                    {biz.metric}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS STRIP ── */}
      <section className="py-10 border-y border-border bg-muted/20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Brands I&apos;ve worked with
            </p>
            <div className="flex flex-wrap items-center gap-8 opacity-50">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-sm font-semibold text-foreground"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADHD SECTION ── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: editorial display */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Neurodiversity
              </p>
              <div className="flex items-end gap-6 mb-8">
                <div
                  className="font-stat leading-none text-creative"
                  style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
                >
                  47
                </div>
                <div className="pb-3">
                  <Brain className="w-10 h-10 text-creative mb-2" />
                  <p className="text-sm text-muted-foreground leading-snug">
                    Age diagnosed.
                    <br />
                    Superpower unlocked.
                  </p>
                </div>
              </div>

              <h2 className="mb-4">
                ADHD:{" "}
                <span className="text-creative">My Entrepreneurial Edge</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Diagnosed at 47. What many see as a challenge became my greatest
                business asset — hyperfocus, pattern recognition, the ability to
                see opportunities others miss.
              </p>

              <Button
                asChild
                className="rounded-none px-8 py-5 bg-creative hover:bg-creative/90 text-white"
              >
                <Link href="/adhd">Neurodiversity in Business</Link>
              </Button>
            </motion.div>

            {/* Right: trait list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-0 divide-y divide-border border-t border-b border-border mt-4 lg:mt-16"
            >
              {adhdTraits.map((item) => (
                <div
                  key={item.trait}
                  className="py-6 pl-4 border-l-2 border-creative/30 hover:border-creative transition-colors duration-300"
                >
                  <p className="font-semibold text-creative mb-1">
                    {item.trait}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.benefit}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FROM ROAD TO BOARDROOM ── */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-secondary-foreground/60 mb-4">
              Philosophy
            </p>
            <h2 className="text-secondary-foreground mb-4">
              From Road to Boardroom
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed">
              The discipline, goal-setting, and performance optimisation from
              ultra-endurance cycling translate directly to building and scaling
              businesses.
            </p>
          </motion.div>

          <div className="divide-y divide-secondary-foreground/20 border-t border-secondary-foreground/20">
            {roadToBoardroom.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="flex gap-8 py-10 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-stat text-[2.5rem] leading-none text-secondary-foreground/30 w-14 flex-shrink-0">
                  0{index + 1}
                </div>
                <div className="flex items-center gap-4 mr-6 flex-shrink-0">
                  <skill.Icon className="w-6 h-6 text-secondary-foreground/70" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-secondary-foreground/70 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50 mb-6">
              Let&apos;s Build Something
            </p>
            <h2 className="text-primary-foreground mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
              Whether you need business strategy, want to understand the ADHD
              advantage, or are curious about my journey — let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-12 py-6 text-base rounded-none font-semibold"
              >
                <Link href="/book-call">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-12 py-6 text-base rounded-none font-semibold border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/portfolio">Explore My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
