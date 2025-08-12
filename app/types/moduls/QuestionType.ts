import type {OptionType} from "./OptionType";
import type {QuizType} from "./QuizType";

export type QuestionType = {
    id: number
    text: string
    order: number
    answer_timer: number | null
    quiz_id: number
    created_at: string
    updated_at: string
    options?: OptionType[]
    quiz?: QuizType
}