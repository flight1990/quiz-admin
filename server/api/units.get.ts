import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {UnitType} from "../../app/types/moduls/UnitType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<UnitType[]>>(event, "api/v1/admin/units", { method: "GET" });
});
