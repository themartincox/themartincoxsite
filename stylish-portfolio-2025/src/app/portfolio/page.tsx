'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const myFirms = [
  {
    title: "Postino",
    subtitle: "Marketing & Strategy Consultancy",
    period: "2018 - Present",
    description: "Building a consultancy that helps UK SMEs navigate growth challenges with data-driven marketing and strategic positioning.",
    why: "Recognised the gap between big agency expertise and SME budgets. Wanted to create accessible, results-focused consultancy.",
    lessons: [
      "Client education is as important as delivery",
      "Scalable processes enable quality at volume",
      "ADHD hyperfocus becomes a superpower in problem-solving"
    ],
    results: "40+ SMEs supported, average 180% growth in qualified leads",
    tags: ["Marketing", "Strategy", "Consulting", "Leadership"],
    color: "from-secondary/20 to-accent/20",
    icon: "📊",
    featured: true
  },
  {
    title: "Milk Bottle Tops",
    subtitle: "Product Innovation & E-commerce",
    period: "1993 - Present",
    description: "Reviving nostalgic products with modern sustainability focus. From childhood memory to thriving business spanning three decades.",
    why: "Spotted opportunity in nostalgia marketing before it was mainstream. Believed in the power of emotional connection to products.",
    lessons: [
      "Long-term thinking trumps quick wins",
      "Emotional branding creates lasting customer relationships",
      "Simple products can have complex supply chains"
    ],
    results: "3M+ products sold, consistent profitability across 30+ years",
    tags: ["E-commerce", "Product", "Brand", "Sustainability"],
    color: "from-success/20 to-accent/20",
    icon: "🥛",
    featured: false
  },
  {
    title: "Glazing Supplies Direct",
    subtitle: "B2B Manufacturing & Distribution",
    period: "2015 - Present",
    description: "UK-made glazing solutions serving 8,000+ professionals. Building trust in a traditional industry through quality and reliability.",
    why: "Saw opportunity to modernise a traditional industry with digital-first approach and superior customer service.",
    lessons: [
      "B2B relationships require different nurturing than B2C",
      "Quality reputation takes years to build, seconds to damage",
      "Industry expertise matters more than flashy marketing"
    ],
    results: "£0-£10k/week in 90 days, 8,000+ professional customers",
    tags: ["B2B", "Manufacturing", "Digital Transformation"],
    color: "from-creative/20 to-secondary/20",
    icon: "🏭",
    featured: false
  }
];

const clientWork = [
  {
    name: "Girovac",
    type: "Industrial Equipment",
    challenge: "Brand positioning and digital presence for specialist vacuum equipment",
    solution: "Developed technical content strategy and B2B marketing framework",
    result: "45% increase in qualified leads from technical decision-makers",
    tags: ["B2B", "Marketing", "Brand"],
    period: "2019-2021"
  },
  {
    name: "Spengle",
    type: "Manufacturing Technology",
    challenge: "Market entry strategy for innovative manufacturing solutions",
    solution: "Go-to-market strategy, competitor analysis, and positioning framework",
    result: "Successful market entry with 3 key partnerships established",
    tags: ["Strategy", "Market Entry", "B2B"],
    period: "2020-2021"
  },
  {
    name: "Scatta'",
    type: "Creative Agency",
    challenge: "Business development and growth strategy for boutique creative agency",
    solution: "Client acquisition framework and service productisation",
    result: "40% revenue growth, streamlined service delivery",
    tags: ["Consulting", "Growth", "Creative"],
    period: "2018-2019"
  },
  {
    name: "US PR Agency",
    type: "Public Relations",
    challenge: "Digital transformation and process automation for established PR firm",
    solution: "Workflow automation, CRM implementation, and digital strategy",
    result: "60% efficiency improvement, expanded service capabilities",
    tags: ["Digital Transformation", "Automation", "Process"],
    period: "2020-2022"
  },
  {
    name: "UK MedTech",
    type: "Healthcare Technology",
    challenge: "Regulatory compliance marketing and B2B positioning",
    solution: "Compliant content strategy and stakeholder engagement framework",
    result: "Successful product launch, 200% increase in industry recognition",
    tags: ["Healthcare", "Compliance", "B2B", "Strategy"],
    period: "2021-2022"
  },
  {
    name: "UK Financial Consulting",
    type: "Professional Services",
    challenge: "Brand differentiation in crowded financial advisory market",
    solution: "Unique positioning strategy and thought leadership programme",
    result: "Premium pricing achieved, 25% increase in high-value clients",
    tags: ["Financial", "Brand", "Premium Positioning"],
    period: "2019-2020"
  },
  {
    name: "UK Manufacturer",
    type: "Industrial Manufacturing",
    challenge: "Digital modernisation and lead generation for traditional manufacturer",
    solution: "Digital strategy, website rebuild, and inbound marketing system",
    result: "300% increase in online inquiries, reduced sales cycle",
    tags: ["Manufacturing", "Digital", "Lead Generation"],
    period: "2020-2021"
  },
  {
    name: "Sunshine Pizza Oven",
    type: "Consumer Products",
    challenge: "E-commerce growth and brand positioning for artisan pizza ovens",
    solution: "Content marketing strategy and conversion optimisation",
    result: "150% increase in online sales, improved customer retention",
    tags: ["E-commerce", "Content", "Conversion"],
    period: "2018-2019"
  }
];

