import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TypeAnimation } from 'react-type-animation';
import CodeBlock from '@theme/CodeBlock'

import styles from './index.module.css';

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

function Highlights() {
  return (
    <section>
      <div className="container">
      <div className={styles.typing__container}>
        <CodeBlock language='csharp'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'Ya.',
              'Ya.LoginPage.Username.Type("John");',
              5000,
              'Ya.LoginPage.Username.Type("John").Password.Type("123");',
              5000,
              'Ya.LoginPage.Username.Expect().Attributes.Value.Is("John");',
              5000,
              'Ya.LoginPage.SignIn.Click();',
              5000,
              'Ya.LoginPage.SignIn.Click(when => when.IsEnabled());',
              5000,
              'Ya.HomePage.Expect().IsOpened();',
              5000,
              'Ya.HomePage.Expect(it => it.IsOpened().Title.Contains("Welcome"));',
              10000,
            ]}
            preRenderFirstString={true}
            speed={30}
            deletionSpeed={80}
            cursor={false}
            style={{ fontWeight: 'var(--ifm-font-weight-bold)', color: 'var(--ifm-color-gray-600)',  }}
            repeat={Infinity}
          />
        </CodeBlock>
          
        </div>
      </div>
    </section>
  )
}

function HomePromo() {
  const { colorMode } = useColorMode();

  return (
    <section>
      <div className="container">
        <h2 className={styles.sectionHeader}>Watch it out in action</h2>
        <div>
          <video controls muted src={colorMode == 'dark' ? useBaseUrl("/img/promo_dark.mp4") : useBaseUrl("/img/promo_light.mp4")} className={styles.promo + ' shadow--md'}>
            Sorry, your browser doesn't support embedded videos.
          </video>
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
                  <img src="/img/external/selenium.svg" alt="Selenium WebDriver"/>
                </a>
              </li>
              <li>
                <a href='/playwright'>
                  <img src="/img/external/playwright.svg" alt="Microsoft Playwright"/>
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
        <Highlights />
        <HomePromo />
        <FrameworksSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
