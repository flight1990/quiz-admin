import {type Ref, ref} from "vue";
import type {IApiInterface} from "../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";
import {useAuthStore} from "../stores/authStore";
import type {TokenType} from "../types/moduls/TokenType";

interface IUseToke {
    processing: Ref<boolean>
    logout: () => Promise<void>
    login: (payload: { username: string, password: string }) => Promise<void>
}

export const useToken = (): IUseToke => {
    const {$api}: { $api: IApiInterface } = useNuxtApp();
    const authStore = useAuthStore()

    const processing = ref<boolean>(false)

    const login = async (payload: {
        username: string
        password: string
    }) => {
        processing.value = true

        try {
            const {access_token, refresh_token}: TokenType = await $api.token.token(payload)
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
            await $api.token.logout()
            authStore.logout()
        } catch (e) {
            throw e
        } finally {
            processing.value = false
        }
    }

    return {logout, login, processing}
}
