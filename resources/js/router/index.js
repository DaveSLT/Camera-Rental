import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import landingPage from "../views/landingPage.vue";
import signUp from "../views/signUp.vue";

import Shop from "@/views/shop.vue";
import Support from "@/views/Support.vue";
import MyAccount from "@/views/myaccount.vue";
import adminDashboard from "../views/adminDashboard.vue";
import AdminDashboard from "../views/adminDashboard.vue";

const routes = [
    {
        path: "/Admin",
        name: "Admin",
        component: AdminDashboard,
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/",
        name: "LandingPage",
        component: landingPage,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/signUp",
        name: "signUp",
        component: signUp,
    },
    // Add routes for Shop, Support, and MyAccount
    {
        path: "/shop",
        name: "Shop",
        component: Shop,
    },
    {
        path: "/support",
        name: "Support",
        component: Support,
    },
    {
        path: "/account",
        name: "Account",
        component: MyAccount,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
