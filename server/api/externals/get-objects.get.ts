import type {H3Event} from "h3";
import type {RestResponseType} from "~/types/RestResponseType";
import {apiExternalClient} from "../../utils/apiExternalClient";

export default defineEventHandler(async (event: H3Event) => {
    return apiExternalClient<RestResponseType<any[]>>(
        event,
        "https://api.restful-api.dev/objects",
        {method: "GET"},
        'some token here'
    );
});
