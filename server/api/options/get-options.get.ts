import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {OptionType} from "../../../app/types/moduls/OptionType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<OptionType[]>>(event, "api/v1/admin/options", { method: "GET" });
});
