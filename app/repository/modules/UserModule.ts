import HttpFactory from "../factory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {UserType} from "../../types/moduls/UserType";

export default class UserModule extends HttpFactory {

    private  RESOURCE = 'api/v1/admin/users'

    public async getUsers(params?: {with?: string}): Promise<RestResponseType<UserType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}`, null, {params})
    }
}