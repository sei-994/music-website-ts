import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
// import News from "./views/News"
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
  ],
})
