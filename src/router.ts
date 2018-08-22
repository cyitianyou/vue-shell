import Vue from "vue";
import store from "./store";
import Router from "vue-router";
import { RouteConfig } from "vue-router";
import Home from "./views/Home.vue";
// import Intro from "./views/Intro.vue";

Vue.use(Router);
const routes: RouteConfig[] = [
  {
    path: "/intro",
    name: "intro",
    component: (): any => import("./views/Intro.vue")
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];
if (store.state.introPage) {
  routes.push({
    path: "/",
    redirect: "/home"
  });
} else {
  routes.push({
    path: "/",
    redirect: "/intro"
  });
}
export default new Router({
  // mode: "history",
  routes: routes
});
