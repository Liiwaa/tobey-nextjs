import IServerResponse from "./ServerResponse";

export default interface IServerErrorResponse extends IServerResponse {
    errors: any,
    data?: any,
    response?: any
} 