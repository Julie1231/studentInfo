import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 登陆界面
import login from '../pages/login.vue'
// 主页
import home from '../pages/home.vue'
import main from '../pages/main.vue'
// 学生管理
import studentInfo from '../components/Student.vue'

const router = new Router({
  routes: [
    {
      path: '/login',
      component: login
    },{
    	path:'/home',
    	component:home,
      children: [{
        path:'/home/studentinfo',
        component:studentInfo
      }]
    },{
      path: '/main',
      component:main
    }
  ]
})

export default router
