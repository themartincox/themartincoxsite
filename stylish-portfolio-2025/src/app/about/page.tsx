'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const journeyMilestones = [
  {
    period: "Early Career",
    title: "The Undiagnosed Years",
    subtitle: "Award-winning performance, restless spirit",
    description: "Multiple industry awards and recognition, but frequent job changes as I searched for the right fit. High performance coupled with an inexplicable restlessness that I couldn't quite understand.",
    achievements: ["Multiple industry awards", "Rapid career progression", "Diverse sector experience"],
    challenge: "Frequent job hopping due to undiagnosed ADHD",
    insight: "Excellence was achievable, but traditional structures felt constraining",
    icon: "🏆",
    color: "from-amber-500/20 to-orange-500/20",
    featured: false
  },
  {
    period: "2011-2012",
    title: "The Impossible Cycling Challenge",
    subtitle: "Land's End to John o' Groats and back in 10 days",
    description: "Decided to take up cycling with an 'impossible' goal: Land's End to John o' Groats and back to Land's End in 10 days. Everyone said it couldn't be done. I proved them wrong.",
    achievements: ["Completed 1,800+ miles in 10 days", "Achieved the 'impossible'", "Discovered ultra-endurance capability"],
    challenge: "Considered physically impossible by cycling community",
    insight: "When others say impossible, I hear opportunity",
    icon: "🚴",
    color: "from-success-500/20 to-emerald-500/20",
    featured: true
  },
  {
    period: "2012-2020",
    title: "European Cycling Adventures",
    subtitle: "Building memories and resilience across continents",
    description: "Multiple cycling expeditions across Europe, including a special father-son journey with my 9-year-old across Holland and Belgium. Each ride built mental resilience and family bonds.",
    achievements: ["Multiple European cycling expeditions", "Father-son adventure across Holland/Belgium", "Built mental resilience framework"],
    challenge: "Balancing adventure with family and business responsibilities",
    insight: "The best adventures are shared, and resilience is built one mile at a time",
    icon: "🌍",
    color: "from-blue-500/20 to-cyan-500/20",
    featured: false
  },
  {
    period: "2015-2020",
    title: "International Racing Circuit",
    subtitle: "Ireland, Taiwan, USA - testing limits globally",
    description: "Raced around Ireland, through Taiwan's mountains, and across America's diverse landscapes. Each race taught lessons about preparation, mental toughness, and performing under pressure.",
    achievements: ["Trans America racing completion", "Taiwan mountain racing", "Round Ireland racing", "International racing circuit"],
    challenge: "Competing against world-class ultra-endurance athletes",
    insight: "Global competition reveals universal principles of human performance",
    icon: "🌏",
    color: "from-purple-500/20 to-pink-500/20",
    featured: true
  },
  {
    period: "Business Evolution",
    title: "MBA & Global Consulting",
    subtitle: "From niche brands to global corporations",
    description: "Earned MBA while consulting with diverse clients - from niche local businesses to global corporations. Each engagement taught lessons about adaptability and strategic thinking.",
    achievements: ["MBA qualification", "Niche to global brand consulting", "Cross-sector expertise", "Strategic thinking development"],
    challenge: "Scaling expertise across vastly different business contexts",
    insight: "Business principles are universal, but application requires cultural intelligence",
    icon: "🎓",
    color: "from-indigo-500/20 to-violet-500/20",
    featured: false
  },
  {
    period: "Late 2023",
    title: "ADHD Diagnosis at 47",
    subtitle: "Everything suddenly made sense",
    description: "Finally received ADHD diagnosis at age 47. Suddenly, the award-winning performance, job hopping, cycling obsession, and entrepreneurial energy all made perfect sense.",
    achievements: ["Professional ADHD diagnosis", "Self-understanding breakthrough", "Reframed entire life narrative"],
    challenge: "Decades of not understanding my own brain",
    insight: "Late diagnosis isn't late - it's exactly when you need it to be",
    icon: "🧠",
    color: "from-creative/20 to-accent/20",
    featured: true
  },
  {
    period: "Present",
    title: "Teaching & Mentoring",
    subtitle: "Supporting leaders across three continents",
    description: "Teaching, tutoring, and mentoring students and business leaders across Europe, the US, and Middle East. Sharing hard-won lessons about performance, resilience, and authentic leadership.",
    achievements: ["Multi-continental mentoring", "Student and executive coaching", "Cross-cultural leadership development"],
    challenge: "Adapting teaching methods across diverse cultures and contexts",
    insight: "The best teachers are perpetual students",
    icon: "🎯",
    color: "from-emerald-500/20 to-teal-500/20",
    featured: false
  }
];

