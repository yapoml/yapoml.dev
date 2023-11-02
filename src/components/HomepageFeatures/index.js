import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import mainStyles from '../../pages/index.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Reliable approach to interact with UI components in automated testing area. 
      </>
    ),
    link: '/docs/intro'
  },
  {
    title: 'Focus on What Matters',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Yapoml lets you focus on your application definition,
        and everything else is already available for you in a tick.
      </>
    ),
    link: '/docs/concepts/syntax'
  },
  {
    title: 'Express Fluently',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Start your journey from <code>.Ya()</code> method extension and IDE suggests the best options
        using power of intellisense.
      </>
    ),
    link: '/docs/concepts/interactions'
  },
  {
    title: 'Personalize',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Uncompromised customization of your journey with domain specific experience.
      </>
    ),
    link: '/docs/category/advanced'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className='col col--4 padding--md'>
      <div className="card card--full-height">
        <div className="card__header text--center padding-vert--lg">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer text--center">
          <a className="button button--link" href={link}>Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <h2 className={mainStyles.sectionHeader}>Why Yapoml?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
