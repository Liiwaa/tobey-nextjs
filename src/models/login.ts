import { ILogin, LoginDTO } from "@/interfaces/components/Login";

export const mapLoginToLoginDTO = (loginData: ILogin): LoginDTO => ({
    email: loginData.email,
    password: loginData.password,
});