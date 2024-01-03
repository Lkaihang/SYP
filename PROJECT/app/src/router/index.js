
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//重写 push|replace

let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = (location, resolve, reject) => {
  if(resolve&&reject) {
    originPush.call(this,location,resolve,reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

export default new VueRouter({

  routes:[
    {
      path:"/home",
      component:Home,
      meta:{show:true}
    },
    {
      path:"/login",
      component:Login,
      meta:{show:false}
    },
    {
      path:"/register",
      component:Register,
      meta:{show:false}
    },
    {
      path:"/search:keyword?",
      component:Search,
      meta:{show:true},
      name:'search',
      props:true,
    },
    // 重定向
    {
      path:'*',
      redirect:"/home"
    }
  ]
})
