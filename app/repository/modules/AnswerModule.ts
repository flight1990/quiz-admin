import HttpFactory from "../Factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {AnswerType} from "../../types/moduls/AnswerType";

export default class AnswerModule extends HttpFactory {

    private  RESOURCE = 'api/answers'

    public async getAnswers(params?: {with?: string}): Promise<RestResponseType<AnswerType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}