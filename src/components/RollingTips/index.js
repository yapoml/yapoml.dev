import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React from 'react';
import styles from './styles.module.css';

if (ExecutionEnvironment.canUseDOM) {
  import('@motion-canvas/player');
}

export default function RollingTips() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion-canvas-player
            class={styles.player}
            src={`/examples/code-block.js`}
            auto="true"
          />
      </div>
    </section>
  );
}
