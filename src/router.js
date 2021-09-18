import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/newsdetail",
      name: "newsdetail",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/NewsDetail.vue"),
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
  ],
})
