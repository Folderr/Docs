import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: [
    'README.md',
    '**/README.md',
    './README.md',
    '**/CODE_OF_CONDUCT.md',
    'CODE_OF_CONDUCT.md'
  ],
  rewrites: {
    'guides/folderr/2.0.0/:page': 'guides/folderr/:page',
    'guides/cli/beta/:page': 'guides/cli/:page'
  },
  title: "Folderr Documentation",
  description: "Documentation for Folderr, the FOSS file host and link shortener, and it's related projects",
  lastUpdated: true,
  themeConfig: {
    logo: '/Icon-512.svg',
    search: {
      provider: 'local',
    },
    lastUpdatedText: 'Updated at',
    editLink: {
      pattern: ({relativePath}) => {
        if (relativePath.startsWith('guides') && relativePath.includes('folderr')) {
          return `https://github.com/Folderr/Docs/blob/master/Guides/Folderr/2.0.0/${relativePath.split('/')[2]}`
        } if (relativePath.startsWith('guides') && relativePath.includes('CLI')) {
          return `https://github.com/Folderr/Docs/blob/master/Guides/CLI/beta/${relativePath.split('/')[2]}`
        } else {
          return `https://github.com/Folderr/Docs/blob/master/${relativePath}`
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/folderr/getting-started' },
      { text: 'CLI', link: '/guides/cli/getting-started' }
    ],

    sidebar: [
      /*{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },*/
      {
        text: 'Folderr Guides',
        items: [
          {text: 'Get Folderr', link: '/guides/folderr/getting-started'},
          {text: 'Config', link: '/guides/folderr/config'},
          {text: 'Deploy', link: '/guides/folderr/deployment'}
        ]
      },
      {
        text: 'CLI Guides',
        items: [
          {text: 'Get Started with Folderr CLI', link: '/guides/cli/getting-started'},
          {text: 'Folderr Administration', link: 'guides/cli/folderr-administration'},
          {text: 'Command Reference', link: '/guides/cli/commands'}
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2022-present Folderr',
      message: 'Docs licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><br>Folderr licensed under AGPL-3.0'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Folderr/Docs' }
    ]
  },
  cleanUrls: true,
  head: [
      [
          'link',
          {rel: 'icon', href: '/favicon.ico'}
      ],
      ['meta', {property: "og:image", content: 'https://folderr.net/OG-Banner.png'}],
      ['meta', {property: "og:url", content: 'https://folderr.net'}],
      ['meta', {property: "og:site_name", content: "Folderr Documentation" }],
      ['meta', {property: "og_type", content: 'website'}],
      ['meta', {name: "theme-color", content: "#2ECC71"}],
      ['meta', {property: "og:description", content: "Documentation for Folderr, the FOSS file host and link shortener, and it's related projects"}],
      ['meta', {name: "twitter:card", content: "summary_large_image"}],
      ['meta', {property: "og:title", content: "Folderr Documentation | FOSS File Host Docs"}]
  ]
})
