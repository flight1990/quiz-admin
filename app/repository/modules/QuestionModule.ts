import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {QuestionType} from "../../types/moduls/QuestionType";

export default class QuestionModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/questions'

    public async getQuestions(params?: {with?: string}): Promise<RestResponseType<QuestionType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}