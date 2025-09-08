import HttpFactory from "../Factory";
import {HttpMethods} from "../../types/HttpMethods";
import type {TokenType} from "../../types/moduls/TokenType";

export default class TokenModule extends HttpFactory {

    private  RESOURCE = 'oauth/token'

    public async token({username, password}: {username: string, password: string}): Promise<TokenType> {
        return await this.call(HttpMethods.post, `/api/auth/login`, {
            username,
            password
        })
    }

    public async refresh(): Promise<TokenType> {
        return await this.call(HttpMethods.post, `/api/auth/refresh`)
    }

    public async logout(): Promise<void> {
        return await this.call(HttpMethods.delete, `/api/auth/logout`)
    }
}