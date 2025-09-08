import {apiClient} from "../../utils/apiClient";
import type {H3Event} from "h3";
import type {RestResponseType} from "~/types/RestResponseType";

export default defineEventHandler(async (event: H3Event) => {

    const config = useRuntimeConfig()
    const body = await readBody(event)

    return apiClient<RestResponseType<any>>(event, "oauth/token", {
        method: "POST",
        body: {
            ...body,
            grant_type: 'password',
            client_secret: config.public.client_secret as string,
            client_id: config.public.client_id as string,
            scopes: '*'
        }
    });
});
