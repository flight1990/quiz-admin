import {apiClient} from "../../utils/apiClient";
import type {H3Event} from "h3";
import type {RestResponseType} from "~/types/RestResponseType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<any>>(event, "api/token/revoke", {
        method: "DELETE"
    });
});
