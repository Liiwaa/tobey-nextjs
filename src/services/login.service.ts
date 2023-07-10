import { LoginAPI, PetshopAPI } from "@/constants/api-routes";
import { ILogin, LoginDTO } from "@/interfaces/components/Login";
import { mapLoginToLoginDTO } from "@/models/login";
import { postRequest } from "./genericApi.service";
import { ServiceResponse } from "@/models/serviceResponse";

export const callLogin = async (loginData: ILogin) => {
    const LoginDataDTO: LoginDTO = mapLoginToLoginDTO(loginData);
  
    const response: ServiceResponse<LoginDTO> = new ServiceResponse();
  
    try {
      const result = await postRequest<LoginDTO>(LoginAPI, LoginDataDTO);
      console.log('result', result);
      response.payload = result.data;
    } catch (error: any) {
      response.error = error.errors;
      response.message = error.message;
    }
  
    return response;
  }
  