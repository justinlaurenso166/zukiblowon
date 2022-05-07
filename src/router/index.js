import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "Homepage", component: Home },
    // { path: "/sneak_peeks", name: "SneakPeeks", compoknent: SneakPeeks },
    // { path: "/roadmap", name: "Roadmap", component: Construction },
    // { path: "/team", name: "Team", component: Construction },
    // { path: "/support", name: "Support", component: Construction },
    // { path: "/merch", name: "Merch", component: Construction },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router;