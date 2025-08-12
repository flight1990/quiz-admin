import type {UnitType} from "./UnitType";
import type {QuestionType} from "./QuestionType";
import type {OptionType} from "./OptionType";

export type GuestUserType = {
    id: number
    uuid: string
    name: string | null
    ip_address: string | null
    user_agent: string | null
    unit_id: number | null
    created_at: string
    updated_at: string
    unit?: UnitType
    question?: QuestionType
    options?: OptionType[]
}