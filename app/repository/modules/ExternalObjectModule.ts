import HttpFactory from "../RepositoryFactory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {AnswerType} from "../../types/moduls/AnswerType";

export default class ExternalObjectModule extends HttpFactory {

    private  RESOURCE = 'api/externals'

    public async getObjects(): Promise<RestResponseType<AnswerType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}/get-objects`)
    }
}