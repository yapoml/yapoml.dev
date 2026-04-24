import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * CTABand – full-width gradient call-to-action section used at the bottom
 * of marketing pages. Accepts an optional secondary action.
 */
export default function CTABand({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}) {
  return (
    <section className={styles.band}>
      <div className={clsx('container', styles.inner)}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.actions}>
          {primary && (
            <Link className={clsx('button button--lg', styles.primary)} to={primary.to}>
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link className={clsx('button button--lg', styles.secondary)} to={secondary.to}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
