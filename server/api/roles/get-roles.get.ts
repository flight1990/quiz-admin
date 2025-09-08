import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {RoleType} from "../../../app/types/moduls/RoleType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<RoleType[]>>(event, "api/v1/admin/roles", { method: "GET" });
});
