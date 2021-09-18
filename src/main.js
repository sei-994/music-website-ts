import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
// スクロール用のプラグイン
import VueObserveVisibility from "vue-observe-visibility"
Vue.use(VueObserveVisibility)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
