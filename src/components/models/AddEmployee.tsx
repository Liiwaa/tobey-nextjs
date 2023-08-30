import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import PopupModel from './PopupModel';
import { IEmployee, INewEmployee } from '@/interfaces/components/Employee';
import { createEmployee } from '@/services/employee.service';
import { IJob } from '@/interfaces/components/EmployeeJob';

interface AddEmployeeModelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: IEmployee) => void;
}

const AddEmployeeModel: React.FC<AddEmployeeModelProps> = ({ isOpen, onClose, onSave }) => {
  const [employeeInfo, setEmployeeInfo] = useState<INewEmployee>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    startDate: '',
    jobId: '',
    phone: '',
    dateOfBirth: '',
    addressId: null,
  });

  const [jobs, setJobs] = useState<IJob[]>([])

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setEmployeeInfo((prevEmployeeInfo) => ({ ...prevEmployeeInfo, gender: event.target.value as "male"|"female"|"" }));
  };
  const handleJobChange = (event: SelectChangeEvent<string>) => {
    setEmployeeInfo((prevEmployeeInfo) => ({ ...prevEmployeeInfo, job: event.target.value }));
  };

  const handleSave = async () => {
        const response = await createEmployee(employeeInfo)
        if(response.error){
            return;
        }
        onSave(response.data);
        onClose();
  };

  const content = (
    <div>
      <TextField
        label="First Name"
        value={employeeInfo.firstName}
        onChange={(e) => setEmployeeInfo({ ...employeeInfo, firstName: e.target.value })}
      />
      <TextField
        label="Last Name"
        value={employeeInfo.lastName}
        onChange={(e) => setEmployeeInfo({ ...employeeInfo, lastName: e.target.value })}
      />
      <TextField
        label="Email"
        value={employeeInfo.email}
        onChange={(e) => setEmployeeInfo({ ...employeeInfo, email: e.target.value })}
      />
      <TextField
        label="Phone"
        value={employeeInfo.phone}
        onChange={(e) => setEmployeeInfo({ ...employeeInfo, phone: e.target.value })}
      />
      <TextField
        label="Date of Birth"
        type="date"
        value={employeeInfo.dateOfBirth}
        onChange={(e) => setEmployeeInfo({ ...employeeInfo, dateOfBirth: e.target.value })}
      />
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select value={employeeInfo.gender} onChange={handleGenderChange}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Job</InputLabel>
        <Select value={employeeInfo.gender} onChange={handleJobChange}>
          {jobs.map(job => {
            return <MenuItem value={job.id}>{job.value}</MenuItem>
          })}
        </Select>
      </FormControl>
      <TextField
        label="Start Date"
        type="date"
        value={employeeInfo.dateOfBirth}
        onChange={(e) => setEmployeeInfo({ ...employeeInfo, startDate: e.target.value })}
      />
      {/* address */}
    </div>
  );

  return (
    <PopupModel isOpen={isOpen} onClose={onClose} title="Add Employee" content={content} showSaveButton onSave={handleSave} />
  );
};

export default AddEmployeeModel;
