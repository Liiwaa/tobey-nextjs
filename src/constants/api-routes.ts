export const RegisterAPI = '/api/register';
export const LoginAPI = '/api/login';
export const ResetPasswordAPI = '/api/reset_password';

export const userAPI = (id: string) => {
    return `/api/user/${id}`
}
export const LogoutUserAPI = '/api/logout';
export const ContactUsAPI = '/api/contact_us';

export const PetshopAPI = '/api/petshop'

export const EmployeeAPI = '/api/employee'
export const EmployeeIdAPI = (id: string) => {
    return `/api/employee/${id}`
}
export const EmployeeRoleAPI = '/api/employee-role' // lii - not generated yet
