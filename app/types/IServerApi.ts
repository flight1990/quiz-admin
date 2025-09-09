import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";
import QuizModule from "../repository/modules/QuizModule";
import QuestionModule from "../repository/modules/QuestionModule";
import RoleModule from "../repository/modules/RoleModule";
import OptionModule from "../repository/modules/OptionModule";
import AnswerModule from "../repository/modules/AnswerModule";
import GuestUserModule from "../repository/modules/GuestUserModule";
import TokenModule from "../repository/modules/TokenModule";
import ExternalObjectModule from "../repository/modules/ExternalObjectModule";

export interface IServerApi {
    unit: UnitModule
    user: UserModule
    quiz: QuizModule
    question: QuestionModule
    role: RoleModule
    option: OptionModule
    answer: AnswerModule
    guestUser: GuestUserModule
    token: TokenModule
    externalObject: ExternalObjectModule
}