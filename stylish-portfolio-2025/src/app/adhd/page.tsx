'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const diagnosisJourney = [
  {
    stage: 'Pre-Diagnosis',
    title: 'The Undiagnosed Years',
    description: 'Feeling different, struggling with traditional structures, but excelling in high-energy, creative environments.',
    challenges: ['Difficulty with routine tasks', 'Hyperfocus on interests', 'Restlessness in meetings', 'Creative problem-solving strength'],
    insight: 'What I thought were personal failings were actually neurological differences.'
  },
  {
    stage: 'Recognition',
    title: 'The Lightbulb Moment',
    description: 'Learning about ADHD in adults and recognising the patterns in my own behaviour and thinking.',
    challenges: ['Research and self-reflection', 'Connecting past experiences', 'Understanding family patterns', 'Seeking professional assessment'],
    insight: 'Everything suddenly made sense - the cycling obsession, business ideas, and creative energy. The funk and lack of what I thought was motivation...'
  },
  {
    stage: 'Diagnosis',
    title: 'Official Assessment',
    description: 'Working with healthcare professionals to get a formal diagnosis and understanding of my ADHD profile.',
    challenges: ['Comprehensive assessment', 'Medical history review', 'Cognitive testing', 'Treatment options discussion'],
    insight: 'Having a name for my neurological differences was incredibly validating and empowering.'
  },
  {
    stage: 'Integration',
    title: 'Embracing the Advantage',
    description: 'Learning to work with my ADHD brain rather than against it, optimising for strengths.',
    challenges: ['Developing new strategies', 'Medication considerations', 'Lifestyle adjustments', 'Sharing with family/team'],
    insight: 'ADHD became my entrepreneurial superpower when I learned to harness it properly.'
  }
];

const adhdAdvantages = [
  {
    trait: 'Hyperfocus',
    description: 'Ability to dive deep into problems and work intensively for hours',
    businessApplication: 'Perfect for complex problem-solving, product development, and strategic planning sessions',
    icon: '🎯'
  },
  {
    trait: 'Pattern Recognition',
    description: 'Quickly identifying trends, connections, and opportunities others miss',
    businessApplication: 'Spotting market gaps, understanding customer needs, and predicting industry shifts',
    icon: '🧩'
  },
  {
    trait: 'Creative Problem-Solving',
    description: 'Non-linear thinking that leads to innovative solutions',
    businessApplication: 'Developing unique products, finding unconventional marketing approaches, and breakthrough strategies',
    icon: '💡'
  },
  {
    trait: 'High Energy & Drive',
    description: 'Natural enthusiasm and energy for projects and challenges',
    businessApplication: 'Managing multiple businesses, leading teams through change, and maintaining momentum',
    icon: '⚡'
  },
  {
    trait: 'Risk Tolerance',
    description: 'Comfortable with uncertainty and calculated risks',
    businessApplication: 'Launching new ventures, pivoting strategies, and exploring uncharted markets',
    icon: '🚀'
  },
  {
    trait: 'Urgency & Action',
    description: 'Preference for doing rather than endless planning',
    businessApplication: 'Rapid prototyping, quick market testing, and agile business development',
    icon: '🏃'
  }
];

const managementStrategies = [
  {
    category: 'Work Environment',
    strategies: [
      'Multiple monitors for information processing',
      'Standing desk for movement during calls',
      'Noise-cancelling headphones for focus',
      'Flexible work schedule around energy peaks'
    ]
  },
  {
    category: 'Task Management',
    strategies: [
      'Time-blocking for important deep work',
      'Breaking large projects into smaller tasks',
      'Using visual project management tools',
      'Setting artificial deadlines for urgency'
    ]
  },
  {
    category: 'Communication',
    strategies: [
      'Recording meetings for later review',
      'Taking notes on paper during discussions',
      'Following up important conversations in writing',
      'Using voice memos for quick idea capture'
    ]
  },
  {
    category: 'Energy Management',
    strategies: [
      'Scheduling demanding tasks during peak hours',
      'Taking regular movement breaks',
      'Alternating between high and low intensity work',
      'Using cycling for mental reset and clarity'
    ]
  }
];

