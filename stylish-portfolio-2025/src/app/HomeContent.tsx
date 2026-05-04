"use client";

import { KineticMarquee } from "@/components/KineticMarquee";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrambleText } from "@/components/ScrambleText";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Dumbbell,
  Factory,
  type LucideIcon,
  Package,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

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

const marqueeItems1 = [
  "Oakley",
  "Sony",
  "Jaguar Land Rover",
  "Ericsson",
  "Thales",
  "Ikano",
  "Genie Lifting",
  "Marketing Strategy",
  "Product Innovation",
  "E-commerce",
];

const marqueeItems2 = [
  "4,200 km",
  "Trans America",
  "Ultra Distance",
  "47 Days Riding",
  "Hyperfocus",
  "Pattern Recognition",
  "Goal Setting",
  "Resilience",
  "ADHD Advocate",
  "Serial Entrepreneur",
];

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };

const glowBarVariants = {
  idle: { scaleY: 0 },
  hover: {
    scaleY: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

export default function HomeContent() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-32">
        <div className="absolute inset-0 pattern-grid" />

        <div className="container relative z-10">
          <motion.p
            className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
          >
            Serial Entrepreneur · Ultra-Distance Cyclist · ADHD Advocate ·
            Nottingham, UK
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <div className="text-[clamp(4.5rem,11vw,9.5rem)] leading-none font-extrabold tracking-tight font-display">
              <ScrambleText text="Martin" delay={400} />
            </div>
            <div className="text-[clamp(4.5rem,11vw,9.5rem)] leading-none font-extrabold tracking-tight font-display">
              <ScrambleText text="Cox" delay={600} className="text-secondary" />
              <span className="text-accent">.</span>
            </div>
          </motion.div>

          <motion.div
            className="h-px bg-foreground/20 mt-8 mb-10"
            style={{ transformOrigin: "0 50%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ...spring, delay: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-start max-w-5xl">
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.65 }}
            >
              Adventure cyclist and serial entrepreneur. From 4,200 km Trans
              America races to building £multi-million businesses. Turning ADHD
              into competitive advantage since 2007.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.75 }}
            >
              <MagneticButton className="w-full">
                <Button
                  asChild
                  size="lg"
                  className="px-10 py-6 text-base rounded-none font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full"
                >
                  <Link href="/about">My Story</Link>
                </Button>
              </MagneticButton>
              <MagneticButton className="w-full">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-10 py-6 text-base rounded-none font-semibold border-foreground/40 hover:bg-foreground hover:text-background w-full"
                >
                  <Link href="/book-call">Work With Me</Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 border border-foreground/10 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.9 }}
          >
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 md:p-10 ${index % 2 === 0 ? "border-r border-foreground/10" : ""} ${index < 2 ? "border-b border-foreground/10" : ""}`}
              >
                <div className="stat-display-xl text-secondary leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE BAND #1 ── */}
      <div className="border-y border-border">
        <KineticMarquee items={marqueeItems1} speed={45} className="py-3" />
      </div>

      {/* ── BUSINESS PORTFOLIO ── */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Building Portfolio
            </p>
            <h2 className="max-w-2xl">
              Three Businesses.{" "}
              <span className="text-secondary">Real Problems.</span> Zero
              Excuses.
            </h2>
          </motion.div>

          <div className="divide-y divide-border border-t border-border">
            {businessPortfolio.map((biz, index) => (
              <motion.div
                key={biz.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={biz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="idle"
                  whileHover="hover"
                  className="group relative flex flex-col md:flex-row md:items-center gap-6 py-10 pl-6 block"
                >
                  <motion.div
                    variants={glowBarVariants}
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary origin-bottom"
                  />

                  <div className="font-stat text-[3.5rem] leading-none text-muted-foreground/30 group-hover:text-secondary transition-colors duration-300 w-20 flex-shrink-0">
                    {biz.num}
                  </div>

                  <div className="hidden md:flex w-12 h-12 items-center justify-center border border-border group-hover:border-secondary group-hover:text-secondary transition-colors duration-300 flex-shrink-0">
                    <biz.Icon className="w-5 h-5" />
                  </div>

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

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 border border-accent/20">
                      {biz.metric}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE BAND #2 ── */}
      <div className="border-b border-border">
        <KineticMarquee
          items={marqueeItems2}
          speed={60}
          reverse
          className="py-3"
        />
      </div>

      {/* ── ADHD SECTION ── */}
      <section className="section-padding border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={spring}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Neurodiversity
              </p>

              <div className="flex items-end gap-6 mb-8">
                <div
                  className="font-stat leading-none text-secondary"
                  style={{ fontSize: "clamp(6rem, 18vw, 13rem)" }}
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
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Diagnosed at 47. What many see as a challenge became my greatest
                business asset — hyperfocus, pattern recognition, the ability to
                see opportunities others miss.
              </p>

              <MagneticButton>
                <Button
                  asChild
                  className="rounded-none px-8 py-5 bg-creative hover:bg-creative/90 text-white"
                >
                  <Link href="/adhd">Neurodiversity in Business</Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.15 }}
              viewport={{ once: true }}
              className="divide-y divide-border border-t border-b border-border mt-4 lg:mt-20"
            >
              {adhdTraits.map((item) => (
                <div
                  key={item.trait}
                  className="group py-6 pl-4 border-l-2 border-creative/20 hover:border-creative transition-colors duration-300"
                >
                  <p className="font-semibold text-creative mb-1 group-hover:text-creative">
                    {item.trait}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FROM ROAD TO BOARDROOM ── */}
      <section className="section-padding border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4">
              Philosophy
            </p>
            <h2 className="mb-4">From Road to Boardroom</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The discipline, goal-setting, and performance optimisation from
              ultra-endurance cycling translate directly to building and scaling
              businesses.
            </p>
          </motion.div>

          <div className="border-t border-border">
            {roadToBoardroom.map((item, index) => (
              <motion.div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr_2fr] border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="py-8 md:py-12 pr-8 flex items-center">
                  <span className="font-stat text-[clamp(4rem,7vw,6rem)] leading-none text-secondary">
                    0{index + 1}
                  </span>
                </div>
                <div className="py-8 md:py-12 md:px-12 md:border-x border-border flex items-center">
                  <h3 className="text-2xl md:text-3xl font-display font-bold">
                    {item.title}
                  </h3>
                </div>
                <div className="pb-8 md:py-12 md:pl-12 flex items-center">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="section-padding bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="w-12 h-[2px] bg-secondary mb-8" />
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Next Move
            </p>
            <h2 className="mb-6">
              Got a problem{" "}
              <span className="text-secondary">worth solving?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Three businesses built. 4,200 km raced. One diagnosis that
              reframed everything. If you want strategy from someone who&apos;s
              actually done it — 60 minutes is enough to change your trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="px-12 py-6 text-base rounded-none font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Link href="/book-call">Book a Consultation</Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-12 py-6 text-base rounded-none font-semibold border-foreground/30 hover:bg-foreground hover:text-background"
                >
                  <Link href="/portfolio">Explore My Work</Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
