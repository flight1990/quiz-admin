import {type Ref, ref} from "vue";
import {useNuxtApp} from "nuxt/app";
import {useAuthStore} from "../stores/authStore";
import type {TokenType} from "../types/moduls/TokenType";
import type {IServerApiInterface} from "../types/IServerApiInterface";

interface IUseToke {
    processing: Ref<boolean>
    logout: () => Promise<void>
    refresh: () => Promise<void>
    login: (payload: { username: string, password: string }) => Promise<void>
}

export const useToken = (): IUseToke => {
    const {$serverApi}: { $serverApi: IServerApiInterface } = useNuxtApp();
    const authStore = useAuthStore()

    const processing = ref<boolean>(false)

    const login = async (payload: {
        username: string
        password: string
    }) => {
        processing.value = true

        try {
            const {access_token, refresh_token}: TokenType = await $serverApi.token.token(payload)
            authStore.login(access_token, refresh_token)
        } catch (e) {
            throw e
        } finally {
            processing.value = false
        }
    }

    const refresh = async () => {
        processing.value = true

        try {
            const {access_token, refresh_token}: TokenType = await $serverApi.token.refresh()
            authStore.login(access_token, refresh_token)

        } catch (e) {
            throw e
        } finally {
            processing.value = false
        }
    }

    const logout = async () => {
        processing.value = true

        try {
            await $serverApi.token.logout()
            authStore.logout()
        } catch (e) {
            throw e
        } finally {
            processing.value = false
        }
    }

    return {logout, login, processing, refresh}
}
