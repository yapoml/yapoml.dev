import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RollingTips from '@site/src/components/RollingTips';
import BrowserFrame from '@site/src/components/BrowserFrame';
import CTABand from '@site/src/components/CTABand';

import styles from './styles.module.css';

/**
 * FrameworkLanding – marketing page used by /selenium and /playwright.
 * Keeps both pages structurally identical; only copy and assets differ.
 */
export default function FrameworkLanding({
  pageTitle,
  pageDescription,
  ogImage,
  framework, // { name, slug, href, logo, alt }
  sandboxRepoUrl,
}) {
  const promoSrc = useBaseUrl('/img/promo_dark.mp4');

  return (
    <Layout title={pageTitle} description={pageDescription} image={ogImage}>
      <main>
        <header className={styles.hero}>
          <div className={clsx('container', styles.heroInner)}>
            <motion.div
              className={styles.heroCopy}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className={styles.eyebrow}>
                <img src={framework.logo} alt="" className={styles.eyebrowLogo} />
                Built on top of <Link to={framework.href}>{framework.name}</Link>
              </p>
              <h1 className={styles.title}>
                Yapoml with <span className={styles.titleAccent}>{framework.name}</span>
              </h1>
              <p className={styles.subtitle}>{pageDescription}</p>
              <div className={styles.actions}>
                <Link
                  className={clsx('button button--primary button--lg', styles.btnPrimary)}
                  to={`/docs/intro?framework=${framework.slug}`}
                >
                  Get started <ArrowRight size={16} strokeWidth={2.25} />
                </Link>
                <Link
                  className={clsx('button button--outline button--primary button--lg', styles.btnGhost)}
                  to={`vscode://vscode.git/clone?url=${encodeURIComponent(sandboxRepoUrl)}`}
                >
                  Try it now <ExternalLink size={14} strokeWidth={2.25} />
                </Link>
                <Link className={clsx('button button--link button--lg', styles.btnLink)} to="/docs/intro">
                  What is Yapoml?
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <BrowserFrame label={`yapoml.dev / ${framework.slug}`}>
                <video
                  src={promoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Yapoml ${framework.name} demo`}
                />
              </BrowserFrame>
            </motion.div>
          </div>
        </header>

        <div className={styles.darkBand}>
          <RollingTips />
        </div>
        <HomepageFeatures />

        <div className={styles.darkBand}>
          <CTABand
            eyebrow="Ready when you are"
            title={`Start automating with ${framework.name} today`}
            description="Define your pages in YAML, get fluent C# right away."
            primary={{ to: `/docs/intro?framework=${framework.slug}`, label: 'Get started' }}
            secondary={{ to: 'https://discord.gg/FBWVpMjnJx', label: 'Join the Discord' }}
          />
        </div>
      </main>
    </Layout>
  );
}
