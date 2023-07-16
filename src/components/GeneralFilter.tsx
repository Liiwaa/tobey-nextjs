import React, { useEffect, useState } from 'react';
import { Button, MenuItem, Select, TextField, SelectChangeEvent, Autocomplete } from '@mui/material';
import { getEmployeeList } from '@/services/employee.service';

// Sample options for dropdowns
const employeeRoleOptions = ['Role 1', 'Role 2', 'Role 3'];

interface OptionType {
  id: string;
  name: string;
}

interface FilterProps {
  onReset: () => void;
  onEmployeeRoleChange: (role: string) => void;
  onEmployeeNameChange: (name: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  onReset,
  onEmployeeRoleChange,
  onEmployeeNameChange,
}) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<OptionType[]>([]);

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    const role = event.target.value;
    setSelectedRole(role);
    onEmployeeRoleChange(role);
  };

  const handleReset = () => {
    setSelectedRole('');
    setSelectedName('');
    onReset();
  };

  useEffect(() => {
    if (inputValue) {
      getEmployeeList(inputValue).then((response) => {
        if (response.payload) {
          const updatedOptions = response.payload.map((employee) => ({
            id: employee.id,
            name: employee.firstName + " " + employee.lastName, // concatenate first and last name
          }));
          setOptions(updatedOptions);        
        }
      });
    }
  }, [inputValue]);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
      <Select value={selectedRole} onChange={handleRoleChange} displayEmpty>
        <MenuItem value="">All Roles</MenuItem>
        {employeeRoleOptions.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Employee Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
        onChange={(event, newValue: OptionType | null) => {
          // handle the selected value here
          console.log(newValue);
        }}
      />
    </div>
  );
};

export default Filter;
