import { $fetch } from "ofetch";
import { getCookie, createError, H3Event } from "h3";

export const apiClient = async <T>(
    event: H3Event,
    url: string,
    options: Parameters<typeof $fetch>[1] = {}
): Promise<T> => {

    const config = useRuntimeConfig();
    const token = getCookie(event, "access_token");

    if (!token) {
        throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
    }

    const baseURL = config.public.api as string;

    return $fetch<T>(baseURL + url, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            ...(options.headers || {}),
        },
    });
};
