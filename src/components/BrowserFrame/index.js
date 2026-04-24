import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * BrowserFrame – wraps content (typically a video, screenshot, or canvas)
 * in a stylised browser chrome to add visual depth on landing pages.
 */
export default function BrowserFrame({ children, label = 'yapoml.dev', className }) {
  return (
    <div className={clsx(styles.frame, className)}>
      <div className={styles.bar} aria-hidden="true">
        <span className={clsx(styles.dot, styles.dotRed)} />
        <span className={clsx(styles.dot, styles.dotYellow)} />
        <span className={clsx(styles.dot, styles.dotGreen)} />
        <span className={styles.url}>{label}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
