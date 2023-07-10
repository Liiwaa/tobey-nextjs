"use client";
import { useState } from 'react';
import { Box } from '@mui/material';
import { ILogin } from '@/interfaces/components/Login';
import LoginComponent from '@/components/Login/Login';
import { callLogin } from '@/services/login.service';

const Login = () => {
	const initialLoginData: ILogin = {
		email: '',
        password: '',
	  };
    
    const [loginData, setLoginData] = useState<ILogin>(initialLoginData)

	return (
		<Box>
            <LoginComponent
                loginData={loginData} 
                setLoginData={setLoginData}
                login={() => callLogin(loginData)}
                />
		</Box>
	);
};

export default Login;
