import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./components/HelloWorld";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  { path: "/notfound", component: NotFound },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
