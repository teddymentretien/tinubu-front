import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useTranslation } from 'next-i18next';

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

  const { t } = useTranslation("common");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    targetValue === actionLabel ? actionOnClick() : onChange(targetValue);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={handleOnChange}
      fullWidth
      slotProps={{
        select: {
          renderValue: () => selectedOption?.value || ""
        }
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          className="border-b-2"
          sx={{ borderBottom: '1px solid #ccc', padding: '10px 14px' }}
        >
          {option.label}
        </MenuItem>
      ))}
      { actionLabel &&
        <MenuItem key={actionLabel} value={actionLabel} sx={{ fontSize: '14px' }}>
          {t("or")} <span className="ml-1 underline">{actionLabel}</span>
        </MenuItem>
      }
    </TextField>
  );
};