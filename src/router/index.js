import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/customer/Edit';
import CreateComponent from '@/components/customer/Create';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'home' } },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/create', name: 'Create', component: CreateComponent },
  { path: '/edit/:id', name: 'Edit', component: EditComponent },

/**
  {
    path: '/',
    name: 'home',
    component: HomeView
  },*/
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

/**
import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/customer/Edit';
import CreateComponent from '@/components/customer/Create';

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
  ]
});
 */