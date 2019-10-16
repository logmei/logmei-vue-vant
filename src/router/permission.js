import router from './index'
// import store from './store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
