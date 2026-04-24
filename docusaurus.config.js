// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');

const editBaseUrl = 'https://github.com/yapoml/yapoml.github.io/tree/main/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yet another page object generation',
  titleDelimiter: '·',
  tagline: 'Yet another page object generation in .NET/C# with minimal code and maximum impact',
  favicon: 'img/logo.svg',

  url: 'https://yapoml.dev',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'yapoml',
  projectName: 'yapoml',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [
    require.resolve('@fontsource-variable/inter/index.css'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: editBaseUrl,
        },
        blog: false,
        gtag: {
          trackingID: 'G-3DWDWDXYGT',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.svg' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#0f766e' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#0f766e' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      image: 'img/social_card.png',
      metadata: [
        { name: 'keywords', content: 'automation, test, framework, page object, pom, generation, selenium, webdriver, playwright, dotnet, csharp' },
        { name: 'theme-color', content: '#0f766e' },
      ],
      navbar: {
        title: 'Yapoml',
        hideOnScroll: true,
        logo: {
          alt: 'Yapoml Logo',
          src: 'img/logo_light.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Docs',
          },
          { label: 'Selenium', to: '/selenium', position: 'right' },
          { label: 'Playwright', to: '/playwright', position: 'right' },
          {
            href: 'https://github.com/yapoml',
            'aria-label': 'GitHub Repository',
            title: 'GitHub',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Documentation', to: '/docs/intro' },
              { label: 'Core Concepts', to: '/docs/concepts/syntax' },
            ],
          },
          {
            title: 'Frameworks',
            items: [
              { label: 'Selenium', to: '/selenium' },
              { label: 'Playwright', to: '/playwright' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/FBWVpMjnJx' },
              { label: 'GitHub Discussions', href: 'https://github.com/orgs/yapoml/discussions' },
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/yapoml' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/yapoml' },
            ],
          },
        ],
      },
      algolia: {
        appId: 'BVKM0WY7UJ',
        apiKey: 'b0603fa2ef1bc888ad02464be8195cc3',
        indexName: 'yapoml',
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['csharp', 'yaml', 'bash'],
      },
    }),
};

module.exports = config;
