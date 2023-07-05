module.exports = {
  title: 'ANPBD',
  theme: 'reco',
  head:[
    ['link', { rel: 'stylesheet', href: '/iconfont/iconfont.css' }],
    ['link', { rel: 'icon', href: '/fudan_logo.svg' }],
  ],
  themeConfig: {
    logo: '/fudan_logo.svg',
    subSidebar: 'auto',
    nav: [
      { text: 'Home', link: '/', icon: 'iconfont icon-home' },
      { text: 'Organizer', link: '/organizer/', icon: 'iconfont icon-user' },
      { text: 'Speakers', link: '/speakers/', icon: 'iconfont icon-chalkboard-teacher'},
      { text: 'Agenda', link: '/agenda/', icon: 'iconfont icon-calendar-alt' },
      { text: 'FAQ', link: '/faq/', icon: 'iconfont icon-question-circle' },
    ]
  }
}
