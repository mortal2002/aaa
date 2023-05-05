import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTow from '../views/PageTow.vue'




Vue.use(VueRouter)

//1.创建路由主键
//2.将路由与组件进行映射


const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },

  //主路由
  {
    path:'/',
    component: Main,
    redirect:'/home',//重定向
    children:[
      //子路由
      { path: 'home', component: Home },//首页
      { path: 'user', component: User },//用户管理
      { path: 'mall', component: Mall },//商品管理
      { path: 'page1', component: PageOne },//页面1
      { path: 'page2', component: PageTow },//页面2

    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
