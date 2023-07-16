export interface EmployeeRole {
    id: number;
    value: string;
    StartDate: Date;
  }


  
export interface EmployeeRoleDTO {
    id: number;
    user_id: number;
    role_id: number;
    created_at: string;
    updated_at: string;
    role: EmployeeRoleDTO;
  }
  
export interface EmployeeRoleDTO {
    id: number;
    value: string;
}
  