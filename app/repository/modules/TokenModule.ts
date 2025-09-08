import HttpFactory from "../Factory";
import {HttpMethods} from "../../types/HttpMethods";
import type {TokenType} from "../../types/moduls/TokenType";

export default class TokenModule extends HttpFactory {

    private  RESOURCE = 'oauth/token'

    public async token({username, password}: {username: string, password: string}): Promise<TokenType> {
        const config = useRuntimeConfig();

        return await this.call(HttpMethods.post, `${this.RESOURCE}`, {
            username,
            password,
            grant_type: 'password',
            client_secret: config.public.client_secret as string,
            client_id: config.public.client_id as string,
            scopes: '*'
        })
    }

    public async refresh({refresh_token}: {refresh_token: string}): Promise<TokenType> {
        const config = useRuntimeConfig();

        return await this.call(HttpMethods.post, `${this.RESOURCE}`, {
            refresh_token,
            grant_type: 'refresh_token',
            client_secret: config.public.client_secret as string,
            client_id: config.public.client_id as string,
            scopes: '*'
        })
    }

    public async logout(): Promise<void> {
        return await this.call(HttpMethods.delete, `api/token/revoke`)
    }
}