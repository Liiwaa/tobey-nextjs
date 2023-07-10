export interface ILogin {
  email: string,
  password: string
}

export interface LoginDTO {
  email: string,
  password: string
}

interface JobModel {
  id: number;
  value: string;
}

interface EmployeeJobModel {
  id: number;
  employee_id: number;
  job_id: number;
  created_at: string;
  updated_at: string;
  job_type: string | null;
  job: JobModel;
}

interface EmployeeModel {
  id: number;
  start_date: string;
  end_date: string | null;
  tagline: string | null;
  rating: number | null;
  voters_count: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  employee_job: EmployeeJobModel;
}

interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  petshop_id: number;
  address_id: number | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  employee: EmployeeModel;
}

export interface LoginModel {
  code: number;
  message: string;
  data: {
    token: string;
    user: UserModel;
  };
}
