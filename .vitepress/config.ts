import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  rewrites: {
    'guides/folderr/2.0.0/installation.md': 'guides/folderr/installation.md',
    'guides/folderr/2.0.0/config.md': 'guides/folderr/config.md'
  },
  title: "Folderr Docs",
  description: "FOSS File Host and Link Shortener Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/folderr/installation'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Guides',
        items: [
          {text: 'Installation', link: '/guides/folderr/installation'},
          {text: 'Config', link: '/guides/folderr/config'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Folderr/Folderr' }
    ]
  }
})
