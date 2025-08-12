import type {QuestionType} from "./QuestionType";

export type OptionType = {
    id: number
    text: string
    question_id: number
    is_correct: boolean
    is_other: boolean
    created_at: string
    updated_at: string
    question?: QuestionType
}