import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {UserType} from "../../app/types/moduls/UserType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<UserType[]>>(event, "api/v1/admin/options", { method: "GET" });
});
