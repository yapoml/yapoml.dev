/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'html',
      value: 'Welcome',
      className: 'sidebar-title',
      defaultStyle: true,
    },
    'intro',
    {
      type: 'html',
      value: 'Core Concepts',
      className: 'sidebar-title',
      defaultStyle: true,
    },
    {
      type: 'autogenerated',
      dirName: 'concepts',
    },
    {
      type: 'html',
      value: 'Frameworks',
      className: 'sidebar-title',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Selenium',
      items: [{type: 'autogenerated', dirName: 'selenium' }],
    },
    {
      type: 'category',
      label: 'Playwright',
      items: [{type: 'autogenerated', dirName: 'playwright' }],
    },
  ],
};

module.exports = sidebars;
