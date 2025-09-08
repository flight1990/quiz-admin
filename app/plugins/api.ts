import {$fetch} from 'ofetch';
import type {FetchOptions} from 'ofetch';
import type {IApiInterface} from "../types/IApiInterface";

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

            const token = authStore.accessToken || accessTokenCookie.value;

            if (token) {
                // @ts-ignore
                options.headers["Authorization"] = `Bearer ${token}`;
            }
        },
    }

    const apiFecther = $fetch.create(fetchOptions);

    const modules: IApiInterface = {

    };

    return {
        provide: {
            api: modules,
        },
    };
})
