import { createStore } from "vuex";

export default createStore({
  state: {
    tokenLS: localStorage.getItem("token"),
  },
  mutations: {},
  actions: {},
  modules: {},
});
