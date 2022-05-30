import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

createApp(App).use(store).use(router).mount("#app");

createApp.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY hh:mm");
  }
});
