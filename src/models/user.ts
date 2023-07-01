import { UserRegistrationData } from "@/interfaces/components/UserPetshopOwnerRegistrationData";
import { UserDTO } from "@/interfaces/dto/userDTO";

export const mapUserRegistrationDataToOwnerDTO = (userData: UserRegistrationData): UserDTO => ({
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    password: userData.password,
    start_date: userData.dateOfBirth,
  });