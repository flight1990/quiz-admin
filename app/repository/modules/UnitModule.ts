import HttpFactory from "../Factory";
import type { RestResponseType } from "~/types/RestResponseType";
import {type UnitType} from "../../types/moduls/UnitType";
import { HttpMethods } from "~/types/HttpMethods";

export default class UnitModule extends HttpFactory {
    private RESOURCE = "api/units"

    public async getUnits(): Promise<RestResponseType<UnitType[]>> {
        return this.call<RestResponseType<UnitType[]>>(HttpMethods.get, `${this.RESOURCE}/get-units`);
    }
}
