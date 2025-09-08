import {reactive, type Ref, ref} from "vue";
import type {IServerApiInterface} from "../types/IServerApiInterface";
import {useNuxtApp} from "nuxt/app";
import {type OptionType} from "../types/moduls/OptionType";

interface IUseOption {
    loading: Ref<boolean>
    options: Ref<OptionType[]>
    getOptions: () => Promise<void>
}

export const useOption = (): IUseOption => {
    const {$serverApi}: { $serverApi: IServerApiInterface } = useNuxtApp();

    const loading = ref<boolean>(false)
    const options = ref<OptionType[]>([])

    const params = reactive({
        with: 'question'
    })

    const getOptions = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.option.getOptions(params)
            options.value = data

        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, options, getOptions}
}
