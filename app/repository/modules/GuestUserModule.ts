import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {GuestUserType} from "../../types/moduls/GuestUserType";

export default class GuestUserModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/guest-users'

    public async getGuestUsers(params?: {with?: string}): Promise<RestResponseType<GuestUserType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}