const resources = [
  {
    category: 'Books & Learning',
    items: [
      { name: 'Driven to Distraction by Edward Hallowell', url: 'https://amzn.to/4dYAsOl' },
      { name: 'How to ADHD by Jessica McCabe', url: 'https://amzn.to/43GrLVx' },
      { name: 'Smart Moves by Carla Hannaford', url: 'https://amzn.to/45fKBnB' },
      { name: 'ADHD 2.0 by Edward Hallowell and John Ratey', url: 'https://amzn.to/43XwctI' }
    ]
  },
  {
    category: 'Organizations & Support',
    items: [
      { name: 'ADHD Foundation (UK)', url: 'https://www.adhdfoundation.org.uk/' },
      { name: 'Adult ADHD Support Groups', url: 'https://www.adhd.org.uk/' },
      { name: 'CHADD (Children and Adults with ADHD)', url: 'https://chadd.org/' },
      { name: 'Local ADHD meetup groups', url: 'https://www.meetup.com/topics/adhd/' }
    ]
  },
  {
    category: 'Tools & Apps',
    items: [
      { name: 'Forest app for focus sessions', url: 'https://forestapp.cc/' },
      { name: 'Todoist for task management', url: 'https://todoist.com/' },
      { name: 'Brain.fm for concentration music', url: 'https://brain.fm/' },
      { name: 'RescueTime for productivity tracking', url: 'https://www.rescuetime.com/' }
    ]
  },
  {
    category: 'Professional Support',
    items: [
      { name: 'ADHD-trained therapists', url: 'https://www.bacp.co.uk/' },
      { name: 'Executive function coaches', url: 'https://www.adhdcoaches.org/' },
      { name: 'ADHD-friendly psychiatrists', url: 'https://www.rcpsych.ac.uk/' },
      { name: 'Occupational therapists', url: 'https://www.rcot.co.uk/' }
    ]
  }
];

const myths = [
  {
    myth: 'ADHD is just lack of willpower',
    reality: 'ADHD is a neurological condition with real brain differences affecting executive function.'
  },
  {
    myth: 'Adults can\'t have ADHD',
    reality: 'Many adults are diagnosed later in life, especially those who developed coping mechanisms.'
  },
  {
    myth: 'ADHD means you can\'t focus',
    reality: 'ADHD brains can hyperfocus intensely on interesting or important tasks.'
  },
  {
    myth: 'Medication is the only treatment',
    reality: 'Lifestyle changes, therapy, and environmental modifications are equally important.'
  },
  {
    myth: 'ADHD is a disadvantage in business',
    reality: 'Many successful entrepreneurs have ADHD - it can be a significant advantage when managed well.'
  }
];

export default function ADHDPage() {
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
            <h1 className="mb-8">ADHD: My <span className="italic text-creative">Entrepreneurial Edge</span></h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Discovering ADHD later in life transformed my understanding of myself and unlocked
              my entrepreneurial potential. Here's my journey from confusion to clarity,
              and how neurodiversity became my business superpower.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Journey */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">The Diagnosis Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Like many adults, my ADHD went undiagnosed for years. Here's how recognition
              and understanding changed everything about how I approach business and life.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {diagnosisJourney.map((phase, index) => (
              <motion.div
                key={phase.stage}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <Card className="p-8 border-creative/20 bg-creative/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-4 py-2 rounded-full text-sm font-medium bg-creative text-creative-foreground">
                        {phase.stage}
                      </div>
                      <h3 className="text-2xl font-semibold">{phase.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Experiences:</h4>
                        <ul className="space-y-2">
                          {phase.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1 h-1 bg-creative rounded-full mt-2" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-creative">Key Insight:</h4>
                        <p className="text-sm text-muted-foreground italic">{phase.insight}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="w-4 h-4 rounded-full bg-creative flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADHD Advantages */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">The ADHD Entrepreneurial Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              ADHD traits that might seem challenging in traditional environments
              often become superpowers in entrepreneurship and business building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {adhdAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.trait}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-creative">{advantage.trait}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{advantage.description}</p>
                  <div className="bg-creative/10 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Business Application:</p>
                    <p className="text-sm text-muted-foreground">{advantage.businessApplication}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Strategies */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Management Strategies That Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Practical strategies I've developed to harness ADHD strengths while managing
              challenges in business and daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {managementStrategies.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-creative">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.strategies.map((strategy) => (
                      <li key={strategy} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-creative rounded-full mt-2" />
                        <span className="text-sm text-muted-foreground">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Reality */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Busting ADHD Myths</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Let's address some common misconceptions about ADHD that prevent people
              from seeking help or understanding their potential.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {myths.map((item, index) => (
              <motion.div
                key={item.myth}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-500">❌ Myth:</h4>
                      <p className="text-muted-foreground italic">{item.myth}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-500">✅ Reality:</h4>
                      <p className="text-muted-foreground">{item.reality}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-gradient-to-br from-creative/5 to-accent/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">ADHD Resources & Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Helpful resources for anyone exploring ADHD diagnosis or looking to better
              understand and manage their neurodiversity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-semibold mb-4 text-creative">{resource.category}</h3>
                  <ul className="space-y-2">
                    {resource.items.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-creative transition-colors duration-200 hover:underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-6">Ready to Explore Your Potential?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Whether you're exploring an ADHD diagnosis, looking to optimize your neurodiversity,
              or want to discuss how ADHD can be an entrepreneurial advantage, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 rounded-full bg-creative hover:bg-creative/90">
                Book ADHD Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-full border-creative text-creative hover:bg-creative hover:text-creative-foreground">
                Join ADHD Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
