import {$fetch} from 'ofetch';
import type {FetchOptions} from 'ofetch';
import type {IApiInterface} from "../types/IApiInterface";
import TokenModule from "../repository/modules/TokenModule";
import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const accessTokenCookie = useCookie('access_token');

    const fetchOptions: FetchOptions = {
        baseURL: config.public.api as string,
        async onRequest({options}) {
            const headers = useRequestHeaders(["cookie", "Content-Type"]);
            options.headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...headers,
                ...options.headers,
                // @ts-ignore
                credentials: "include",
            }

            const token = authStore.tokens.accessToken || accessTokenCookie.value;

            if (token) {
                // @ts-ignore
                options.headers["Authorization"] = `Bearer ${token}`;
            }
        },
    }

    const apiFecther = $fetch.create(fetchOptions);

    const modules: IApiInterface = {
        token: new TokenModule(apiFecther),
        unit: new UnitModule(apiFecther),
        user: new UserModule(apiFecther),
    };

    return {
        provide: {
            api: modules,
        },
    };
})
