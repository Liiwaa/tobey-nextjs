"use client";
import { useEffect, useState } from 'react';
import { Box, ListItem, ListItemText } from '@mui/material';
import PetshopRegistration from '@/components/PetshopAndOwnerRegistartion/PetshopRegistration';
import OwnerRegistration from '@/components/PetshopAndOwnerRegistartion/PetshopOwnerRegistration';
import { Petshop } from '@/interfaces/components/Petshop';
import { createPetshopWithOwner } from '@/services/petshop.service';
import { UserRegistrationData } from '@/interfaces/components/UserPetshopOwnerRegistrationData';

const Register = () => {
	const initialUserRegistrationData: UserRegistrationData = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		dateOfBirth: '',
		phoneNumber: '',
	  };

	const initialPetshop: Petshop = {
		petshopName: '',
		phoneNumber: '',
		email: '',
		address: '',
		establishmentDate: '',
		openingTime: '',
		closingTime: '',
	  }
	  
	  
	const [slideNumber, setSlide] = useState<number>(1)
	const [petshopOwner, setPetshopOwner] = useState<UserRegistrationData>(initialUserRegistrationData)
	const [petshopData, setPetshopData] = useState<Petshop>(initialPetshop)

	useEffect(()=>{
		// check if email exists and show error tag
	},[petshopOwner])

	useEffect(()=>{
		createPetshopWithOwner(petshopData,petshopOwner)
	},[petshopData])

	return (
		<Box>
			 {(() => {
				switch(slideNumber) {
					case 1:
					return (
						<OwnerRegistration
						petshopOwner={petshopOwner} 
						setPetshopOwner={setPetshopOwner}
						next={()=>setSlide(2)}
						emailError=""
						/>
					);
					case 2:
					return (
						<PetshopRegistration 
						petshopData={petshopData} 
						setPetshopData={setPetshopData}
						back={()=>setSlide(1)}
						/>
					);
					default:
					return null;
				}
			})()}
		</Box>
	);
};

export default Register;
