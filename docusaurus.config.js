const path = require('path');

module.exports = {
  title: 'Monitr',
  titleDelimiter: '-',
  tagline: '',
  url: 'https://docs.monitr.be',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'monitr', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: false,
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
          component: 'defaultButton', // Use "component" instead of "type" to circumvent default theme config validation
          text: 'Login',
          target: '_blank'
        },
        {
          href: 'https://monitrbv.pipedrive.com/scheduler/QXbrrJUY/product-demo',
          position: 'right',
          component: 'primaryButton',
          text: 'Request a demo',
          target: '_blank'
        }
      ]
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // footer: {
    //   links: []
    // },
    algolia: {
      apiKey: '81581c4e1a50191c8eca372656049226',
      indexName: 'monitr',
      algoliaOptions: { 'facetFilters': ["type:content", "version:current"] },
    },
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
    ['@docusaurus/plugin-sitemap', {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: 'weekly',
      priority: 0.5,
      trailingSlash: false,
    }],
    // '@docusaurus/plugin-ideal-image'
  ],
  themes: [
    ['@docusaurus/theme-classic', {
      customCss: require.resolve('./src/css/custom.css'),
    }],
    '@docusaurus/theme-search-algolia'
  ],
};
