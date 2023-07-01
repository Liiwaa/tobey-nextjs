import React from 'react';
import { Box } from '@mui/material';

// Define the type of the props
interface ErrorTextProps {
  children: React.ReactNode;
}

// Define the component
const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  return (
    <Box height="20px">
      <p style={{ color: 'red', margin: 0 }}>{children}</p>
    </Box>
  );
};

export default ErrorText;
