import React, { useEffect, useReducer, useState } from 'react';
import { Box, Card, CardContent, Grid, ListItem, ListItemText, NoSsr, Typography } from '@mui/material';
import PrimaryTextInput from '../inputs/PrimaryTextInput';
import { Petshop } from '@/interfaces/components/Petshop';

interface PetshopRegistrationProps {
    petshopData: Petshop;
    setPetshopData: (petshopRegistrationData: Petshop) => void;
    back: () => void;
    emailError? :string;
}

type Action =
  | { type: 'SET_FIELD'; field: keyof Petshop; value: string };

const PetshopRegistration: React.FC<PetshopRegistrationProps> = ({petshopData, setPetshopData, back, emailError=''}) => {
  const reducer = (state: Petshop, action: Action): Petshop => {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, petshopData);
  const [errors, setErrors] = useState<Partial<Record<keyof Petshop, string>>>();

  useEffect(()=>{
    if(emailError){
        setErrors(prevErrors => {
            const updatedErrors = {...prevErrors};
            updatedErrors.email = emailError;
            return updatedErrors;
        });
    }
  },[])

  const validateInputs = (state: Petshop): boolean => {
    let isValid = true;
    const errors: Partial<Record<keyof Petshop, string>> = {};
    
    for (let key in state) {
      if (state[key as keyof Petshop] === '') {
        errors[key as keyof Petshop] = "Required";
        isValid =  false;
      }
    }
  
    // Custom validation rules...
    // Email validation
    if (!state.email.includes('@')) {
      errors.email = "Enter a valid email";
      isValid =  false;
    }
  
    setErrors(errors)
  
    return isValid;
  };

  const onRegisterClick = () => {
    if (validateInputs(state)) {
      setPetshopData(state)
    }
  };

  const onGoBackClick = () => {
    setPetshopData(state)
    back();
  };

  const handleFieldChange = (field: keyof Petshop) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
                        <Typography variant="h5">Petshop Info</Typography>                            
                        <PrimaryTextInput id="petshop-name" value={state.petshopName} label="Petshop Name" 
                            onChange={handleFieldChange('petshopName')} error={errors?.petshopName} required/>
                        <PrimaryTextInput id="petshop-phone" value={state.phoneNumber} label="Phone Number" 
                            onChange={handleFieldChange('phoneNumber')} error={errors?.phoneNumber} type="tel" required/>
                        <PrimaryTextInput id="petshop-email" value={state.email} label="Email" 
                            onChange={handleFieldChange('email')} error={errors?.email} required/>
                        <PrimaryTextInput id="petshop-address" value={state.address} label="Address" 
                            onChange={handleFieldChange('address')} error={errors?.address} required/>
                        <PrimaryTextInput id="petshop-establishment-date" value={state.establishmentDate} label="Establishment Date" 
                            onChange={handleFieldChange('establishmentDate')} error={errors?.establishmentDate} type="date" required/>
                        <PrimaryTextInput id="petshop-opening-time" value={state.openingTime} label="Opening Time" 
                            onChange={handleFieldChange('openingTime')} error={errors?.openingTime} type="time" required/>
                        <PrimaryTextInput id="petshop-closing-time" value={state.closingTime} label="Closing Time" 
                            onChange={handleFieldChange('closingTime')} error={errors?.closingTime} type="time" required/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        <ListItem button component="a" onClick={onGoBackClick}>
            <ListItemText>Back</ListItemText>
        </ListItem>
        <ListItem button component="a" onClick={onRegisterClick}>
            <ListItemText>Register</ListItemText>
        </ListItem>
    </NoSsr>
  );
};

export default PetshopRegistration;
