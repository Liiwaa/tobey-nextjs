import {EmployeeRole, EmployeeRoleDTO} from "./EmployeeRole";

export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    petshopId: number;
    addressId: number | null;
    emailVerifiedAt: string | null;
    createdAt: string;
    updatedAt: string;
    userRole?: EmployeeRole[];
}

export interface INewEmployee {
    firstName: string;
    lastName: string;
    email: string;
    petshopId: number;
    addressId: number | null;
    userRole?: EmployeeRole[];
}

export interface EmployeeDTO {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    petshop_id: number;
    address_id: number | null;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    user_role?: EmployeeRoleDTO[];
}

export interface NewEmployeeDTO {
    first_name: string;
    last_name: string;
    email: string;
    petshop_id: number;
    address_id: number | null;
    user_role?: EmployeeRoleDTO[];
}