const coreInfluences = [
  {
    source: "Stephen Covey",
    principle: "Seek first to understand, then to be understood",
    application: "Every client relationship starts with deep listening and understanding their unique context",
    icon: "👂",
    link: "https://www.franklincovey.com/the-7-habits/"
  },
  {
    source: "Gary Vaynerchuk",
    principle: "Take action and show up",
    application: "Consistent execution beats perfect planning. Results come from doing, not theorising",
    icon: "⚡",
    link: "https://www.garyvaynerchuk.com/"
  },
  {
    source: "James Clear (Atomic Habits)",
    principle: "Systems over goals",
    application: "Building sustainable business processes that compound over time",
    icon: "🔄",
    link: "https://jamesclear.com/"
  },
  {
    source: "Charles Duhigg (Supercommunicators)",
    principle: "Connection through conversation",
    application: "Effective consulting requires genuine communication, not just expertise delivery",
    icon: "💬",
    link: "https://charlesduhigg.com/"
  },
  {
    source: "Byron Sharp (How Brands Grow)",
    principle: "Evidence-based marketing",
    application: "Data-driven strategies that focus on mental and physical availability",
    icon: "📊",
    link: "https://www.amazon.com/How-Brands-Grow-What-Marketers/dp/0195573560"
  }
];

const coreValues = [
  {
    value: "Purpose",
    description: "Every project, every ride, every decision is guided by meaningful purpose. Business isn't just about profit - it's about creating positive impact.",
    example: "Postino exists to democratise growth strategy for UK SMEs",
    icon: "🎯"
  },
  {
    value: "Empathy",
    description: "Seek first to understand. Whether it's a struggling SME or a fellow cyclist hitting the wall, empathy creates connection and breakthrough.",
    example: "ADHD diagnosis helped me better understand and support other neurodiverse entrepreneurs",
    icon: "❤️"
  },
  {
    value: "Performance",
    description: "Excellence isn't accidental. From Land's End to John o' Groats to building businesses, performance comes from preparation, persistence, and continuous improvement.",
    example: "180% average lead growth for Postino clients through systematic approach",
    icon: "🏆"
  },
  {
    value: "Authenticity",
    description: "Own your failures as much as your successes. Authenticity builds trust, and trust enables transformation.",
    example: "Openly sharing Abacus and 52x11 failures to help others avoid similar mistakes",
    icon: "✨"
  }
];

const personalStats = [
  { number: "1,800+", label: "Miles in 10 Days", description: "Land's End to John o' Groats challenge" },
  { number: "47", label: "Age at ADHD Diagnosis", description: "Late but life-changing" },
  { number: "3", label: "Continents Mentoring", description: "Europe, US, Middle East" },
  { number: "30+", label: "Years Learning", description: "From first job to present day" }
];

export default function JourneyPage() {
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
            <h1 className="mb-8">The <span className="italic text-accent">Journey</span></h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              From undiagnosed ADHD and job hopping to cycling impossible distances and building businesses.
              A story of continuous growth, authentic learning, and discovering that our perceived weaknesses
              can become our greatest strengths.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Milestones & Learnings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Each chapter brought challenges, achievements, and insights that shaped
              who I am today and how I approach business and life.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden ${milestone.featured ? 'border-accent/30 shadow-lg' : ''}`}>
                  <div className={`p-8 md:p-12 bg-gradient-to-br ${milestone.color} relative`}>
                    <div className="absolute inset-0 pattern-dots opacity-20" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                      {/* Timeline Marker */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-4xl">{milestone.icon}</div>
                          <div>
                            <div className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-2">
                              {milestone.period}
                            </div>
                            <h3 className="text-xl font-display font-semibold">{milestone.title}</h3>
                            <p className="text-sm text-muted-foreground">{milestone.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground mb-6 leading-relaxed">{milestone.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-success">Achievements</h4>
                            <ul className="space-y-2">
                              {milestone.achievements.map((achievement) => (
                                <li key={achievement} className="flex items-start gap-2 text-sm">
                                  <div className="w-1 h-1 bg-success rounded-full mt-2" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-amber-600">Challenge</h4>
                            <p className="text-sm text-muted-foreground mb-4">{milestone.challenge}</p>
                          </div>
                        </div>
                      </div>

                      {/* Key Insight */}
                      <div className="lg:col-span-1">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
                          <h4 className="font-semibold mb-3 text-creative">Key Insight</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">
                            "{milestone.insight}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Influences */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Influences & Learning</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Shaped as much by Stephen Covey's empathy as Gary Vee's action orientation.
              These thought leaders and their principles guide my approach to business and life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreInfluences.map((influence, index) => (
              <motion.div
                key={influence.source}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-md transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{influence.icon}</div>
                    <h3 className="font-semibold text-lg">
                      <a
                        href={influence.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors duration-200 hover:underline"
                      >
                        {influence.source}
                      </a>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-accent">Principle</h4>
                      <p className="text-sm text-muted-foreground italic">"{influence.principle}"</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-success">My Application</h4>
                      <p className="text-sm text-muted-foreground">{influence.application}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Purpose, empathy, performance, authenticity - these aren't just words on a wall.
              They're the principles that guide every decision, every project, every relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{value.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{value.value}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{value.description}</p>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Example:</span> {value.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Stats */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Journey by Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Some milestones are best captured in numbers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-white mb-6">The Journey Continues</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto text-pretty">
              Every challenge becomes learning. Every success creates opportunity to help others.
              The best chapters are still being written.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200"
              >
                Work With Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200 border-white text-white hover:bg-white hover:text-primary"
              >
                Explore My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
