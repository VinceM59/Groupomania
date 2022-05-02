import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "../views/Signup-form.vue";
import login from "../views/Login-form.vue";
import CreatePost from "../views/CreatePost.vue";
import Profil from "../views/Profile-form.vue";
import ModifyProfile from "../views/ModifyProfile";
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
    path: "/profile",
    name: "profil-form",
    component: Profil,
  },
  {
    path: "/modifyProfile",
    name: "ModifyProfile",
    component: ModifyProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
