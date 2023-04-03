const path = require('path')
const math = require('remark-math');
const katex = require('rehype-katex');

const announcementBarContent = `<a href="/typescript-full-stack-technology-trpc" target="_blank">Typescript 全栈最值得学习的技术栈 TRPC</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Clover's blog`,
  titleDelimiter: '-',
  url: 'https://blog.cloverzz.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Clover',
  projectName: 'blog',
  tagline: 'learn and share',
  onBrokenLinks: 'ignore',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content: 'Clover',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: 'programer',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: `Clover's blog`,
      logo: {
        alt: 'clover',
        src: 'img/logo.webp',
        srcDark: 'img/logo-dark.webp',
      },
      hideOnScroll: true,

      items: [
        {
          label: 'Docs',
          position: 'right',
          items: [
            {
              label: 'Math',
              to: 'docs/math',
            },
            {
              label: 'Algorithm',
              to: 'docs/algorithm',
            },
            {
              label: 'Web',
              to: 'docs/skill/',
            },
          ]
        },
        {
          label: 'Blog',
          position: 'right',
          items: [
            {
              label: 'Tags',
              to: 'tags',
            },
            {
              label: 'Achive',
              to: 'archive',
            },
          ]
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Math',
              to: 'docs/math',
            },
            {
              label: 'Algorithm',
              to: 'algorithm',
            },
            {
              label: 'Web',
              to: 'docs/skill',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloverzz',
            },
            {
              label: 'leetcode',
              href: 'https://leetcode.com/cloverzz521/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/clover5012/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: `Clover's home`,
              position: 'right',
              to: 'https://cloverzz.com',
            },
            {
              label: `Clover's fun`,
              position: 'right',
              to: 'https://cloverzz.com',
            },
            // {
            //   label: '我的站点',
            //   position: 'right',
            //   to: 'website',
            // },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
            },
          ],
        },
      ],
      copyright: `<p>Copyright © 2020 - PRESENT 愧怍 Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'M9SPD6BAJY',
      apiKey: '429cb53d92d445de3289c0e95b42b729',
      indexName: 'dev_blog',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/cloverzz',
      instagram: 'https://www.instagram.com/clover5012/',
      leetcode: 'https://leetcode.com/cloverzz521/',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '愧怍的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        // blog: {
        //   path: "blog",
        //   routeBasePath: "blog",
        //   // editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        //   // `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        //   editLocalizedFiles: false,
        //   blogDescription: '愧怍的个人博客',
        //   blogSidebarCount: 10,
        //   blogSidebarTitle: '最近更新',
        //   blogListComponent: '@theme/BlogListPage',
        //   blogPostComponent: '@theme/BlogPostPage',
        //   include: ['**/*.md'],
        //   postsPerPage: 10,
        //   showReadingTime: true,
        //   readingTime: ({ content, frontMatter, defaultReadingTime }) =>
        //     defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        //   feedOptions: {
        //     type: 'all',
        //     title: '愧怍',
        //     // copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        //   },
        //   remarkPlugins: [math],
        //   rehypePlugins: [katex],
        // },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: './blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/cloverzz/clover-blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: `Clover's blog`,
        blogSidebarCount: 10,
        blogSidebarTitle: 'Recent posts',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '愧怍',
          // copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config
