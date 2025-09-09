import HttpFactory from "../RepositoryFactory";
import type {RestResponseType} from "~/types/RestResponseType";
import {HttpMethods} from "../../types/HttpMethods";
import type {UserType} from "../../types/moduls/UserType";

export default class UserModule extends HttpFactory {

    private  RESOURCE = 'api/users'

    public async getUsers(params?: {with?: string}): Promise<RestResponseType<UserType[]>> {
        return await this.call(HttpMethods.get, `${this.RESOURCE}/get-users`, null, {params})
    }
}