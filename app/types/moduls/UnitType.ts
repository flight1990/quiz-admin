import type {GuestUserType} from "./GuestUserType";

export type UnitType = {
    id: number
    name: string
    created_at: string
    updated_at: string
    guest_users?: GuestUserType[]
}