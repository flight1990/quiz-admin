import TokenModule from "../../app/repository/modules/TokenModule";
import {useAuthStore} from "../../app/stores/authStore";
import type {$Fetch} from "ofetch";

export const createApiFetcher = ($fetchInstance: $Fetch, authStore: ReturnType<typeof useAuthStore>) => {
    return async <T>(url: string, options: any = {}): Promise<T> => {
        try {
            return await $fetchInstance<T>(url, options);
        } catch (err: any) {
            if (err?.response?.status === 401) {
                const tokenModule = new TokenModule($fetchInstance);
                const newTokens = await tokenModule.refresh();
                authStore.login(newTokens.access_token, newTokens.refresh_token);

                return await $fetchInstance<T>(url, {
                    ...options,
                    headers: {
                        ...options.headers,
                        Authorization: `Bearer ${newTokens.access_token}`,
                    },
                });
            }
            throw err;
        }
    };
};
