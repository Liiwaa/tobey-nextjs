import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import PopupModel from './PopupModel';
import { IEmployee, INewEmployee } from '@/interfaces/components/Employee';
import { createEmployee } from '@/services/employee.service';

interface AddEmployeeModelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employee: IEmployee) => void;
}

const AddEmployeeModel: React.FC<AddEmployeeModelProps> = ({ isOpen, onClose, onSave }) => {
  const [employeeInfo, setEmployeeInfo] = useState<INewEmployee>({
    firstName: '',
    lastName: '',
    email:'',
    petshopId:0,//lii add it
    addressId:0
  });

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setEmployeeInfo((prevEmployeeInfo) => ({ ...prevEmployeeInfo, gender: event.target.value }));
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
      {/* <TextField
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
      </FormControl> */}
    </div>
  );

  return (
    <PopupModel isOpen={isOpen} onClose={onClose} title="Add Employee" content={content} showSaveButton onSave={handleSave} />
  );
};

export default AddEmployeeModel;
