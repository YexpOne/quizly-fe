import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./components/HelloWorld";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  { path: "/notfound", component: NotFound }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
