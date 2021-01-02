
import Vue from "vue"
import VueRouter from "vue-router"


import Index from "./components/Index"
import NotFound from "./components/NotFound"


Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
		{path: "/index" , name: "/" ,component: Index},
		{path: "/notfound" , name: "notfound" ,component: NotFound}
	],
	mode : "history"
})
