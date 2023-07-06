module.exports = {
  title: 'ANPBD',
  theme: 'reco',
  head:[
    ['link', { rel: 'stylesheet', href: '/iconfont/iconfont.css' }],
    ['link', { rel: 'icon', href: '/fudan_logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#7994b4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/fudan_logo.svg' }],
    ['link', { rel: 'mask-icon', href: '/fudan_logo.svg' , color:"#999"}],
    ['meta', { name: 'msapplication-TileImage', content: '/fudan_logo.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    logo: '/fudan_logo.svg',
    authorAvatar: '/fudan_logo.svg',
    subSidebar: 'auto',
    search: false,
    nav: [
      { text: 'Home', link: '/', icon: 'iconfont icon-home' },
      { text: 'Organizer', link: '/organizer/', icon: 'iconfont icon-user' },
      { text: 'Speakers', link: '/speakers/', icon: 'iconfont icon-chalkboard-teacher'},
      { text: 'Agenda', link: '/agenda/', icon: 'iconfont icon-calendar-alt' },
      { text: 'Sponsors', link: '/sponsors/', icon: 'iconfont icon-hands-helping' },
      { text: 'FAQ', link: '/faq/', icon: 'iconfont icon-question-circle' },
    ]
  }
}
