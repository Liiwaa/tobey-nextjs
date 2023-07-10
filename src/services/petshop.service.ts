import { PetshopAPI } from "@/constants/api-routes";
import { Petshop } from "@/interfaces/components/Petshop";
import { UserRegistrationData } from "@/interfaces/components/UserPetshopOwnerRegistrationData";
import { OwnerDTO } from "@/interfaces/dto/ownerDTO";
import { PetshopDTO } from "@/interfaces/dto/petshopDTO";
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