import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let appAgents: RegExpExecArray | null = /vstore\/([0-9.]*)/.exec(navigator.userAgent);
let appVersion: string = "notInApp";
if (appAgents && appAgents.length > 1) {
  appVersion = appVersion[1];
}
export default new Vuex.Store({
  state: {
    introPage: !!localStorage.getItem(appVersion + "introPage"),
    images: [
      "./intro/imgs/01.png",
      "./intro/imgs/02.png",
      "./intro/imgs/03.png"
    ],
    tryImage: "./intro/imgs/try.png"
  },
  mutations: {

  },
  actions: {

  }
});
