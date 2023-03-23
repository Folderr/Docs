import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  rewrites: {
    'guides/folderr/2.0.0/getting-started.md': 'guides/folderr/getting-started.md',
    'guides/folderr/2.0.0/config.md': 'guides/folderr/config.md'
  },
  title: "Folderr Docs",
  description: "FOSS File Host and Link Shortener Documentation",
  themeConfig: {
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
