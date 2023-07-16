import { EmployeeDTO, IEmployee } from "@/interfaces/components/Employee";

export const mapIEmployeeToEmployeeDTO = (employee: IEmployee): EmployeeDTO => ({
    id: employee.id,
    first_name: employee.firstName,
    last_name: employee.lastName,
    email: employee.email,
    petshop_id: employee.petshopId,
    address_id: employee.addressId,
    email_verified_at: employee.emailVerifiedAt,
    created_at: employee.createdAt,
    updated_at: employee.updatedAt,
});

export const mapEmployeeDTOToIEmployee = (employeeDTO: EmployeeDTO): IEmployee => ({
    id: employeeDTO.id,
    firstName: employeeDTO.first_name,
    lastName: employeeDTO.last_name,
    email: employeeDTO.email,
    petshopId: employeeDTO.petshop_id,
    addressId: employeeDTO.address_id,
    emailVerifiedAt: employeeDTO.email_verified_at,
    createdAt: employeeDTO.created_at,
    updatedAt: employeeDTO.updated_at,
});

export const mapIEmployeesToEmployeeDTOs = (employees: IEmployee[]): EmployeeDTO[] =>
  employees.map(mapIEmployeeToEmployeeDTO);

export const mapEmployeeDTOsToIEmployees = (employeeDTOs: EmployeeDTO[]): IEmployee[] =>
  employeeDTOs.map(mapEmployeeDTOToIEmployee);