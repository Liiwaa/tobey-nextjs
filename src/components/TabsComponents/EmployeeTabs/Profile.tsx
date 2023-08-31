import React from 'react';
import { Box, Paper, Typography, Avatar, Grid } from '@mui/material';
import { IEmployee } from '@/interfaces/components/Employee';
import { stringifyAddress } from '@/utils/helper';

const EmployeeProfileTab: React.FC<IEmployee> = (employee) => {
  return (
    <Box p={2}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box display="flex" justifyContent="center">
          <Avatar alt={employee.id} src="/path-to-image.jpg" sx={{ width: 120, height: 120 }} />
        </Box>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Typography variant="body1">First Name: {employee.firstName}</Typography>
            <Typography variant="body1">Last Name: {employee.lastName}</Typography>
            <Typography variant="body1">Job: {employee.job}</Typography>
            <Typography variant="body1">Start Date: {employee.startDate}</Typography>
            <Typography variant="body1">Gender: {employee.gender}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Date of Birth: {employee.dateOfBirth}</Typography>
            <Typography variant="body1">Phone: {employee.phone}</Typography>
            <Typography variant="body1">Address: {stringifyAddress(employee.address)}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default EmployeeProfileTab;
