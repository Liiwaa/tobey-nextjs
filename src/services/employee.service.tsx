import { EmployeeAPI } from "@/constants/api-routes";
import { EmployeeDTO, IEmployee } from "@/interfaces/components/Employee";
import { mapEmployeeDTOsToIEmployees } from "@/models/employee";
import { ServiceResponse } from "@/models/serviceResponse";
import { getRequest } from "./genericApi.service";

export const getEmployeeList = async (name?: string): Promise<ServiceResponse<IEmployee[]>> => {
    const response: ServiceResponse<IEmployee[]> = new ServiceResponse();
  
    try {
    const url = `${EmployeeAPI}${name ? `?name=${encodeURIComponent(name)}` : ''}`;
      const result = await getRequest<EmployeeDTO[]>(url);
      response.payload = mapEmployeeDTOsToIEmployees(result.data);
    } catch (error: any) {
      response.error = error.errors;
      response.message = error.message;
    }
  
    return response;
  };
