"use client";
import { Box, Card, CardContent, Typography } from '@mui/material';

interface EmployeeCardProps {
  role: string;
  employees: string[];
}

const Employee = ({ role, employees }: EmployeeCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {role}
        </Typography>
        <Box display="flex" flexDirection="column">
          {employees.map((employeeName) => (
            <Box
              key={employeeName}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant="body1">{employeeName}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Employee;
