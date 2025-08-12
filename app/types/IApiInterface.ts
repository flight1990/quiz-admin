import TokenModule from "../repository/modules/TokenModule";
import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";
import RoleModule from "../repository/modules/RoleModule";
import QuizModule from "../repository/modules/QuizModule";
import QuestionModule from "../repository/modules/QuestionModule";
import OptionModule from "../repository/modules/OptionModule";
import AnswerModule from "../repository/modules/AnswerModule";
import GuestUserModule from "../repository/modules/GuestUserModule";
export interface IApiInterface {
    token: TokenModule
    unit: UnitModule
    user: UserModule
    role: RoleModule
    quiz: QuizModule
    question: QuestionModule
    option: OptionModule
    answer: AnswerModule
    guestUser: GuestUserModule
}