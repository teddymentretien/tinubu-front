import React from 'react';
import { TextField, MenuItem } from '@mui/material';

export interface Option {
  label: string;
  value: string;
  custom?: boolean;
  component?: React.ComponentType; 
}

export interface SelectProps {
    options: Option[];
    label: string;
    value: string;
    onChange: (value: string) => void;
}
  
export const SelectField: React.FC<SelectProps> = ({ options, label, value, onChange }) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      fullWidth
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};