import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {QuestionType} from "../../../app/types/moduls/QuestionType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<QuestionType[]>>(event, "api/v1/admin/questions", { method: "GET" });
});
