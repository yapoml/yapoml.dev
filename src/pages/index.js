import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Yet another
          <span> page object generation </span>
          in .NET
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/intro">
              Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePromo() {
  return (
    <section>
      <video autoPlay loop muted className={styles.promo}>
          <source src="img/promo.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
      </video>
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
        
      </main>
    </Layout>
  );
}
