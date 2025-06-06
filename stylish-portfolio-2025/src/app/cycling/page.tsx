'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const raceAchievements = [
  {
    year: '2010',
    race: 'Trans America Bike Race',
    distance: '4,200km',
    achievement: 'Completed',
    description: 'Coast-to-coast across America, one of the world\'s toughest self-supported ultra-distance races.',
    highlight: true
  },
  {
    year: '2012',
    race: 'Race Across America (RAAM)',
    distance: '4,800km',
    achievement: 'Top 10 Finish',
    description: 'Non-stop race from west to east coast, testing mental and physical endurance to the limit.',
    highlight: true
  },
  {
    year: '2014',
    race: 'Transcontinental Race',
    distance: '4,000km',
    achievement: 'Completed',
    description: 'Self-supported race across Europe, navigating through multiple countries and challenging terrain.',
    highlight: false
  },
  {
    year: '2016',
    race: 'Tour Divide',
    distance: '4,400km',
    achievement: 'Finished',
    description: 'Mountain bike race following the Continental Divide from Canada to Mexico.',
    highlight: false
  }
];

const cyclingLessons = [
  {
    icon: '🎯',
    title: 'Goal Setting',
    lesson: 'Breaking massive challenges into manageable stages',
    business: 'Applied to building businesses step-by-step with clear milestones'
  },
  {
    icon: '💪',
    title: 'Mental Resilience',
    lesson: 'Pushing through when everything says quit',
    business: 'Persevering through business setbacks and market challenges'
  },
  {
    icon: '📊',
    title: 'Resource Management',
    lesson: 'Optimising energy, nutrition, and equipment efficiency',
    business: 'Managing cash flow, team resources, and operational efficiency'
  },
  {
    icon: '🗺️',
    title: 'Strategic Planning',
    lesson: 'Route planning, weather analysis, and risk assessment',
    business: 'Market analysis, competitive strategy, and business planning'
  },
  {
    icon: '⚡',
    title: 'Performance Under Pressure',
    lesson: 'Making critical decisions when exhausted and stressed',
    business: 'Leading teams and making tough calls during business crises'
  },
  {
    icon: '🤝',
    title: 'Community & Support',
    lesson: 'Building relationships within the ultra-cycling community',
    business: 'Networking, partnerships, and building strong business relationships'
  }
];

const equipmentSpecs = [
  { item: 'Bike', spec: 'Custom titanium endurance frame' },
  { item: 'Wheels', spec: 'Lightweight carbon with puncture-resistant tires' },
  { item: 'Navigation', spec: 'GPS with backup paper maps' },
  { item: 'Nutrition', spec: 'Carefully calculated calorie and electrolyte strategy' },
  { item: 'Sleep', spec: 'Minimal gear for 2-3 hour power naps' },
  { item: 'Weather', spec: 'Layered system for all conditions' }
];

const trainingPhilosophy = [
  {
    principle: 'Consistency Over Intensity',
    description: 'Regular, sustainable training builds the aerobic base needed for ultra-distance events.'
  },
  {
    principle: 'Mental Training',
    description: 'Practicing decision-making under fatigue and developing psychological resilience.'
  },
  {
    principle: 'Adaptation & Recovery',
    description: 'Listening to the body and allowing proper recovery to prevent burnout and injury.'
  },
  {
    principle: 'Efficiency Focus',
    description: 'Optimising every aspect from pedalling technique to nutrition timing for maximum performance.'
  }
];

export default function CyclingPage() {
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
            <h1 className="mb-8">Ultra-Distance <span className="italic text-success">Cycling Journey</span></h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              From weekend warrior to competing in the world's toughest ultra-distance races.
              Discover how cycling across continents shaped my approach to business,
              mental resilience, and achieving the seemingly impossible.
            </p>
          </motion.div>

          {/* Cycling Images Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="aspect-[4/3] bg-gradient-to-br from-success/20 to-accent/5 rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Martin Cox ultra-distance cycling across American landscapes during Trans America race"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-success/5 rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
                  alt="Trans America bike race preparation and endurance training setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Race Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {raceAchievements.map((race, index) => (
              <motion.div
                key={race.race}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={race.highlight ? 'md:col-span-2' : ''}
              >
                <Card className={`p-8 h-full ${race.highlight ? 'border-success bg-success/5' : ''} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`text-sm font-bold px-3 py-1 rounded-full mb-3 ${
                        race.highlight ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {race.year}
                      </div>
                      <h3 className="text-2xl font-display font-semibold mb-2">{race.race}</h3>
                      <p className="text-success font-medium">{race.achievement}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-success">{race.distance}</div>
                      <div className="text-sm text-muted-foreground">Distance</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{race.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cycling to Business Lessons */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">From Road to Boardroom</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every mile ridden, every mountain climbed, every mental barrier broken taught lessons
              that directly translate to building and scaling successful businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cyclingLessons.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-md transition-all duration-300">
                  <div className="text-4xl mb-4">{lesson.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{lesson.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-success mb-1">On the Bike:</p>
                      <p className="text-sm text-muted-foreground">{lesson.lesson}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-accent mb-1">In Business:</p>
                      <p className="text-sm text-muted-foreground">{lesson.business}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Strategy */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Equipment Setup */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">Race Setup & Strategy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Success in ultra-distance racing comes down to meticulous preparation,
                equipment optimization, and strategic thinking - much like building a business.
              </p>

              <div className="space-y-4">
                {equipmentSpecs.map((item, index) => (
                  <motion.div
                    key={item.item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <div>
                      <span className="font-semibold">{item.item}:</span>
                      <span className="text-muted-foreground ml-2">{item.spec}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="mt-8 rounded-full px-8 py-4 bg-success hover:bg-success/90">
                Training Philosophy
              </Button>
            </motion.div>

            {/* Training Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">Training Philosophy</h2>
              <div className="space-y-6">
                {trainingPhilosophy.map((principle, index) => (
                  <motion.div
                    key={principle.principle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <h3 className="font-semibold mb-3 text-success">{principle.principle}</h3>
                      <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 mt-8 bg-gradient-to-br from-success/10 to-accent/5">
                <h3 className="font-semibold mb-3">🚴 Current Status</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  While my competitive racing days are focused on business building,
                  I still ride regularly for fitness, mental clarity, and the pure joy
                  of being on two wheels. The lessons learned continue to fuel my entrepreneurial journey.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community & Legacy */}
      <section className="section-padding bg-gradient-to-br from-success/5 to-accent/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-8">The Cycling Community</h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Ultra-distance cycling introduced me to an incredible community of athletes,
              dreamers, and achievers. The friendships forged on long rides and at finish lines
              have enriched both my personal life and business network.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: '🌍',
                  title: 'Global Network',
                  description: 'Connections across continents through shared challenges'
                },
                {
                  icon: '💪',
                  title: 'Mutual Support',
                  description: 'Learning from and supporting fellow ultra-distance athletes'
                },
                {
                  icon: '🏆',
                  title: 'Shared Achievement',
                  description: 'Celebrating victories and learning from setbacks together'
                }
              ].map((aspect, index) => (
                <motion.div
                  key={aspect.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{aspect.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{aspect.title}</h3>
                  <p className="text-muted-foreground">{aspect.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 rounded-full bg-success hover:bg-success/90">
                Connect About Cycling
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-full border-success text-success hover:bg-success hover:text-success-foreground">
                Business Lessons Learned
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
