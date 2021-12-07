import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import PostList from '../components/PostList'

const routes = [
  { path: "/", component: PostList },
  { path: "/login", component: LoginForm },
  { path: "/register", component: SignupForm },
];

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;
