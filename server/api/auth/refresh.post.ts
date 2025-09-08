import {apiClient} from "../../utils/apiClient";
import type {H3Event} from "h3";
import type {RestResponseType} from "~/types/RestResponseType";
import {getCookie} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    const config = useRuntimeConfig()

    return apiClient<RestResponseType<any>>(event, "oauth/token", {
        method: "POST",
        body: {
            refresh_token: getCookie(event,'refresh_token'),
            grant_type: 'refresh_token',
            client_secret: config.public.client_secret as string,
            client_id: config.public.client_id as string,
            scopes: '*'
        }
    });
});
