import {type Ref, ref} from "vue";
import {navigateTo, useNuxtApp} from "nuxt/app";
import {useAuthStore} from "../stores/authStore";
import type {TokenType} from "../types/moduls/TokenType";
import type {IServerApi} from "../types/IServerApi";
import type {LoginFormType} from "../types/forms/LoginFormType";

interface IUseToke {
    processing: Ref<boolean>
    logout: () => Promise<void>
    refresh: () => Promise<void>
    login: (payload: { username: string, password: string }) => Promise<void>
}

export const useToken = (): IUseToke => {
    const {$serverApi}: { $serverApi: IServerApi } = useNuxtApp();
    const authStore = useAuthStore()

    const processing = ref<boolean>(false)

    const login = async (payload: LoginFormType) => {
        processing.value = true

        try {
            const {access_token, refresh_token}: TokenType = await $serverApi.token.token(payload)
            authStore.login(access_token, refresh_token)
            navigateTo('/')
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
            navigateTo('/login')
        } catch (e) {
            throw e
        } finally {
            processing.value = false
        }
    }

    return {logout, login, processing, refresh}
}
