import {type Ref, ref} from "vue";
import {type UnitType} from "../types/moduls/UnitType";
import type {IServerApi} from "../types/IServerApi";
import {useNuxtApp} from "nuxt/app";

interface IUseUnit {
    loading: Ref<boolean>
    units: Ref<UnitType[]>
    getUnits: () => Promise<void>
}

export const useUnit = (): IUseUnit => {
    const {$serverApi}: { $serverApi: IServerApi } = useNuxtApp();

    const loading = ref<boolean>(false)
    const units = ref<UnitType[]>([])

    const getUnits = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.unit.getUnits()
            units.value = data

        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, units, getUnits}
}
