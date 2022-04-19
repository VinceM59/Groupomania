import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "../views/Signup-form.vue";
import login from "../views/Login-form.vue";
import CreatePost from "../views/CreatePost.vue";
import Profil from "../views/Profile-form.vue";
const routes = [
  {
    path: "/",
    name: "Login-form",
    component: login,
  },
  {
    path: "/signup",
    name: "Signup-form",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/createPost",
    name: "Create-post",
    component: CreatePost,
  },
  {
    path: "/profil",
    name: "profil-form",
    component: Profil,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
