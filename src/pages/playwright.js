import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Yapoml for <Link to="https://playwright.dev">Microsoft Playwright</Link></h1>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg margin-vert--lg"
            to="/playwright/getting-started">
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
    <section>
      <div className="container">
        <div className={styles.videoContainer}>
          <video controls muted src={colorMode == 'dark' ? useBaseUrl("/img/promo_dark.mp4") : useBaseUrl("/img/promo_light.mp4")} className={styles.promo + ' shadow--md'}>
              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        
      </div>
      
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Yet another page object generation in .NET">
      <HomepageHeader />
      <main>
        <HomePromo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
