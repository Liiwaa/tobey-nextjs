"use client";
import GeneralLayout from '@/components/GeneralLayout';
import TabsComponent from '@/components/Tabs';
import EmloyeeAppointmentsTab from '@/components/TabsComponents/EmployeeTabs/Appointments';
import EmployeeProfileTab from '@/components/TabsComponents/EmployeeTabs/Profile';
import { IEmployee } from '@/interfaces/components/Employee';
import { TabInfo } from '@/interfaces/TabInfo';
import { getEmployee } from '@/services/employee.service';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const tabs: TabInfo[] = [
  { label: 'Profile' },
  { label: 'Appointments'},
];

const Employee = () => {
  const searchParams = useSearchParams()
 
  const id = searchParams?.get('employee_id')??'' //lii - not working - create a new project and test there

  const [employee, setEmployee] = useState<IEmployee>({
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "doe@example.com",
    gender: "male",
    petshopId: 2,
    addressId: null,
    startDate: "",
    emailVerifiedAt: null,
    createdAt: "2023-08-21 11:00:00",
    updatedAt: "2023-08-21 11:00:00",
    userRole: [{
      id: 1,
      value: "employee",
      StartDate: "2023-08-21 11:00:01"
    }],
    job: "groomer"
  });
  const [title, setTitle] = useState<string>('...');
  const [activeTab, setActiveTab] = useState(0);

  const callGetEmployee = async (id: string) => {
    const response = await getEmployee(id);
    if(response.error){
      return;
    }
    setEmployee(response.data);
  }

  useEffect(() => {
    if(id != null){
        // setEmployeeId(employeeIdParam);
        // callGetEmployee(employeeIdParam);
    }
  }, [id])

  useEffect(() => {
    if(employee && employee.userRole)
    generateTitle([employee.userRole[0].value, employee.firstName + " " + employee.lastName]) //lii - when user can have multiple role, userRole[0] should be fixed i all the code
  }, [employee])

  const generateTitle = (component: string[]) => {
    var buildTitle = ''
    component.map((value) => {
      buildTitle += value.charAt(0).toUpperCase() + value.slice(1) // capitaize first letter
      buildTitle += " / " //3 chars
    })
    setTitle(buildTitle.slice(0, -3))
  }

  const handleTabChange = (index: number) => {
    setActiveTab(index)
    console.log(`Tab ${index} clicked`);
    // Perform actions based on the clicked tab index
  };

  const renderChosenTab = () => {
    switch (activeTab) {
      case 0:
        return <EmployeeProfileTab {...employee} />;
        break;
      case 1:
        return <EmloyeeAppointmentsTab />;
        break;
      // default:
      //   return <Loader />;
      //   break;
    }
  }

  return (
    <GeneralLayout title={title}>
      <Box>
        <TabsComponent tabs={tabs} onTabChange={handleTabChange} />
        {renderChosenTab()}
			</Box>

			{/* <div>
				<Box display="flex" justifyContent="space-between" sx={{mb:2}}>
					<Box>
          <Typography variant="h5" component="h2" gutterBottom>
          {employee.userRole && employee.userRole[0].value} / {employee.firstName} {employee.lastName}
        </Typography>
        <Box display="flex" flexDirection="column">
        </Box>
        </Box>
			</div> */}
		</GeneralLayout>
  );
};

export default Employee;
