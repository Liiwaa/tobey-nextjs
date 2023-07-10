import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, ListItem, ListItemText, NoSsr, TextField, Typography } from '@mui/material';
import PrimaryTextInput from '../inputs/PrimaryTextInput';
import { ILogin } from '@/interfaces/components/Login';

interface LoginProps {
  loginData: ILogin;
  setLoginData: (data: ILogin) => void;
  login: () => void;
}

const LoginComponent: React.FC<LoginProps> = ({ loginData, setLoginData, login  }) => {
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validateInputs = (): boolean => {
        let isValid = true;
        const newErrors: { email?: string; password?: string } = {};

        if (loginData.email.trim() === '') {
            newErrors.email = 'required';
            isValid = false;
        }

        if (loginData.password.trim() === '') {
            newErrors.password = 'required';
            isValid = false;
        }

        setErrors(newErrors);

        return isValid;
    };

    const handleInputChange = (field: keyof typeof loginData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [field]: event.target.value });

        // Clear corresponding error if any
        if (errors[field]) {
        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[field];
            return updatedErrors;
        });
        }
    };

    const handleLogin = () => {
        if (validateInputs()) {
            // Perform login logic here
            login();
        }
    };

    return (
        <NoSsr>
            <Card className="primary-card">
                <CardContent>
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h5">Login</Typography>
                            <PrimaryTextInput id="email" value={loginData.email} label="Email"
                                onChange={handleInputChange('email')} error={errors.email} required/>
                            <PrimaryTextInput id="password" value={loginData.password} label="Password"
                                onChange={handleInputChange('password')} error={errors.password} type="password" required/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <ListItem button component="a" onClick={handleLogin}>
                <ListItemText>Login</ListItemText>
            </ListItem>
        </NoSsr>

    );
};

export default LoginComponent;
