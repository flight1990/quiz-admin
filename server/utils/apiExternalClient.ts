import { $fetch } from "ofetch";
import { H3Event } from "h3";

export const apiExternalClient = async <T>(
    event: H3Event,
    url: string,
    options: Parameters<typeof $fetch>[1] = {},
    token?: string
): Promise<T> => {
    return $fetch<T>(url, {
        method: options.method || "GET",
        body: options.body || undefined,
        headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {}),
        },
    });
};
