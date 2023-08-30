import { EmployeeDTO, IEmployee } from "@/interfaces/components/Employee";

export const mapIEmployeeToEmployeeDTO = (employee: Partial<IEmployee>): Partial<EmployeeDTO> => ({
    ...(employee.id && { id: employee.id }),
    ...(employee.firstName && { first_name: employee.firstName }),
    ...(employee.lastName && { last_name: employee.lastName }),
    ...(employee.email && { email: employee.email }),
    ...(employee.gender && { gender: employee.gender == "female" ? "female" : "male" }),
    ...(employee.startDate && { start_Date: employee.startDate }),
    ...(employee.endDate && { end_date: employee.endDate }),
    ...(employee.phone && { phone: employee.phone }),
    ...(employee.dateOfBirth && { date_of_birth: employee.dateOfBirth }),
    ...(employee.tagline && { tagline: employee.tagline }),
    ...(employee.rating && { rating: employee.rating }),
    ...(employee.petshopId && { petshop_id: parseInt(employee.petshopId) }),
    ...(employee.addressId && { address_id: parseInt(employee.addressId) }),
    ...(employee.emailVerifiedAt && { email_verified_at: employee.emailVerifiedAt }),
    ...(employee.createdAt && { created_at: employee.createdAt }),
    ...(employee.updatedAt && { updated_at: employee.updatedAt }),
});

export const mapEmployeeDTOToIEmployee = (employeeDTO: EmployeeDTO): IEmployee => ({
    id: employeeDTO.id,
    firstName: employeeDTO.first_name,
    lastName: employeeDTO.last_name,
    email: employeeDTO.email,
    gender: employeeDTO.gender as "male"|"female",
    startDate: employeeDTO.start_date,
    ...(employeeDTO.end_date && { endDate: employeeDTO.end_date }),
    job: employeeDTO.employee_job.job.value,
    jobId: employeeDTO.employee_job.job_id.toString(),
    ...(employeeDTO.phone && { phone: employeeDTO.phone }),
    ...(employeeDTO.date_of_birth && { dateOfBirth: employeeDTO.date_of_birth }),
    ...(employeeDTO.tagline && { tagline: employeeDTO.tagline }),
    ...(employeeDTO.rating && { rating: employeeDTO.rating }),
    ...(employeeDTO.voters_count && { votersCount: employeeDTO.voters_count }),

    petshopId: employeeDTO.petshop_id.toString(),
    addressId: employeeDTO.address_id?.toString() ?? null,
    emailVerifiedAt: employeeDTO.email_verified_at,
    createdAt: employeeDTO.created_at,
    updatedAt: employeeDTO.updated_at,
});

export const mapIEmployeesToEmployeeDTOs = (employees: IEmployee[]): EmployeeDTO[] =>
    employees.map((employee) => mapIEmployeeToEmployeeDTO(employee) as EmployeeDTO);

export const mapEmployeeDTOsToIEmployees = (employeeDTOs: EmployeeDTO[]): IEmployee[] =>
    employeeDTOs.map(mapEmployeeDTOToIEmployee);
