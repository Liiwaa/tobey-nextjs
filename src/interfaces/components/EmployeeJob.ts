

export interface IEmployeeJob {
    id: number,
    employeeId: number,
    jobId: number,
    createdAt: string,
    updatedAt: string,
    jobType: string, // lii - shoukd vchange in database
    job: JobDTO,
}

export interface EmployeeJobDTO {
    id: number,
    employee_id: number,
    job_id: number,
    created_at: string,
    updated_at: string,
    job_type: string, // lii - shoukd vchange in database
    job: JobDTO,
}

export interface IJob {
    id: number,
    value: string,
}

export interface JobDTO {
    id: number,
    value: string,
}