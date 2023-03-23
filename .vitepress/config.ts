import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: ['README.md', '**/README.md', './README.md'],
  rewrites: {
    'guides/folderr/2.0.0/:page': 'guides/folderr/:page',
  },
  ignoreDeadLinks: true,
  title: "Folderr Docs",
  description: "FOSS File Host and Link Shortener Documentation",
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: 'Updated at',
    editLink: {
      pattern: ({relativePath}) => {
        if (relativePath.startsWith('guides') && relativePath.includes('folderr')) {
          return `https://github.com/Folderr/Docs/blob/master/Guides/Folderr/2.0.0/${relativePath.split('/')[2]}`
        } else {
          return `https://github.com/Folderr/Docs/blob/master/${relativePath}`
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/folderr/getting-started'}
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
        text: 'Guides',
        items: [
          {text: 'Get Folderr', link: '/guides/folderr/getting-started'},
          {text: 'Config', link: '/guides/folderr/config'}
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
  cleanUrls: true
})
