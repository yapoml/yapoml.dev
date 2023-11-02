// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const editBaseUrl = 'https://github.com/yapoml/yapoml.github.io/tree/main/';

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yet another page object generation',
  titleDelimiter: '·',
  tagline: 'Yet another page object generation in .NET/C# with minimal code and maximum impact',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://yapoml.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yapoml', // Usually your GitHub org/user name.
  projectName: 'yapoml', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `${editBaseUrl}`,
        },
        blog: false,
        //blog: {
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/yapoml/yapoml.github.io/tree/main/',
        //},
        gtag: {
          trackingID: 'G-3DWDWDXYGT'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      image: 'img/social_card.png',
      metadata: [{name: 'keywords', content: 'automation, testing, page object, pom, generation, selenium webdriver, playwright'}],
      navbar: {
        title: 'Yapoml',
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
          {label: 'Selenium', to: '/selenium', position: 'right' },
          {label: 'Playwright', to: '/playwright', position: 'right' },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: "GitHub",
            href: 'https://github.com/yapoml',
            "aria-label": "Open GitHub Repository",
            "title": "GitHub",
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Frameworks',
            items: [
              {
                label: 'Selenium',
                to: '/selenium',
              },
              {
                label: 'Playwright',
                to: '/playwright',
              },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/FBWVpMjnJx',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/orgs/yapoml/discussions',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/yapoml',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yapoml',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      algolia: {
        appId: 'BVKM0WY7UJ',
        apiKey: 'b0603fa2ef1bc888ad02464be8195cc3',
        indexName: 'yapoml',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp']
      },
    }),
};

module.exports = config;
