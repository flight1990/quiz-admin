import {apiClient} from "../../utils/apiClient";
import type { H3Event } from "h3";
import type { RestResponseType } from "~/types/RestResponseType";
import {QuizType} from "../../../app/types/moduls/QuizType";

export default defineEventHandler(async (event: H3Event) => {
    return apiClient<RestResponseType<QuizType[]>>(event, "api/v1/admin/quizzes", { method: "GET" });
});
