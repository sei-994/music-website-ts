import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/newsdetail/:id",
    name: "newsdetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/NewsDetail.vue"),
    props: (route) => ({
      id: route.params.id,
      singleTitle: route.params.singleTitle,
      date: route.params.date,
    }),
  },
  {
    path: "/newslibrary",
    name: "newslibrary",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/NewsLibrary.vue"),
  },
  {
    path: "/disco",
    name: "disco",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Disco.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Contact.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Video.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
