import React from 'react';
import { TextField, MenuItem, InputAdornment } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Search } from '@mui/icons-material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiSelect-icon': {
    display: 'none',
  },
});

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  label: string;
  value: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  actionOnClick?: () => void;
  onChange: (value: string) => void;
}

export const SelectField: React.FC<SelectProps> = (
  { options, label, value, icon = <Search />, actionLabel, actionOnClick = () => {}, onChange }
) => {
  const { t } = useTranslation("common");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    targetValue === actionLabel ? actionOnClick() : onChange(targetValue);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <CustomTextField
      select
      label={label}
      value={value}
      onChange={handleOnChange}
      fullWidth
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        },
        select: {
          // MenuProps: {
          //   PaperProps: {
          //     style: {
          //       maxHeight: 180,
          //       overflowY: 'auto',
          //     },
          //   },
          // },
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
      {actionLabel && (
        <MenuItem key={actionLabel} value={actionLabel} sx={{ fontSize: '14px' }}>
          {t("or")} <span className="ml-1 underline">{actionLabel}</span>
        </MenuItem>
      )}
    </CustomTextField>
  );
};
