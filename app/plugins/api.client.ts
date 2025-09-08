import {$fetch} from "ofetch";
import {type IServerApiInterface} from "../types/IServerApiInterface";
import UnitModule from "../repository/modules/UnitModule";
import UserModule from "../repository/modules/UserModule";
import QuizModule from "../repository/modules/QuizModule";
import QuestionModule from "../repository/modules/QuestionModule";
import RoleModule from "../repository/modules/RoleModule";
import OptionModule from "../repository/modules/OptionModule";
import AnswerModule from "../repository/modules/AnswerModule";
import GuestUserModule from "../repository/modules/GuestUserModule";

export default defineNuxtPlugin((nuxtApp) => {
    const apiFetcher = $fetch.create({});

    const modules: IServerApiInterface = {
        unit: new UnitModule(apiFetcher),
        user: new UserModule(apiFetcher),
        quiz: new QuizModule(apiFetcher),
        question: new QuestionModule(apiFetcher),
        role: new RoleModule(apiFetcher),
        option: new OptionModule(apiFetcher),
        answer: new AnswerModule(apiFetcher),
        guestUser: new GuestUserModule(apiFetcher),
    };

    return {
        provide: {
            serverApi: modules,
        },
    };
});
