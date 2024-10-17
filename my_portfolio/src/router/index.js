import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Service from "../pages/Service.vue";
import Skill from "../pages/Skill.vue";
import Work from "../pages/Work.vue";
import Contact from "../pages/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/Home",
            name: "home",
            component: Home,
        },
        {
            path: "/About",
            name: "about",
            component: About,
            
        },
        {
            path: "/Service",
            name: "service",
            component: Service,
            
        },
        {
            path: "/Skill",
            name: "skill",
            component: Skill,
            
        },
        {
            path: "/Work",
            name: "work",
            component: Work,
            
        },
        {
            path: "/Contact",
            name: "contact",
            component: Contact,
            
        },
    ],
});


export default router;