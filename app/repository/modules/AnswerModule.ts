import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {AnswerType} from "../../types/moduls/AnswerType";

export default class AnswerModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/answers'

    public async getAnswers(params?: {with?: string}): Promise<RestResponseType<AnswerType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}