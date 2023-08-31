import { IAddress } from "./Address";
import { EmployeeJobDTO, IEmployeeJob } from "./EmployeeJob";
import {EmployeeRole, EmployeeRoleDTO} from "./EmployeeRole";

export interface IEmployee extends INewEmployee{
    id: string;
    address?: IAddress
    emailVerifiedAt: string | null;
    job: string,
    tagline?: string,
    endDate?: string,
    rating?: string,
    votersCount?: number,
    createdAt: string;
    updatedAt: string;
}

export interface INewEmployee {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    gender: "male" | "female" | "";
    dateOfBirth?: string,
    jobId: string;
    startDate: string;
    petshopId?: string;
    addressId: string | null;
    userRole?: EmployeeRole[];
}

export interface EmployeeDTO extends NewEmployeeDTO{
    id: string;
    email_verified_at: string | null;
    employee_job: EmployeeJobDTO,
    tagline?: string,
    end_date?: string,
    rating?: string,
    voters_count?: number,
    created_at: string;
    updated_at: string;
}

export interface NewEmployeeDTO {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    gender: string;
    date_of_birth: string,
    job_id: number,
    start_date: string;
    petshop_id: number;
    address_id: number | null;
    user_role?: EmployeeRoleDTO[];
}
