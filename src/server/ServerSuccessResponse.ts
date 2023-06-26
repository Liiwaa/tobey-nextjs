import IServerResponse from "./ServerResponse";

export default interface IServerSuccessResponse<T> extends IServerResponse {
    data: T
}