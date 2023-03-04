"use client";
import { useState } from 'react';
import { Button, Box, Typography, Card, CardContent, Grid } from '@mui/material';
import EmployeeCard from '../../components/employee/employeeCard';

const Employees = () => {
	const [roles, setRoles] = useState(['Manager','Secretary','Vet', 'Groomer']);

	const handleEmployeeClick = (employeeName: string) => {
		// event.preventDefault()
		// router.push(`/employee/${employeeName}`);
	};

	return (
		<Box>
			<Button variant="contained" color="primary" sx={{ mb: 2 }}>
				Create New Employee
			</Button>

			{roles.map((role) => (
				<Card key={role} className="primary-card">
					<CardContent>
						<Typography variant="h5" component="h2" sx={{ borderBottom:1, borderColor:'#BEBEBE', mb:2 }} gutterBottom>
							{role}
						</Typography>
						<Grid container spacing={2}>
							{['Sara Lee', 'Adam Smith', 'Steve Johnson'].map((employeeName,ind) => (
								<EmployeeCard  key={employeeName} employeeName={employeeName} onClick={handleEmployeeClick} />
							))}
						</Grid>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};

export default Employees;