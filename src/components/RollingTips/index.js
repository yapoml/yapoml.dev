import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

export default function RollingTips() {
  return (
    <section>
      <div className="container">
        <div className={styles.typing__container}>
          <CodeBlock language='csharp'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Ya.',
                1000,
                'Ya.LoginPage.Username.Type("John");',
                5000,
                'Ya.LoginPage.Username.Type("John").Password.Type("123");',
                5000,
                'Ya.LoginPage.Username.Expect().Attributes.Value.Is("John");',
                5000,
                'Ya.LoginPage.Username.Expect().Styles.Opacity.IsGreaterThan(0.6);',
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
  );
}
