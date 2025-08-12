import type {QuestionType} from "./QuestionType";
import type {GuestUserType} from "./GuestUserType";
import type {OptionType} from "./OptionType";

export type AnswerType = {
    id: number
    question_id: number
    guest_user_id: number
    other: string | null
    created_at: string
    updated_at: string
    question?: QuestionType
    guest_user?: GuestUserType
    options?: OptionType[]
}