import type {UnitType} from "./UnitType";
import type {RoleType} from "./RoleType";
import type {QuizType} from "./QuizType";

export type UserType = {
    id: number
    name: string
    email: string
    created_at: string
    updated_at: string
    unit?: UnitType
    roles?: RoleType[]
    quizzes?: QuizType[]
}