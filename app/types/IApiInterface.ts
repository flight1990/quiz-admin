import TokenModule from "../repository/modules/TokenModule";
import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";

export interface IApiInterface {
    token: TokenModule
    unit: UnitModule
    user: UserModule
}