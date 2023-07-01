import React, { useEffect, useReducer, useState } from 'react';
import { Box, Card, CardContent, Grid, InputLabel, ListItem, ListItemText, NoSsr, Typography } from '@mui/material';
import PrimaryTextInput from '../inputs/PrimaryTextInput';
import { UserRegistrationData } from '@/interfaces/components/UserPetshopOwnerRegistrationData';

interface PetshopOwnerRegistrationProps {
    petshopOwner: UserRegistrationData;
    setPetshopOwner: (petshopRegistrationData: UserRegistrationData) => void;
    next: () => void;
    emailError? :string;
}

type Action =
  | { type: 'SET_FIELD'; field: keyof UserRegistrationData; value: string };

const PetshopOwnerRegistration: React.FC<PetshopOwnerRegistrationProps> = ({petshopOwner, setPetshopOwner, next, emailError=''}) => {
  const reducer = (state: UserRegistrationData, action: Action): UserRegistrationData => {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, petshopOwner);
  const [errors, setErrors] = useState<Partial<Record<keyof UserRegistrationData, string>>>();

  useEffect(()=>{
    if(emailError){
        setErrors(prevErrors => {
            const updatedErrors = {...prevErrors};
            updatedErrors.email = emailError;
            return updatedErrors;
        });
    }
  },[])

  const validateInputs = (state: UserRegistrationData): boolean => {
    let isValid = true;
    const errors: Partial<Record<keyof UserRegistrationData, string>> = {};
    
    for (let key in state) {
      if (state[key as keyof UserRegistrationData] === '') {
        errors[key as keyof UserRegistrationData] = "Required";
        isValid =  false;
      }
    }
  
    // Custom validation rules...
    // Email validation
    if (!state.email.includes('@')) {
      errors.email = "Enter a valid email";
      isValid =  false;
    }
    
    // Password confirmation validation
    if (state.password !== state.confirmPassword) {
      errors.confirmPassword = "Password and confirm password should match";
      isValid =  false;
    }
  
    setErrors(errors)
  
    return isValid;
  };

  const onNextClick = () => {
    if (validateInputs(state)) {
      setPetshopOwner(state);
      next();
    }
  };

  const handleFieldChange = (field: keyof UserRegistrationData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FIELD', field, value: event.target.value });
  
    // Clear corresponding error if any
    if (errors && errors[field]) {
      setErrors(prevErrors => {
        const updatedErrors = {...prevErrors};
        delete updatedErrors[field];
        return updatedErrors;
      });
    }
  };
  

  return (
    <NoSsr>
        <Card className="primary-card">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h5">Admin Info</Typography>                            
                        <PrimaryTextInput id="admin-first-name" value={state.firstName} label="First Name" 
                            onChange={handleFieldChange('firstName')} error={errors?.firstName} required/>
                        <PrimaryTextInput id="admin-last-name" value={state.lastName} label="Last Name" 
                            onChange={handleFieldChange('lastName')} error={errors?.lastName} required/>
                        <PrimaryTextInput id="admin-auth" value={state.email} label="Your Email" 
                            onChange={handleFieldChange('email')} error={errors?.email} required/>
                        <PrimaryTextInput id="admin-ad" value={state.password} label="Password"  
                            onChange={handleFieldChange('password')} error={errors?.password} type="password" required/>
                        <PrimaryTextInput id="admin-confirm-as" value={state.confirmPassword} label="Confirm Password" 
                            onChange={handleFieldChange('confirmPassword')} error={errors?.confirmPassword} type="password" required/>
                        <PrimaryTextInput id="admin-dsas" value={state.dateOfBirth} label="Date of Birth" 
                            onChange={handleFieldChange('dateOfBirth')} error={errors?.dateOfBirth} type="date" required/>
                        <PrimaryTextInput id="admin-phone-number" value={state.phoneNumber} label="Phone Number" 
                            onChange={handleFieldChange('phoneNumber')} error={errors?.phoneNumber} type="tel" required/>
                    </Grid>
                </Grid>
            </CardContent>
      </Card>
      <ListItem button component="a" onClick={onNextClick}>
            <ListItemText>Next</ListItemText>
      </ListItem>
    </NoSsr>
  );
};

export default PetshopOwnerRegistration;
