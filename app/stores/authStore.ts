import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import {navigateTo, useCookie} from "nuxt/app";

export const useAuthStore = defineStore("auth", () => {
    const isAuth: Ref<boolean> = ref(false);
    const accessToken: Ref<string | null> = ref(null);
    const refreshToken: Ref<string | null> = ref(null);

    const setCookies = (
        access_token: string | null,
        refresh_token: string | null,
        is_auth: boolean
    ) => {
        const accessTokenCookie = useCookie("access_token");
        const refreshTokenCookie = useCookie("refresh_token");

        accessTokenCookie.value = accessToken.value = access_token;
        refreshTokenCookie.value = refreshToken.value = refresh_token;

        isAuth.value = is_auth;
    };

    const login = (access_token: string, refresh_token: string) => {
        setCookies(access_token, refresh_token, true);
        navigateTo("/");
    };

    const logout = () => {
        setCookies(null, null, false);
        navigateTo("/login");
    };

    return {
        isAuth,
        accessToken,
        refreshToken,
        login,
        logout,
    };
});
