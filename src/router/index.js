import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import PostDetail from "../views/PostDetail.vue";
import Profile from "../views/Profile.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/post", name: "post-detail", component: PostDetail },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/author", name: "profile", component: Profile },
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;
