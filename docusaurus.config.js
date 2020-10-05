const path = require('path');
const { PrimaryButton } = require('@fluentui/react');

module.exports = {
  title: 'Monitr',
  titleDelimiter: '-',
  tagline: '',
  url: 'https://docs.monitr.be',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'monitr', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      style: 'primary',
      logo: {
        alt: 'Monitr Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://app.monitr.be',
          position: 'right',
          component: 'button', // Use "component" instead of "type" to circumvent default theme config validation
          text: 'Go to app',
          target: '_blank'
        }
      ]
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }
  },
  plugins: [
    'docusaurus-plugin-sass',
    ['@docusaurus/plugin-content-docs', {
      routeBasePath: '/',
      sidebarPath: require.resolve('./sidebars.js'),
    }],
    '@docusaurus/plugin-debug',
    // '@docusaurus/plugin-google-analytics',
    // '@docusaurus/plugin-google-gtag',
    '@docusaurus/plugin-sitemap',
    // '@docusaurus/plugin-ideal-image'
  ],
  themes: [
    ['@docusaurus/theme-classic', {
      customCss: require.resolve('./src/css/custom.css'),
    }],
    // '@docusaurus/theme-search-algolia'
  ],
};
