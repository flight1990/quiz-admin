import {reactive, type Ref, ref} from "vue";
import {type UnitType} from "../types/moduls/UnitType";
import type {IServerApi} from "../types/IServerApi";
import {useNuxtApp} from "nuxt/app";
import {type UserType} from "../types/moduls/UserType";

interface IUseUser {
    loading: Ref<boolean>
    users: Ref<UnitType[]>
    getUsers: () => Promise<void>
}

export const useUser = (): IUseUser => {
    const {$serverApi}: { $serverApi: IServerApi } = useNuxtApp();

    const loading = ref<boolean>(false)
    const users = ref<UserType[]>([])

    const params = reactive({
        with: 'roles'
    })

    const getUsers = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.user.getUsers(params)
            users.value = data
        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, users, getUsers}
}
