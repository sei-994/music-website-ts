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
      path: "/news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/News.vue"),
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
  ],
})
