module.exports = {
  title: '一些开发相关的记录',
  tagline: '永远保持孩子般的热情！',
  url: 'https://xiongxin.github.io',
  baseUrl: '/',
  projectName: 'xiongxin.github.io',
  organizationName: 'xiongxin',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          to: 'docs/java/zk001/',
          activeBasePath: 'java',
          label: 'Java',
          position: 'left',
        },
        {
          to: 'docs/rust/marcos0x01/',
          activeBasePath: 'rust',
          label: 'Rust',
          position: 'left',
        },
        { to: 'blog', label: '博客', position: 'left' },
        {
          to: 'about',
          label: '关于我',
          position: 'right',
        },
        {
          href: 'https://github.com/xiongxin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} xiongxin. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
