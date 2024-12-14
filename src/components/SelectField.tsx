import React from 'react';
import { TextField, MenuItem } from '@mui/material';

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
    options: Option[];
    label: string;
    value: string;
    actionLabel?: string;
    actionOnClick?: () => void;
    onChange: (value: string) => void;
}
  
export const SelectField: React.FC<SelectProps> = (
  { options, label, value, actionLabel, actionOnClick = () => {}, onChange }
  ) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    targetValue === actionLabel ? actionOnClick() : onChange(targetValue);
  };

  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={handleOnChange}
      fullWidth
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      { actionLabel &&
        <MenuItem key={actionLabel} value={actionLabel}>
          {actionLabel}
        </MenuItem>
      }
    </TextField>
  );
};