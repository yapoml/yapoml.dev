import React from 'react';
import FrameworkLanding from '@site/src/components/FrameworkLanding';

export default function SeleniumPage() {
  return (
    <FrameworkLanding
      pageTitle="Selenium"
      pageDescription="Yet another page object generation in .NET/C# built on top of Selenium WebDriver."
      framework={{
        name: 'Selenium WebDriver',
        slug: 'selenium',
        href: 'https://selenium.dev',
        logo: '/img/external/selenium.svg',
      }}
      sandboxRepoUrl="https://github.com/yapoml/yapoml.selenium.sandbox.git"
    />
  );
}

