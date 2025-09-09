import {reactive, type Ref, ref} from "vue";
import type {IServerApi} from "../types/IServerApi";
import {useNuxtApp} from "nuxt/app";
import {type AnswerType} from "../types/moduls/AnswerType";

interface IUseAnswer {
    loading: Ref<boolean>
    answers: Ref<AnswerType[]>
    getAnswers: () => Promise<void>
}

export const useAnswer = (): IUseAnswer => {
    const {$serverApi}: { $serverApi: IServerApi } = useNuxtApp();

    const loading = ref<boolean>(false)
    const answers = ref<AnswerType[]>([])

    const params = reactive({
        with: 'guestUser,options,question'
    })

    const getAnswers = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.answer.getAnswers(params)
            answers.value = data

        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, answers, getAnswers}
}