const learningsFromFailures = [
  {
    name: "Abacus Consulting",
    period: "2016-2017",
    challenge: "Ambitious consulting platform attempting to democratise business advice",
    whatWentWrong: [
      "Tried to solve too many problems at once",
      "Underestimated the complexity of matchmaking advisors to businesses",
      "Built solution before fully understanding the market"
    ],
    lessonsLearned: [
      "Focus beats breadth every time",
      "Market research isn't the same as market understanding",
      "Technical solutions need business model validation first"
    ],
    howItMadeMeBetter: "Now I validate every assumption before building. Led to Postino's focused, proven approach.",
    tags: ["Strategy", "Market Research", "Product Development"]
  },
  {
    name: "52x11 Training",
    period: "2017-2018",
    challenge: "Cycling training platform combining performance data with coaching",
    whatWentWrong: [
      "Overestimated demand for premium cycling coaching",
      "Technology complexity exceeded budget and timeline",
      "Personal passion didn't translate to market demand"
    ],
    lessonsLearned: [
      "Passion projects need market validation like any other business",
      "MVP should be genuinely minimal and viable",
      "User acquisition is often harder than product development"
    ],
    howItMadeMeBetter: "Developed rigorous validation processes. Now use lean methodology for all new ventures.",
    tags: ["Product", "Market Validation", "Lean Startup"]
  }
];

const coreStrengths = [
  {
    strength: "Growth-Oriented Mindset",
    description: "Every failure becomes data. Every success gets systematised. Continuous improvement isn't just business practice—it's personal philosophy.",
    icon: "📈"
  },
  {
    strength: "Results-Driven Approach",
    description: "Metrics matter. Whether it's 180% lead growth or £0-£10k/week revenue, I focus on outcomes that move the business forward.",
    icon: "🎯"
  },
  {
    strength: "Cross-Industry Experience",
    description: "From MedTech to Manufacturing, Financial Services to Creative Agencies. Pattern recognition across sectors reveals universal growth principles.",
    icon: "🔄"
  },
  {
    strength: "ADHD-Powered Problem Solving",
    description: "Hyperfocus meets pattern recognition. Complex business challenges become puzzles to solve, often revealing unconventional solutions.",
    icon: "🧠"
  }
];

const workTypes = [
  { name: "All Projects", count: 15, active: true },
  { name: "Marketing", count: 8 },
  { name: "Strategy", count: 12 },
  { name: "Consulting", count: 10 },
  { name: "B2B", count: 7 },
  { name: "Digital Transformation", count: 4 },
  { name: "Brand", count: 6 },
  { name: "Growth", count: 5 },
  { name: "E-commerce", count: 3 }
];

