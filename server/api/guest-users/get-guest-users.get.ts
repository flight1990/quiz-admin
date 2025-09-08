import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {GuestUserType} from "../../../app/types/moduls/GuestUserType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<GuestUserType[]>>(event, "api/v1/admin/guest-users", { method: "GET" });
});
