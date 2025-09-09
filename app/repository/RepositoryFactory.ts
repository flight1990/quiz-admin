import type {$Fetch, FetchOptions} from "ofetch";
import type {Nullable} from "../types/Nullable";
class FetchFactory {
    private readonly $fetch: $Fetch;

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher;
    }

    async call<T>(
        method: string,
        url: string,
        data?: Nullable<object>,
        fetchOptions?: FetchOptions<"json">,
    ): Promise<T> {
        return this.$fetch<T>(`${url}`, {
            method,
            body: data,
            query: {},
            ...fetchOptions,
        });
    }
}

export default FetchFactory;
