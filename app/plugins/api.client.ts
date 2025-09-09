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
import {useAuthStore} from "../stores/authStore";
import {createApiFetcher} from "../../server/utils/createApiFetcher";

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore();
    const apiFetcher = createApiFetcher($fetch, authStore) as $Fetch

    const modules: IServerApi = {
        unit: new UnitModule(apiFetcher),
        user: new UserModule(apiFetcher),
        quiz: new QuizModule(apiFetcher),
        question: new QuestionModule(apiFetcher),
        role: new RoleModule(apiFetcher),
        option: new OptionModule(apiFetcher),
        answer: new AnswerModule(apiFetcher),
        guestUser: new GuestUserModule(apiFetcher),
        token: new TokenModule(apiFetcher),
    };

    return {
        provide: {
            serverApi: modules,
        },
    };
});
