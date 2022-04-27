module.exports = {
  base: '/yourlibrary/',
  title: 'Hello VuePress test title',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/input-text.md',
          '/components/input-textarea.md'
        ]
      }
    ]
  }
}