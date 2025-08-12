import type {PermissionType} from "./PermissionType";

export type RoleType = {
    id: number
    name: string
    created_at: string
    updated_at: string
    permissions?: PermissionType[]
}