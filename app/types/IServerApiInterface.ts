import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";
import QuizModule from "../repository/modules/QuizModule";
import QuestionModule from "../repository/modules/QuestionModule";
import RoleModule from "../repository/modules/RoleModule";
import OptionModule from "../repository/modules/OptionModule";
import AnswerModule from "../repository/modules/AnswerModule";
import GuestUserModule from "../repository/modules/GuestUserModule";

export interface IServerApiInterface {
    unit: UnitModule
    user: UserModule
    quiz: QuizModule
    question: QuestionModule
    role: RoleModule
    option: OptionModule
    answer: AnswerModule
    guestUser: GuestUserModule
}