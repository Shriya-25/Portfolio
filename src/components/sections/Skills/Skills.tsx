'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import MarqueeRow from './MarqueeRow';
import { skills } from './skills.data';

export default function Skills() {
  // Split skills into two groups for different rows
  const midPoint = Math.ceil(skills.length / 2);
  const topRowSkills = skills.slice(0, midPoint);
  const bottomRowSkills = skills.slice(midPoint);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#0F0E0E] overflow-hidden"
      aria-label="Technical Skills and Expertise"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* SEO Microdata */}
      <meta itemProp="name" content="Technical Skills - Shriya Sandesh Kulkarni" />
      <meta itemProp="description" content="Technical skills of Shriya Sandesh Kulkarni including C++, Python, Java, JavaScript, TypeScript, React.js, Next.js, React Native, Node.js, Flutter, MongoDB, Firebase, SQLite, AWS, Git and GitHub." />
      <meta itemProp="numberOfItems" content={skills.length.toString()} />

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>Technical Skills and Expertise</h2>
        <p>
          Shriya Sandesh Kulkarni is proficient in a wide range of modern web and mobile development
          technologies, frameworks, and tools.
        </p>
        <h3>Languages</h3>
        <ul>
          <li>C++ - Systems programming and competitive coding</li>
          <li>Python - Backend development and scripting</li>
          <li>Java - Object-oriented programming</li>
          <li>JavaScript - Modern web development</li>
          <li>TypeScript - Type-safe JavaScript development</li>
        </ul>
        <h3>Web &amp; App Development</h3>
        <ul>
          <li>React.js - Component-based UI development</li>
          <li>Next.js - Server-side rendering and static generation</li>
          <li>React Native - Cross-platform mobile apps</li>
          <li>Node.js - Server-side JavaScript runtime</li>
          <li>HTML &amp; CSS - Semantic markup and modern styling</li>
          <li>Tailwind CSS - Utility-first CSS framework</li>
          <li>Flutter - Cross-platform mobile development</li>
        </ul>
        <h3>Databases &amp; Cloud</h3>
        <ul>
          <li>MongoDB - NoSQL database</li>
          <li>Firebase - Backend-as-a-service</li>
          <li>SQLite - Lightweight relational database</li>
          <li>AWS - Cloud infrastructure</li>
        </ul>
        <h3>Tools &amp; Core Concepts</h3>
        <ul>
          <li>Git - Version control</li>
          <li>GitHub - Code hosting and collaboration</li>
          <li>REST APIs - API design and integration</li>
          <li>DBMS - Database management systems</li>
          <li>OOP - Object-oriented programming</li>
          <li>Data Structures &amp; Algorithms</li>
        </ul>
      </div>

      {/* Particle Background - Removed for performance */}
      {/* <CustomParticleBackground color="100, 150, 255" particleCount={35} /> */}

      {/* Subtle background glow - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16 text-center"
        >
          <p className="text-primary-gradient text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3">My Arsenal</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-white px-2 uppercase tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 800 }}
          >
            Technologies <span className="text-rainbow-gradient">I Master</span>
          </h2>
          <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">Languages, frameworks and tools from my resume — the stack I build with</p>
        </motion.div>

        {/* Marquee Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 sm:space-y-12 md:space-y-16"
          role="list"
          aria-label="Technology skills showcase"
        >
          {/* Top Row - Left to Right */}
          <MarqueeRow skills={topRowSkills} speed={15} />

          {/* Bottom Row - Right to Left (Reverse) */}
          <MarqueeRow skills={bottomRowSkills} speed={15} reverse />
        </motion.div>
      </Container>
    </section>
  );
}
