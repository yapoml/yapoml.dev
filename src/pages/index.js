import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RollingTips from '@site/src/components/RollingTips';
import BrowserFrame from '@site/src/components/BrowserFrame';
import CTABand from '@site/src/components/CTABand';

import styles from './index.module.css';

const SAMPLE_CODE = `// Define a page in YAML, get fluent C# right away.
driver.Ya().PackagesPage.Open(q: "yapoml")
  .Packages.Expect(it => it.IsNotEmpty().Each(package =>
    {
      package.Description.IsNotEmpty();
      package.Tags.IsNotEmpty();
    })
  );`;

function HomepageHero() {
  const promoSrc = useBaseUrl('/img/promo_dark.mp4');

  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <p className={styles.eyebrow}>For .NET / C# test automation</p>
          <h1 className={styles.title}>
            Page objects, <span className={styles.titleAccent}>generated&nbsp;on the fly</span>
          </h1>
          <p className={styles.subtitle}>
            Yapoml turns concise YAML descriptions into fluent, type-safe C# page objects for
            Selenium and Playwright — minimal code, maximum impact.
          </p>
          <div className={styles.actions}>
            <Link
              className={clsx('button button--primary button--lg', styles.btnPrimary)}
              to="/docs/intro"
            >
              Get started <ArrowRight size={16} strokeWidth={2.25} />
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.btnSecondary)}
              to="https://github.com/yapoml"
            >
              <Github size={16} strokeWidth={2.25} /> Star on GitHub
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
        >
          <BrowserFrame label="yapoml.dev">
            <video
              src={promoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Yapoml demo"
            />
          </BrowserFrame>
        </motion.div>
      </div>
    </header>
  );
}

function CodePreview() {
  return (
    <section className={styles.codePreview}>
      <div className="container">
        <div className={styles.codePreviewGrid}>
          <div className={styles.codePreviewCopy}>
            <p className={styles.sectionEyebrow}>One-liner to interact</p>
            <h2 className={styles.sectionTitle}>Start from <code>.Ya()</code> and let IntelliSense lead</h2>
            <p className={styles.sectionLead}>
              Define your pages in YAML; Yapoml generates the C# types as you save. Every selector,
              expectation and interaction surfaces directly in your editor.
            </p>
            <Link to="/docs/concepts/syntax" className={styles.sectionLink}>
              Read the syntax guide <ArrowRight size={14} strokeWidth={2.25} />
            </Link>
          </div>
          <div className={styles.codePreviewCode}>
            <CodeBlock language="csharp" title="Program.cs" showLineNumbers>
              {SAMPLE_CODE}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

const FRAMEWORKS = [
  {
    name: 'Selenium',
    slug: 'selenium',
    href: '/selenium',
    logo: '/img/external/selenium.svg',
    pitch: 'Cross-browser automation with the most widely-adopted WebDriver standard.',
  },
  {
    name: 'Playwright',
    slug: 'playwright',
    href: '/playwright',
    logo: '/img/external/playwright.svg',
    pitch: 'Modern, fast and reliable end-to-end testing for the web.',
  },
];

function FrameworksSection() {
  return (
    <section className={styles.frameworks}>
      <div className="container">
        <p className={styles.sectionEyebrow}>Built on top of</p>
        <h2 className={styles.sectionTitle}>The frameworks you already use</h2>
        <div className={styles.frameworksGrid}>
          {FRAMEWORKS.map((fw) => (
            <Link key={fw.slug} to={fw.href} className={styles.frameworkCard}>
              <img src={fw.logo} alt={`${fw.name} logo`} className={styles.frameworkLogo} />
              <div>
                <h3 className={styles.frameworkName}>
                  Yapoml + {fw.name}
                </h3>
                <p className={styles.frameworkPitch}>{fw.pitch}</p>
              </div>
              <span className={styles.frameworkArrow} aria-hidden="true">
                <ArrowRight size={18} strokeWidth={2.25} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout description="Yet another page object generation in .NET/C# with minimal code and maximum impact.">
      <HomepageHero />
      <main>
        <CodePreview />
        <FrameworksSection />
        <HomepageFeatures />
        <div className={styles.darkBand}>
          <RollingTips />
          <CTABand
            eyebrow="Get started in minutes"
            title="Spend your time on tests, not boilerplate"
            description="Install the NuGet package, define a page in YAML, and call .Ya() \u2014 that's it."
            primary={{ to: '/docs/intro', label: 'Read the docs' }}
            secondary={{ to: 'https://discord.gg/FBWVpMjnJx', label: 'Join the Discord' }}
          />
        </div>
      </main>
    </Layout>
  );
}

