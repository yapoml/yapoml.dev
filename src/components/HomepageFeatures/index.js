import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { Zap, Target, Sparkles, Settings2, ArrowRight } from 'lucide-react';
import styles from './styles.module.css';

const FEATURES = [
  {
    title: 'Easy to Use',
    icon: Zap,
    description:
      'A reliable, low-ceremony approach to interacting with UI components in automated testing.',
    link: '/docs/intro',
  },
  {
    title: 'Focus on What Matters',
    icon: Target,
    description:
      'Yapoml lets you focus on your application definition — everything else is generated for you in a tick.',
    link: '/docs/concepts/syntax',
  },
  {
    title: 'Express Fluently',
    icon: Sparkles,
    description: (
      <>
        Start your journey from the <code>.Ya()</code> extension method and let IntelliSense suggest
        the best options as you type.
      </>
    ),
    link: '/docs/concepts/interactions',
  },
  {
    title: 'Personalize',
    icon: Settings2,
    description:
      'Uncompromised customization of your testing journey with a domain-specific experience.',
    link: '/docs/category/advanced',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function Feature({ title, icon: Icon, description, link, index }) {
  return (
    <motion.div
      className={styles.card}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={link} className={styles.link}>
        Learn more <ArrowRight size={14} strokeWidth={2.25} />
      </Link>
    </motion.div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className={styles.eyebrow}>Why Yapoml</p>
        <h2 className={styles.sectionTitle}>Built for fast, expressive UI test authoring</h2>
        <div className={styles.grid}>
          {FEATURES.map((feature, idx) => (
            <Feature key={feature.title} index={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

