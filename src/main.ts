import Vue from "vue";
import store from "./store";
import Vant, { Lazyload } from "vant";
import "vant/lib/vant-css/index.css";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(Lazyload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
