import { IPageInfo } from "../interfaces/pagination/pageInfo.interface";

export class ServiceResponse<T> {
    constructor(public payload?: T,
        public error?: any,
        public message: string = '',
        public pagination?: IPageInfo,
        public data?: any) { }

    public get isSuccess(): boolean {
        return !!this.payload && !this.error
    }

    public static getErrorResponse(message: string, error?: any, data?: any): ServiceResponse<any> {
        return new ServiceResponse(undefined, error, message, data);
    }
}