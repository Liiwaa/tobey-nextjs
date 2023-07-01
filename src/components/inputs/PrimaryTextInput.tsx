import React from 'react';
import { TextField, InputLabel, Box, NoSsr } from '@mui/material';
import styled from '@mui/material/styles/styled';
import colorTheme from '@/themes/ColorTheme';
import InputError from '../InputError';

interface PrimaryTextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: string;
}

const StyledInputLabel = styled(InputLabel)(() => ({
  color: colorTheme.palette.primary.main,
  fontSize: '16px',
  fontWeight: 'bold',
}));

const StyledTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        height: '35px',
        '& fieldset': {
            borderColor: colorTheme.palette.primary.main,
        },
        '&:hover fieldset': {
            borderColor: colorTheme.palette.primary.dark,
        },
        '&.Mui-focused fieldset': {
        borderColor: colorTheme.palette.secondary.main,
        },
    },
}));

const PrimaryTextInput: React.FC<PrimaryTextFieldProps> = ({ id, label, value, onChange, type = "text", required, disabled, helperText, error }) => {
  return (
    <NoSsr>
        <Box sx={{ marginTop:'15px', marginBottom:'15px' }}>
            <StyledInputLabel htmlFor={id}>{label} {required && '*'}</StyledInputLabel>
            <StyledTextField
                id={id}
                variant="outlined"
                value={value}
                onChange={onChange}
                fullWidth
                margin="dense"
                type={type}
                required={required}
                disabled={disabled}
                helperText={helperText} />
            <InputError>{error}</InputError>
        </Box>
    </NoSsr>

  );
};

export default PrimaryTextInput;
