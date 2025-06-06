'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

// Blog post data - in a real app this would come from a CMS or database
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  author: string;
  content: string;
  tags: string[];
  relatedPosts: string[];
}

const blogPosts: { [key: string]: BlogPost } = {
  'trans-america-racing-to-building-businesses': {
    id: 1,
    title: 'From Trans America Racing to Building Businesses: How Cycling Shaped My Entrepreneurial Journey',
    slug: 'trans-america-racing-to-building-businesses',
    excerpt: 'The mental resilience, strategic thinking, and endurance mindset developed through ultra-distance cycling became the foundation for building three successful businesses.',
    category: 'Entrepreneurship',
    readTime: '8 min read',
    date: '2025-01-15',
    image: '🚴',
    featured: true,
    author: 'Martin Cox',
    content: `
# From Trans America Racing to Building Businesses

When I first lined up at the start of the Trans America Bike Race, I had no idea I was actually preparing for a career in entrepreneurship. The 4,200km journey from Oregon to Virginia would teach me more about business strategy, resilience, and performance optimisation than any MBA course ever could.

## The Race That Changed Everything

The Trans America Bike Race isn't just long—it's a masterclass in resource management, strategic thinking, and mental resilience. You're completely self-supported, carrying everything you need while racing against time and the elements. Every decision matters: when to sleep, what to eat, which route to take, how to manage your energy reserves.

Sound familiar? Because that's exactly what running a business feels like.

## Lesson 1: Strategic Planning Under Pressure

During the race, you're constantly making strategic decisions with incomplete information. Do you take the mountain pass that's shorter but steeper? Do you stop for food now or push on to the next town? Do you sleep for three hours or push through the night?

In business, it's the same. Do you launch the product now or wait for more features? Do you hire more staff or invest in automation? Do you enter that new market or consolidate your existing position?

The race taught me that perfect information is a luxury. Great decisions come from understanding the core variables, assessing risk quickly, and committing fully to your choice.

## Lesson 2: The Power of Systems

Ultra-distance cycling is all about systems. Your nutrition system, your sleep system, your bike maintenance system, your route planning system. If any system fails, the whole effort can collapse.

This translated directly to building businesses. At Postino, we developed systems for client onboarding, strategy development, and results measurement. At Glazing Supplies Direct, we built systems for inventory management, quality control, and customer service.

The businesses that scale are the ones with robust, repeatable systems.

## Lesson 3: Mental Resilience Through the Dark Moments

Every ultra-distance race has dark moments. Hours when everything hurts, when you question why you started, when stopping seems like the only rational choice. The race continues in your head long before your legs give out.

Building businesses has identical moments. The client who doesn't pay. The product launch that flops. The team member who quits at the worst possible time. The cash flow crisis that keeps you awake at night.

The race taught me that these moments aren't failures—they're test points. How you respond when everything goes wrong determines whether you finish or not.

## Lesson 4: Resource Optimisation

In ultra-distance racing, you can't carry everything you want. Every item has to justify its weight. Is this tool essential or just nice to have? Can this serve multiple purposes? How do I get maximum value from minimum resources?

This mindset became crucial in business. Every hire, every expenditure, every feature has to pass the same test. Small businesses don't have the luxury of waste. You learn to get remarkable results with limited resources.

## Lesson 5: Community and Solitude

The race is largely solitary, but the ultra-cycling community is incredibly supportive. You help competitors with mechanical issues. You share information about road conditions. You celebrate each other's achievements.

Business feels lonely, but the best entrepreneurs understand the value of community. Sharing insights, helping competitors (yes, really), celebrating others' successes. The business community that supports each other succeeds together.

## The ADHD Connection

What I didn't know during my racing years was that I had ADHD. The same neurological differences that made traditional office environments challenging made me exceptionally suited to ultra-distance racing and entrepreneurship.

ADHD brains thrive on:
- High-stakes decision making
- Varied, complex challenges
- Intense focus periods (hyperfocus)
- Novel problem-solving
- High-energy environments

Ultra-distance racing and building businesses both provide these in abundance.

## Applying Racing Lessons to Business

**Goal Setting**: Break massive objectives into daily milestones. In racing, it's miles per day. In business, it's revenue targets, customer acquisition, or product development stages.

**Performance Monitoring**: Track the metrics that matter. In racing, it's speed, heart rate, and nutrition. In business, it's customer acquisition cost, lifetime value, and cash flow.

**Recovery and Maintenance**: Just as bikes need maintenance and bodies need recovery, businesses need regular attention to systems, team wellbeing, and strategic review.

**Adaptation**: Races never go according to plan. Weather changes, mechanical issues arise, route conditions vary. Successful racers adapt quickly. The same applies to business.

## The Results

This racing mindset has been fundamental to building three successful businesses:

- **Postino**: Helping UK SMEs with strategic marketing
- **Milk Bottle Tops**: A nostalgic product business spanning 30+ years
- **Glazing Supplies Direct**: B2B manufacturing serving 8,000+ professionals

Each business faced its own "dark moments." Each required strategic thinking under pressure. Each demanded resource optimisation and systematic approaches.

## The Journey Continues

I still cycle regularly, though competitive racing has taken a back seat to business building. But the lessons remain central to how I approach every challenge:

- Plan strategically but adapt quickly
- Build robust systems but remain flexible
- Prepare thoroughly but embrace uncertainty
- Support your community while pushing your own limits

Whether you're racing across America or building a business from scratch, the fundamentals remain the same: strategic thinking, mental resilience, resource optimisation, and the courage to keep pedaling when the road gets tough.

*The start line and the board room have more in common than you might think.*
    `,
    tags: ['Entrepreneurship', 'Cycling', 'Strategy', 'ADHD', 'Resilience'],
    relatedPosts: ['adhd-entrepreneurial-advantage', 'ultra-distance-cycling-lessons', 'growing-smes-marketing']
  },
  'adhd-entrepreneurial-advantage': {
    id: 2,
    title: 'The ADHD Advantage: Why Neurodiversity is Your Entrepreneurial Superpower',
    slug: 'adhd-entrepreneurial-advantage',
    excerpt: 'Discover how ADHD traits like hyperfocus, pattern recognition, and creative problem-solving can become massive advantages in business.',
    category: 'ADHD',
    readTime: '6 min read',
    date: '2025-01-10',
    image: '🧠',
    author: 'Martin Cox',
    content: `
# The ADHD Advantage: Why Neurodiversity is Your Entrepreneurial Superpower

Getting diagnosed with ADHD at age 47 was like having someone hand me the manual for my own brain. Suddenly, decades of behaviour that seemed scattered or impulsive made perfect sense. More importantly, I realised that what society often labels as deficits are actually entrepreneurial superpowers.

## The Late Diagnosis Revolution

Most ADHD research focuses on children and educational settings. But there's a revolution happening in understanding adult ADHD, particularly in high-performing individuals who've developed sophisticated coping mechanisms.

I was one of those adults. Award-winning in my career, but constantly job-hopping. Capable of intense focus, but easily bored by routine. Creative problem-solver, but terrible at paperwork. High achiever, but always feeling like I was swimming against the current.

Sound familiar?

## Reframing ADHD Traits as Business Assets

Let's stop talking about ADHD "symptoms" and start recognising them as cognitive differences that, in the right environment, become competitive advantages.

### Hyperfocus: The Ultimate Productivity Hack

**The "Deficit" Narrative**: Can't sustain attention, easily distracted.

**The Reality**: ADHD brains can achieve states of hyperfocus that neurotypical brains simply can't match. When something captures our interest, we can work for hours without breaks, solve complex problems with unusual depth, and produce remarkable results.

**Business Application**:
- Deep strategy sessions that solve months of planning in hours
- Product development marathons that result in breakthrough innovations
- Problem-solving sessions that competitors can't match

At Postino, my hyperfocus sessions regularly produce client strategies that would take traditional consultancies weeks to develop.

### Pattern Recognition: Seeing What Others Miss

**The "Deficit" Narrative**: Jumps to conclusions, doesn't follow linear thinking.

**The Reality**: ADHD brains excel at pattern recognition and connecting seemingly unrelated concepts. We see opportunities and connections that linear thinkers miss.

**Business Application**:
- Spotting market gaps before competitors
- Understanding customer needs through behaviour patterns
- Identifying business model innovations
- Predicting industry trends

This pattern recognition led me to revive milk bottle tops in 1993—long before nostalgia marketing was mainstream.

### Creative Problem-Solving: The Innovation Engine

**The "Deficit" Narrative**: Doesn't follow instructions, takes unconventional approaches.

**The Reality**: ADHD brains naturally approach problems from multiple angles simultaneously. We don't get stuck in conventional thinking patterns.

**Business Application**:
- Developing unique solutions to common problems
- Finding workarounds when traditional methods fail
- Creating innovative product features
- Solving operational challenges creatively

### High Energy and Drive: The Entrepreneurial Motor

**The "Deficit" Narrative**: Hyperactive, can't sit still, impulsive.

**The Reality**: This is entrepreneurial energy. We're driven to create, build, and push boundaries. We have the energy to manage multiple projects and thrive in high-stakes environments.

**Business Application**:
- Managing multiple businesses simultaneously
- Maintaining energy through challenging periods
- Leading teams through change and uncertainty
- Sustaining momentum on long-term projects

### Risk Tolerance: The Calculated Gambler

**The "Deficit" Narrative**: Impulsive, poor decision-making, takes unnecessary risks.

**The Reality**: ADHD entrepreneurs often have higher risk tolerance, which is essential for business building. We're comfortable with uncertainty and can make decisions with incomplete information.

**Business Application**:
- Launching businesses in uncertain markets
- Making quick strategic pivots
- Investing in innovative but unproven solutions
- Taking calculated risks competitors won't consider

## The Dark Side: Managing ADHD Challenges in Business

Let's be honest—ADHD isn't all superpowers. There are real challenges that successful ADHD entrepreneurs must manage:

### Executive Function Challenges
- Difficulty with routine administrative tasks
- Challenges with time management and scheduling
- Struggles with detail-oriented work

**Management Strategy**: Build systems and hire for your weaknesses. I have team members who excel at the operational details I struggle with.

### Emotional Regulation
- Rejection sensitivity that can derail business relationships
- Frustration with slow-moving processes
- Difficulty with criticism or setbacks

**Management Strategy**: Develop emotional awareness and communication skills. Learn to pause before reacting.

### Consistency and Follow-Through
- Starting projects with enthusiasm but struggling to finish
- Difficulty maintaining energy for routine tasks
- Tendency to abandon projects when they become less interesting

**Management Strategy**: Create accountability systems and break large projects into engaging milestones.

## Building ADHD-Friendly Business Systems

### Time Management
- Use time-blocking for important work
- Schedule hyperfocus sessions for critical projects
- Build buffers around meetings and deadlines
- Work with your natural energy cycles

### Task Management
- Break large projects into smaller, achievable tasks
- Use visual project management tools
- Set artificial deadlines to create urgency
- Celebrate small wins to maintain momentum

### Communication
- Record important meetings for later review
- Follow up verbal agreements in writing
- Use visual aids in presentations
- Be transparent about your working style with team members

### Environment Design
- Create distraction-free spaces for deep work
- Use background music or white noise for focus
- Keep fidget tools available for meetings
- Design your space to support movement

## The ADHD Entrepreneur Community

One of the most valuable realisations post-diagnosis was discovering how many successful entrepreneurs have ADHD. We're drawn to entrepreneurship because it provides:

- Variety and stimulation
- Control over our environment
- Ability to work with our natural rhythms
- Opportunities to leverage our cognitive strengths
- Freedom from traditional workplace constraints

## Practical Steps for ADHD Entrepreneurs

### 1. Get Proper Assessment
If you suspect you have ADHD, seek professional assessment. Understanding your brain changes everything.

### 2. Reframe Your Narrative
Stop seeing ADHD traits as deficits. Start recognising them as different ways of thinking that can be leveraged for business success.

### 3. Build Support Systems
Surround yourself with people who complement your cognitive style. Hire for your weaknesses.

### 4. Develop Self-Awareness
Learn your patterns: when you focus best, what triggers distraction, how to recognise hyperfocus opportunities.

### 5. Create ADHD-Friendly Processes
Design your business operations around your cognitive strengths rather than forcing yourself into neurotypical frameworks.

## The Competitive Advantage

In today's fast-paced, innovation-driven business environment, ADHD traits are increasingly valuable:

- Markets change rapidly (pattern recognition advantage)
- Innovation is crucial (creative problem-solving advantage)
- Multitasking is required (high energy advantage)
- Risk-taking is essential (risk tolerance advantage)
- Deep work creates differentiation (hyperfocus advantage)

## Conclusion: Embrace Your Cognitive Diversity

ADHD isn't something to overcome—it's something to optimise. The same traits that made school challenging can make business building exciting and successful.

The key is understanding how your brain works and designing your life and business around your cognitive strengths rather than against them.

Your ADHD isn't holding you back from entrepreneurial success—it might be exactly what gives you the edge.

*Ready to turn your neurodiversity into your competitive advantage?*
    `,
    tags: ['ADHD', 'Entrepreneurship', 'Neurodiversity', 'Business Strategy', 'Personal Development'],
    relatedPosts: ['trans-america-racing-to-building-businesses', 'late-adhd-diagnosis', 'hyperfocus-productivity']
  },
  'milk-bottle-tops-nostalgic-business': {
    id: 3,
    title: 'Building Milk Bottle Tops: Turning Nostalgia into a Sustainable Business',
    slug: 'milk-bottle-tops-nostalgic-business',
    excerpt: 'The story behind reviving a nostalgic product and creating a business that spans decades, from idea to implementation.',
    category: 'Business Case Study',
    readTime: '5 min read',
    date: '2025-01-05',
    image: '🥛',
    author: 'Martin Cox',
    content: `
# Building Milk Bottle Tops: Turning Nostalgia into a Sustainable Business

In 1993, long before "nostalgia marketing" became a buzzword, I spotted an opportunity in the most unlikely place: childhood memories of milk bottle tops. What started as a simple observation about changing daily routines became a business that's thrived for over three decades.

## The Genesis: Spotting the Emotional Gap

The idea came from a simple realisation. Milk delivery was disappearing from British life, but the emotional connection to those distinctive bottle tops remained strong. These weren't just functional items—they were symbols of a simpler time, of childhood routines, of community.

Most people saw this as progress. I saw it as an opportunity.

## The Early Insight: Emotion Over Function

Traditional business thinking focuses on functional value. But milk bottle tops weren't functional for most people by 1993. Their value was entirely emotional—nostalgia, memories, connection to the past.

This taught me one of my most important business lessons: **emotional value often trumps functional value**, especially in consumer products.

## Building the Business: From Concept to Reality

### Phase 1: Market Validation (1993-1995)
Before "lean startup" methodology existed, I was accidentally practising it. I started small:
- Sourced authentic-style bottle tops from original manufacturers
- Tested at local markets and craft fairs
- Listened to customer stories about milk delivery memories
- Refined the product based on emotional feedback

The response was immediate and intense. People didn't just buy bottle tops—they bought memories.

### Phase 2: Scaling Production (1995-2000)
As demand grew, I faced classic scaling challenges:
- Finding reliable suppliers who understood quality standards
- Balancing authenticity with cost-effectiveness
- Developing efficient fulfillment processes
- Building a customer base through word-of-mouth

Key lesson: **Scaling nostalgic products requires maintaining authenticity**. Any compromise on the "feel" of the product destroys its emotional value.

### Phase 3: Digital Transformation (2000-2010)
The internet changed everything. Suddenly, I could reach every British expat worldwide who missed their childhood milk delivery experience.

- Built early e-commerce presence
- Developed international shipping capabilities
- Created content around milk delivery history
- Built community around shared memories

### Phase 4: Sustainable Evolution (2010-Present)
As environmental consciousness grew, I evolved the business:
- Sourced more sustainable materials
- Developed recycling programmes
- Created educational content about historical British traditions
- Partnered with heritage organisations

## The Business Model: Simplicity and Sustainability

The model remains elegantly simple:
- Source high-quality, authentic-style milk bottle tops
- Sell directly to consumers who value the nostalgia
- Maintain premium pricing through emotional positioning
- Keep overhead low through efficient operations

Key financial metrics after 30+ years:
- **3M+ individual tops sold**
- **Consistent profitability** across three decades
- **Zero external investment** required
- **Sustainable growth** through emotional connection

## Lessons Learned: Why This Business Endures

### 1. Timing the Emotional Cycle
I launched just as milk delivery was disappearing but before the memories faded. **Timing emotional cycles is as important as timing technology cycles.**

### 2. Authentic Storytelling
Every customer interaction reinforces the authentic story. We're not selling bottle tops—we're selling connection to British heritage.

### 3. Premium Pricing Through Emotional Value
People pay premium prices for authentic emotional experiences. Our pricing reflects the value of the memory, not the cost of the product.

### 4. Long-Term Thinking
This business was built for sustainability, not quick growth. Steady, profitable operations over decades beat rapid scale-and-exit strategies.

### 5. Community Building
Our customers become evangelists. They share their own milk delivery stories, creating a community around shared experiences.

## The Wider Impact: Cultural Preservation

Milk Bottle Tops became more than a business—it became a form of cultural preservation. We're maintaining connection to British traditions that would otherwise be lost.

Museums use our products for historical displays. Heritage centres include us in exhibitions about British daily life. Schools use us to teach about social history.

**Business can be a force for cultural preservation.**

## Modern Applications: The Nostalgia Economy

What I learned building Milk Bottle Tops applies to today's nostalgia economy:

### Identify Disappearing Experiences
Look for daily routines, social customs, or cultural practices that are fading. These create emotional gaps in the market.

### Understand Emotional Triggers
Research what specific elements trigger nostalgic responses. Often it's sensory details—textures, sounds, visual elements.

### Maintain Authenticity
Any compromise on authenticity destroys nostalgic value. Better to charge more and stay true to the original.

### Build Community
Nostalgic customers want to share memories. Create platforms for them to connect and share stories.

### Think Long-Term
Nostalgic businesses often have longer lifecycles than trend-based businesses. Build for sustainability.

## Challenges and Adaptations

### Supply Chain Complexity
Finding suppliers who understand quality requirements for "authenticity" rather than just functionality.

**Solution**: Develop long-term relationships with suppliers who share quality values.

### Seasonal Demand
Nostalgia purchases often spike around holidays and gift-giving occasions.

**Solution**: Build inventory and marketing cycles around emotional calendar.

### International Expansion
British nostalgia translates differently in different markets.

**Solution**: Focus on British expat communities and anglophile markets first.

### Generational Shifts
As memories fade, the customer base could shrink.

**Solution**: Evolve into heritage education while maintaining core nostalgic appeal.

## The ADHD Connection

Running Milk Bottle Tops perfectly suited my ADHD brain:
- **Pattern Recognition**: Spotted the emotional opportunity early
- **Long-term Hyperfocus**: Sustained interest over decades
- **Creative Problem-Solving**: Found unique solutions to supply and marketing challenges
- **Community Building**: Natural ability to connect with customer emotions

## Modern Relevance: Lessons for Today's Entrepreneurs

### 1. Emotional Value Creation
In an increasingly digital world, physical products that trigger emotional responses have premium value.

### 2. Niche Market Mastery
Better to dominate a small, passionate market than compete in a large, commoditised one.

### 3. Sustainable Business Models
Build businesses that can operate profitably for decades, not just until the next funding round.

### 4. Cultural Timing
Understanding cultural cycles and emotional rhythms can be as valuable as understanding technology cycles.

### 5. Authentic Storytelling
In an age of manufactured experiences, authentic stories create unbeatable competitive advantages.

## The Future

Milk Bottle Tops continues to evolve while maintaining its core identity. We're exploring:
- Heritage tourism partnerships
- Educational programme development
- Sustainable material innovations
- Digital storytelling platforms

But the fundamental business remains unchanged: connecting people to meaningful memories through authentic products.

## Conclusion: More Than a Business

What started as spotting an opportunity in disappearing milk delivery became a lesson in building businesses around emotional value, cultural preservation, and authentic storytelling.

The success of Milk Bottle Tops taught me that **the best businesses don't just fill functional gaps—they fill emotional ones.**

*Sometimes the most sustainable businesses are built on the simplest human truths: we all want to feel connected to something meaningful.*
    `,
    tags: ['Business Case Study', 'Nostalgia Marketing', 'Product Development', 'Cultural Preservation', 'Sustainability'],
    relatedPosts: ['trans-america-racing-to-building-businesses', 'adhd-entrepreneurial-advantage', 'glazing-supplies-scaling']
  }
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Updated for Next.js 15 with client-side params handling
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;

      const uniqueKey = `${paragraph.substring(0, 20).replace(/\s+/g, '-')}-${index}`;

      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={uniqueKey} className="text-4xl md:text-5xl font-display font-bold mb-8 text-balance">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }

      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={uniqueKey} className="text-2xl md:text-3xl font-display font-semibold mb-6 mt-12 text-balance">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }

      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={uniqueKey} className="text-xl font-display font-semibold mb-4 mt-8">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={uniqueKey} className="font-semibold text-lg mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </p>
        );
      }

      if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
        return (
          <p key={uniqueKey} className="italic text-muted-foreground text-center mb-6 text-lg">
            {paragraph.replace(/\*/g, '')}
          </p>
        );
      }

      if (paragraph.startsWith('- ')) {
        return (
          <li key={uniqueKey} className="text-muted-foreground leading-relaxed mb-2 ml-4">
            {paragraph.replace('- ', '')}
          </li>
        );
      }

      return (
        <p key={uniqueKey} className="text-muted-foreground leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <span>→</span>
              <span>{post.category}</span>
              <span>→</span>
              <span className="text-foreground">{post.title}</span>
            </motion.div>

            {/* Post Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="text-6xl mb-6">{post.image}</div>

              <div className="inline-flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className={`px-3 py-1 rounded-full ${
                  post.category === 'ADHD' ? 'bg-creative text-creative-foreground' :
                  post.category === 'Entrepreneurship' ? 'bg-secondary text-secondary-foreground' :
                  post.category === 'Business Case Study' ? 'bg-accent text-accent-foreground' :
                  'bg-success text-success-foreground'
                }`}>
                  {post.category}
                </span>
                <span>{post.readTime}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>By {post.author}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert"
          >
            <div className="blog-content">
              {formatContent(post.content)}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Tags */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm bg-background border border-border hover:border-accent transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-border">
              <Button variant="outline" asChild>
                <Link href="/blog">← Back to Blog</Link>
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Share on LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Share on Twitter
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-display font-semibold mb-12 text-center">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {post.relatedPosts.slice(0, 3).map((relatedSlug: string, index: number) => {
                  const relatedPost = blogPosts[relatedSlug];
                  if (!relatedPost) return null;

                  return (
                    <motion.div
                      key={relatedSlug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <Link href={`/blog/${relatedSlug}`} className="block p-6">
                          <div className="text-4xl mb-4 text-center">{relatedPost.image}</div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium">
                              {relatedPost.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                          </div>
                          <h3 className="font-semibold mb-3 line-clamp-2">{relatedPost.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                        </Link>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
