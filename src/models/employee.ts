import { EmployeeDTO, IEmployee } from "@/interfaces/components/Employee";

export const mapIEmployeeToEmployeeDTO = (employee: Partial<IEmployee>): Partial<EmployeeDTO> => ({
    ...(employee.id && { id: employee.id }),
    ...(employee.firstName && { first_name: employee.firstName }),
    ...(employee.lastName && { last_name: employee.lastName }),
    ...(employee.email && { email: employee.email }),
    ...(employee.petshopId && { petshop_id: employee.petshopId }),
    ...(employee.addressId && { address_id: employee.addressId }),
    ...(employee.emailVerifiedAt && { email_verified_at: employee.emailVerifiedAt }),
    ...(employee.createdAt && { created_at: employee.createdAt }),
    ...(employee.updatedAt && { updated_at: employee.updatedAt }),
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
    employees.map((employee) => mapIEmployeeToEmployeeDTO(employee) as EmployeeDTO);

export const mapEmployeeDTOsToIEmployees = (employeeDTOs: EmployeeDTO[]): IEmployee[] =>
    employeeDTOs.map(mapEmployeeDTOToIEmployee);
