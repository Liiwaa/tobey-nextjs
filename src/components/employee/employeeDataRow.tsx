import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface DataRowProps {
  icon: string;
  iconBackgroundColor: string;
  employeeRoleValue: string;
  employeeNameValue: string;
  startDateValue: string;
}

const DataRow: React.FC<DataRowProps> = ({
  icon,
  iconBackgroundColor,
  employeeRoleValue,
  employeeNameValue,
  startDateValue,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ccc',
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={{
          backgroundColor: iconBackgroundColor,
          padding: '0.5rem',
          borderRadius: '0.5rem',
        }}
      >
        <img src={icon} alt="Icon" width={32} height={32} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">Employee Role</Typography>
        <Typography variant="body1">{employeeRoleValue}</Typography>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">Employee Name</Typography>
        <Typography variant="body1">{employeeNameValue}</Typography>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">Start Date</Typography>
        <Typography variant="body1">{startDateValue}</Typography>
      </Box>
    </Box>
  );
};

export default DataRow;
