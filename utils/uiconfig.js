//框架核心配置
import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
  config: {
    theme: 'auto',
    main: 'grey',
    footer: false,
    text: 1,
    tabBar: [{
        title: '首页',
        icon: 'icon-home',
        curIcon: 'icon-home',
        url: '/pages/index/index',
        type: 'tab'
      },
      {
        title: '分类',
        icon: 'icon-post',
        curIcon: 'icon-post',
        url: '/pages/topic/topic',
        type: 'tab'
      },
      // {
      //   title: '排行',
      //   icon: 'icon-faxian',
      //   curIcon: 'icon-faxian',
      //   url: '/pages/hot/hot',
      //   type: 'tab'
      // },
      {
        title: '我的',
        icon: 'icon-mine',
        curIcon: 'icon-mine',
        url: '/pages/my/my',
        type: 'tab'
      }
    ],
  }
})