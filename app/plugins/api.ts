import {$fetch} from 'ofetch';
import type {FetchOptions} from 'ofetch';
import type {IApiInterface} from "../types/IApiInterface";
import TokenModule from "../repository/modules/TokenModule";
import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";
import RoleModule from "../repository/modules/RoleModule";
import QuizModule from "../repository/modules/QuizModule";
import QuestionModule from "../repository/modules/QuestionModule";
import OptionModule from "../repository/modules/OptionModule";
import AnswerModule from "../repository/modules/AnswerModule";
import GuestUserModule from "../repository/modules/GuestUserModule";

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
        role: new RoleModule(apiFecther),
        quiz: new QuizModule(apiFecther),
        question: new QuestionModule(apiFecther),
        option: new OptionModule(apiFecther),
        answer: new AnswerModule(apiFecther),
        guestUser: new GuestUserModule(apiFecther),
    };

    return {
        provide: {
            api: modules,
        },
    };
})
