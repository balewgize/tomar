import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import PostDetail from "../views/PostDetail";
import Profile from "../views/Profile";
import PostForm from "../views/PostForm";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/post", name: "post-detail", component: PostDetail },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/author", name: "profile", component: Profile },
  { path: "/write", name: "write", component: PostForm },
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;
