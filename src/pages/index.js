import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RollingTips from '@site/src/components/RollingTips';
import { Player, BigPlayButton, ControlBar, PlayToggle, ProgressControl, FullscreenToggle } from 'video-react';

import styles from './index.module.css';
import "video-react/dist/video-react.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Yapoml</h1>
        <p className="hero__subtitle">
          Yet another page object generation in .NET/C# with minimal code and maximum impact
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-vert--md"
            to="/docs/intro">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePromo() {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.sectionDark}>
      <div className={styles.promoSection + ' container'}>
        <div>
          <Player src={useBaseUrl("/img/promo_dark.mp4")} className={styles.promo + ' shadow--md'}>
            <BigPlayButton position="center" className={styles.promoPlayButton} />
            <ControlBar autoHide={false} disableDefaultControls={true}>
              <PlayToggle />
              <ProgressControl />
              <FullscreenToggle />
            </ControlBar>
          </Player>
        </div>
      </div>
    </section>
  );
}

function FrameworksSection() {
  return (
    <section>
      <div className="container">
        <h2 className={styles.sectionHeader}>Supported frameworks</h2>
        <div className='row'>
          <div className='col'>
            <ul className={styles.frameworksList}>
              <li>
                <a href='/selenium'>
                  <img src="/img/external/selenium.svg" alt="Selenium WebDriver" />
                </a>
              </li>
              <li>
                <a href='/playwright'>
                  <img src="/img/external/playwright.svg" alt="Microsoft Playwright" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Yet another page object generation in .NET">
      <HomepageHeader />
      <main>
        <RollingTips />
        <HomePromo />
        <FrameworksSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
