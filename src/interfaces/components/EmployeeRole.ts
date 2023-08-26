export interface EmployeeRole {
    id: number;
    value: string;
    StartDate: string;
  }


  
export interface EmployeeRoleDTO {
    id: number;
    user_id: number;
    role_id: number;
    created_at: string;
    updated_at: string;
    role: RoleDTO;
  }
  
export interface RoleDTO {
    id: number;
    value: string;
}
  