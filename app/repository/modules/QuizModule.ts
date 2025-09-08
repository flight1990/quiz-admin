import HttpFactory from "../Factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {QuizType} from "../../types/moduls/QuizType";

export default class QuizModule extends HttpFactory {
    private  RESOURCE = 'api/quizzes'

    public async getQuizzes(params?: {with?: string}): Promise<RestResponseType<QuizType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}