import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {UnitType} from "../../types/moduls/UnitType";

export default class UnitModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/units'

    public async getUnits(): Promise<RestResponseType<UnitType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null)
    }
}