export default function BusinessPortfolioPage() {
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
            <h1 className="mb-8">Business Portfolio & <span className="italic text-accent">Learnings</span></h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Three decades of building businesses, serving clients, and learning from both
              spectacular successes and valuable failures. Here's the authentic story of growth,
              results, and why experience matters in business strategy.
            </p>
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {workTypes.map((type, index) => (
              <motion.button
                key={type.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${
                  type.active
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'border-border text-muted-foreground hover:text-foreground hover:border-accent'
                }`}
              >
                {type.name} ({type.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Firms Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">My Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Three distinct ventures, each born from different motivations and teaching unique lessons
              about entrepreneurship, persistence, and market understanding.
            </p>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {myFirms.map((firm, index) => (
              <motion.div
                key={firm.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden ${firm.featured ? 'border-accent/30' : ''}`}>
                  <div className={`p-8 md:p-12 bg-gradient-to-br ${firm.color} relative`}>
                    <div className="absolute inset-0 pattern-dots opacity-20" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-4xl">{firm.icon}</div>
                          <div>
                            <h3 className="text-2xl font-display font-semibold">{firm.title}</h3>
                            <p className="text-accent font-medium">{firm.subtitle}</p>
                            <p className="text-sm text-muted-foreground">{firm.period}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{firm.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-accent">Why I Built This</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{firm.why}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 text-success">Key Results</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{firm.results}</p>
                          </div>
                        </div>
                      </div>

                      {/* Lessons Learned */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h4 className="font-semibold mb-4 text-creative">Lessons Learned</h4>
                        <ul className="space-y-3">
                          {firm.lessons.map((lesson) => (
                            <li key={lesson} className="flex items-start gap-2 text-sm">
                              <div className="w-1 h-1 bg-creative rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{lesson}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-white/20">
                          <div className="flex flex-wrap gap-2">
                            {firm.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-white/20 text-foreground px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
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

      {/* Client Work Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From industrial equipment to creative agencies, each client brought unique challenges
              and opportunities for growth. Here's how we delivered results together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {clientWork.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{client.name}</h3>
                    <span className="text-xs text-muted-foreground">{client.period}</span>
                  </div>

                  <p className="text-sm text-accent font-medium mb-4">{client.type}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{client.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Solution</h4>
                      <p className="text-sm text-muted-foreground">{client.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1 text-success">Result</h4>
                      <p className="text-sm text-muted-foreground">{client.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning from Failures Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Learning from <span className="text-red-500">Failures</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Not everything succeeded. Here are two ventures that didn't work out as planned,
              what went wrong, and how these experiences made me a better entrepreneur and consultant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {learningsFromFailures.map((failure, index) => (
              <motion.div
                key={failure.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-red-200 bg-gradient-to-br from-red-50/50 to-orange-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">⚠️</div>
                    <div>
                      <h3 className="text-xl font-semibold">{failure.name}</h3>
                      <p className="text-sm text-muted-foreground">{failure.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{failure.challenge}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">What Went Wrong</h4>
                      <ul className="space-y-2">
                        {failure.whatWentWrong.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm">
                            <span className="text-red-500 mt-1">×</span>
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-amber-600">Lessons Learned</h4>
                      <ul className="space-y-2">
                        {failure.lessonsLearned.map((lesson) => (
                          <li key={lesson} className="flex items-start gap-2 text-sm">
                            <span className="text-amber-500 mt-1">→</span>
                            <span className="text-muted-foreground">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">How It Made Me Better</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{failure.howItMadeMeBetter}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-red-200">
                    <div className="flex flex-wrap gap-2">
                      {failure.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Why Work With Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Three decades of building, failing, learning, and succeeding have crystallised
              into these core strengths that I bring to every client engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={strength.strength}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{strength.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{strength.strength}</h3>
                      <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </Card>
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
            <h2 className="text-white mb-6">Ready to Apply These Lessons to Your Business?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto text-pretty">
              Three decades of experience, honest about failures, obsessed with results.
              Let's discuss how these hard-won insights can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200"
              >
                Book Strategy Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-6 text-lg rounded-full font-medium hover:scale-105 transition-transform duration-200 border-white text-white hover:bg-white hover:text-primary"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
