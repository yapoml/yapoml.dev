import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RollingTips from '@site/src/components/RollingTips';
import { Player, BigPlayButton, ControlBar, PlayToggle, ProgressControl, FullscreenToggle } from 'video-react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Yapoml with <Link to="https://playwright.dev">Microsoft Playwright</Link></h1>
        <p className="hero__subtitle">
          Yet another page object generation in .NET/C# built on top of Microsoft Playwright
        </p>
        <div className={styles.buttons}>
        <Link
            className="button button--primary button--lg margin--md"
            to="/docs/playwright/getting-started">
              Get started
          </Link>
          <Link
            className="button button--outline button--primary button--lg margin--md"
            to="vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fyapoml%2Fyapoml.playwright.sandbox.git">
              Try it now
          </Link>
          <Link
            className="button button--link button--lg margin--md"
            to="/docs/intro">
              What is Yapoml?
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
      <h2 className={styles.sectionHeader}>Watch it out in action</h2>
        <div>
        <Player src={colorMode == 'dark' ? useBaseUrl("/img/promo_dark.mp4") : useBaseUrl("/img/promo_light.mp4")} className={styles.promo + ' shadow--md'}>
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Yet another page object generation in .NET">
      <HomepageHeader />
      <main>
        <RollingTips />
        <HomePromo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
