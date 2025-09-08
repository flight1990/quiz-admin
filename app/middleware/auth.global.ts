import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#app";
import {useAuthStore} from "../stores/authStore";

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore();
    const accessToken = useCookie("access_token");

    if (accessToken.value && !auth.isAuth) {
        auth.isAuth = true;
        auth.accessToken = accessToken.value;
    }

    if (to.meta.requiresAuth && !auth.isAuth) {
        return navigateTo("/login");
    }
});
