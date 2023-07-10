import { LoginAPI } from "@/constants/api-routes";
import { ILogin, LoginDTO, LoginModel } from "@/interfaces/components/Login";
import { mapLoginToLoginDTO } from "@/models/login";
import { postRequest } from "./genericApi.service";
import { ServiceResponse } from "@/models/serviceResponse";
import { handleLoginResponse } from "@/utils/auth";

export const callLogin = async (loginData: ILogin) => {
  const LoginDataDTO: LoginDTO = mapLoginToLoginDTO(loginData);

  const response: ServiceResponse<LoginModel> = new ServiceResponse();

  try {
    const result = await postRequest<LoginModel>(LoginAPI, LoginDataDTO);
    console.log('result', result);
    handleLoginResponse(result.data); // Pass only the 'data' property to the handleLoginResponse function
    response.payload = result.data;
  } catch (error: any) {
    response.error = error.errors;
    response.message = error.message;
  }

  return response;
};
