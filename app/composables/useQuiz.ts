import {type Ref, ref} from "vue";
import type {IServerApiInterface} from "../types/IServerApiInterface";
import {useNuxtApp} from "nuxt/app";
import {type QuizType} from "../types/moduls/QuizType";

interface IUseQuiz {
    loading: Ref<boolean>
    quizzes: Ref<QuizType[]>
    getQuizzes: () => Promise<void>
}

export const useQuiz = (): IUseQuiz => {
    const {$serverApi}: { $serverApi: IServerApiInterface } = useNuxtApp();

    const loading = ref<boolean>(false)
    const quizzes = ref<QuizType[]>([])

    const getQuizzes = async () => {
        loading.value = true

        try {
            const {data} = await $serverApi.quiz.getQuizzes()
            quizzes.value = data

        } catch (e) {
            throw (e)
        } finally {
            loading.value = false
        }
    }

    return {loading, quizzes, getQuizzes}
}
