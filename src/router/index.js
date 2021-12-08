import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import PostList from '../components/PostList'

const routes = [
  { path: "/", name: "home",component: PostList },
  { path: "/login", name: "login", component: LoginForm },
  { path: "/register", name: "register", component: SignupForm },
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;
