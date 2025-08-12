import type {QuestionType} from "./QuestionType";

export type QuizType = {
    id: number
    title: string
    description: string | null
    user_id: number | null
    is_anonymous: boolean
    is_active: boolean
    created_at: string
    updated_at: string
    questions?: QuestionType[]
}