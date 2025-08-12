import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {OptionType} from "../../types/moduls/OptionType";

export default class OptionModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/options'

    public async getOptions(params?: {with?: string}): Promise<RestResponseType<OptionType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}