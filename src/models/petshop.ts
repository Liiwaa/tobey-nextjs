import { Petshop } from "@/interfaces/components/Petshop";
import { PetshopDTO } from "@/interfaces/dto/petshopDTO";

export const mapPetshopToPetshopDTO = (petshop: Petshop): PetshopDTO => ({
    name: petshop.petshopName,
    phone_number: petshop.phoneNumber,
    email: petshop.email,
    establishment_date: petshop.establishmentDate,
    opening_time: petshop.openingTime,
    closing_time: petshop.closingTime,
    address_id: petshop.address,
  });