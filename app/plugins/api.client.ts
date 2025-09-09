import {type $Fetch, $fetch} from "ofetch";
import type {IServerApi} from "../types/IServerApi";
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
import {useAuthStore} from "../stores/authStore";
import {createApiFetcher} from "../../server/utils/createApiFetcher";

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore();
    const backendFetcher = createApiFetcher($fetch, authStore) as $Fetch

    const modules: IServerApi = {
        unit: new UnitModule(backendFetcher),
        user: new UserModule(backendFetcher),
        quiz: new QuizModule(backendFetcher),
        question: new QuestionModule(backendFetcher),
        role: new RoleModule(backendFetcher),
        option: new OptionModule(backendFetcher),
        answer: new AnswerModule(backendFetcher),
        guestUser: new GuestUserModule(backendFetcher),
        token: new TokenModule(backendFetcher),
        externalObject: new ExternalObjectModule(backendFetcher)
    };

    return {
        provide: {
            serverApi: modules,
        },
    };
});
