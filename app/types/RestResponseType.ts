export type RestResponseType<T> = {
    data: T;
    message: string;
    error?: any;
};