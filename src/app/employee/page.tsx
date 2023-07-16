"use client";
import { useEffect, useState } from 'react';
import { Button, Box, Typography, Card, CardContent, Grid } from '@mui/material';
import GeneralFilter from '@/components/GeneralFilter';
import EmployeeDataRow from '@/components/employee/employeeDataRow';
import { getEmployeeList } from '@/services/employee.service';
import { IEmployee } from '@/interfaces/components/Employee';

const Employees = () => {
	const [roles, setRoles] = useState(['Manager','Secretary','Vet', 'Groomer']);
	const [empoyees, setEmployees] = useState<IEmployee[]>([]);

	const handleEmployeeClick = (employeeName: string) => {
		// event.preventDefault()
		// router.push(`/employee/${employeeName}`);
	};

	useEffect(() => {
		const fetchEmployeeList = async () => {
			try {
			  const response = await getEmployeeList();
			  if (response.payload) {
				setEmployees(response.payload);
			  } else {
				console.log('Error:', response.error); // lii - error popup or something
			  }
			} catch (error: any) {
			  console.log('Error:', error.message);
			}
		};
	  
		fetchEmployeeList();
	}, [])

	return (
		<Box>
			<Box display="flex" justifyContent="space-between" sx={{mb:2}}>
				<Box>
					<GeneralFilter
					onReset={() => console.log('reset')}
					onEmployeeRoleChange={(role) => console.log(role)}
					onEmployeeNameChange={(name) => console.log(name)}
					/>
				</Box>
				<Box>
					<Button variant="contained" color="primary" sx={{ marginLeft: 'auto', mb: 2 }}>
					Create New Employee
					</Button>
				</Box>
			</Box>

			{['Sara Lee', 'Adam Smith', 'Steve Johnson'].map((employeeName,ind) => (
				<EmployeeDataRow
					icon="path/to/icon.png"
					iconBackgroundColor="#ff0000"
					employeeRoleValue="Manager"
					employeeNameValue="John Doe"
					startDateValue="2023-07-15"
				/>
			))}
		</Box>
	);
};

export default Employees;