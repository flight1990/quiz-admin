import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {RoleType} from "../../types/moduls/RoleType";

export default class RoleModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/roles'

    public async getRoles(params?: {with?: string}): Promise<RestResponseType<RoleType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}