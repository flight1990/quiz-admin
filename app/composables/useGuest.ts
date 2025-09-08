import {reactive, type Ref, ref} from "vue";
import type {IServerApiInterface} from "../types/IServerApiInterface";
import {useNuxtApp} from "nuxt/app";
import {type GuestUserType} from "../types/moduls/GuestUserType";

interface IUseGuest {
    loading: Ref<boolean>
    guestUsers: Ref<GuestUserType[]>
    getGuestUsers: () => Promise<void>
}

export const useGuest = (): IUseGuest => {
    const {$serverApi}: { $serverApi: IServerApiInterface } = useNuxtApp();

    const loading = ref<boolean>(false)
    const guestUsers = ref<GuestUserType[]>([])

    const params = reactive({
        with: 'unit'
    })

    const getGuestUsers = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.guestUser.getGuestUsers(params)
            guestUsers.value = data

        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, guestUsers, getGuestUsers}
}
