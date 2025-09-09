import { $fetch } from "ofetch";
import { getCookie, H3Event } from "h3";

export const apiClient = async <T>(
    event: H3Event,
    url: string,
    options: Parameters<typeof $fetch>[1] = {}
): Promise<T> => {

    const config = useRuntimeConfig();
    const token = getCookie(event, "access_token");

    const baseURL = config.public.api as string;

    return $fetch<T>(baseURL + url, {
        method: options.method || "GET",
        body: options.body || undefined,
        headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {}),
        },
    });
};
