import { LoginAPI, PetshopAPI } from "@/constants/api-routes";
import { ILogin, LoginDTO } from "@/interfaces/components/Login";
import { Petshop } from "@/interfaces/components/Petshop";
import { UserRegistrationData } from "@/interfaces/components/UserPetshopOwnerRegistrationData";
import { OwnerDTO } from "@/interfaces/dto/ownerDTO";
import { PetshopDTO } from "@/interfaces/dto/petshopDTO";
import { mapLoginToLoginDTO } from "@/models/login";
import { mapPetshopToPetshopDTO } from "@/models/petshop";
import { ServiceResponse } from "@/models/serviceResponse";
import { mapUserRegistrationDataToOwnerDTO } from "@/models/user";
import { postRequest } from "./genericApi.service";

interface PetshopWithOwnerDTO extends PetshopDTO {
  owner: OwnerDTO;
}

export const createPetshopWithOwner = async (petshop: Petshop, ownerData: UserRegistrationData) => {
  const petshopDTO: PetshopDTO = mapPetshopToPetshopDTO(petshop);
  const ownerDTO: OwnerDTO = mapUserRegistrationDataToOwnerDTO(ownerData);

  const petshopWithOwnerDTO: PetshopWithOwnerDTO = {
    ...petshopDTO,
    owner: ownerDTO
  };

  const response: ServiceResponse<PetshopWithOwnerDTO> = new ServiceResponse();

  try {
    const result = await postRequest<PetshopWithOwnerDTO>(PetshopAPI, petshopWithOwnerDTO);
    response.payload = result.data;
  } catch (error: any) {
    response.error = error.errors;
    response.message = error.message;
  }

  return response;
}

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
