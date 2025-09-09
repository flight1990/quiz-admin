import { $fetch, type FetchContext, type FetchResponse } from "ofetch";
import type { IServerApi } from "../types/IServerApi";

import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";
import QuizModule from "../repository/modules/QuizModule";
import QuestionModule from "../repository/modules/QuestionModule";
import RoleModule from "../repository/modules/RoleModule";
import OptionModule from "../repository/modules/OptionModule";
import AnswerModule from "../repository/modules/AnswerModule";
import GuestUserModule from "../repository/modules/GuestUserModule";
import TokenModule from "../repository/modules/TokenModule";

import { useAuthStore } from "../stores/authStore";

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore();

    const apiFetcher = $fetch.create({
        async onResponseError(
            ctx: FetchContext & { response: FetchResponse<any> }
        ): Promise<void> {
            const { response, options } = ctx;

            if (!response) return;

            if (response.status === 401) {
                try {
                    const tokenModule = new TokenModule($fetch);

                    const newTokens = await tokenModule.refresh();
                    authStore.login(newTokens.access_token, newTokens.refresh_token);

                    await $fetch(ctx.request, {
                        ...options,
                        headers: {
                            ...options.headers,
                            Authorization: `Bearer ${newTokens.access_token}`,
                        },
                    });
                } catch (err) {
                    authStore.logout();
                }
            }
        },
    });

    const modules: IServerApi = {
        unit: new UnitModule(apiFetcher),
        user: new UserModule(apiFetcher),
        quiz: new QuizModule(apiFetcher),
        question: new QuestionModule(apiFetcher),
        role: new RoleModule(apiFetcher),
        option: new OptionModule(apiFetcher),
        answer: new AnswerModule(apiFetcher),
        guestUser: new GuestUserModule(apiFetcher),
        token: new TokenModule(apiFetcher),
    };

    return {
        provide: {
            serverApi: modules,
        },
    };
});
