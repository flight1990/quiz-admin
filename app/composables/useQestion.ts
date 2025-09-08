import {reactive, type Ref, ref} from "vue";
import type {IServerApiInterface} from "../types/IServerApiInterface";
import {useNuxtApp} from "nuxt/app";
import {type QuestionType} from "../types/moduls/QuestionType";

interface IUseQuestion {
    loading: Ref<boolean>
    questions: Ref<QuestionType[]>
    getQuestions: () => Promise<void>
}

export const useQuestion = (): IUseQuestion => {
    const {$serverApi}: { $serverApi: IServerApiInterface } = useNuxtApp();

    const loading = ref<boolean>(false)
    const questions = ref<QuestionType[]>([])

    const params = reactive({
        with: 'quiz'
    })

    const getQuestions = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.question.getQuestions(params)
            questions.value = data

        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, questions, getQuestions}
}
