import React from 'react';
import FrameworkLanding from '@site/src/components/FrameworkLanding';

export default function PlaywrightPage() {
  return (
    <FrameworkLanding
      pageTitle="Playwright"
      pageDescription="Yet another page object generation in .NET/C# built on top of Microsoft Playwright."
      framework={{
        name: 'Microsoft Playwright',
        slug: 'playwright',
        href: 'https://playwright.dev',
        logo: '/img/external/playwright.svg',
      }}
      sandboxRepoUrl="https://github.com/yapoml/yapoml.playwright.sandbox.git"
    />
  );
}

