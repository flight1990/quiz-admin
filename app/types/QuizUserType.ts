import type {QuizType} from "./QuizType";
import type {GuestUserType} from "./GuestUserType";

export type QuizUserType = {
    id: number
    quiz_id: number
    guest_user_id: number
    created_at: string
    updated_at: string
    completed_at: string
    quiz?: QuizType
    guest_user?: GuestUserType
}