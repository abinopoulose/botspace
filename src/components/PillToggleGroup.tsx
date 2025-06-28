import { ToggleButton, ToggleButtonGroup, type ToggleButtonGroupProps } from '@mui/material';
import { useState } from 'react';

type PillToggleGroupProps = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
} & Omit<ToggleButtonGroupProps, 'value' | 'onChange' | 'children' | 'exclusive'>;

const PillToggleGroup = ({ options, value, onChange, ...groupProps }: PillToggleGroupProps) => {
  const [internalValue, setInternalValue] = useState(value ?? options[0]);

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      setInternalValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={value ?? internalValue}
      exclusive
      onChange={handleChange}
      sx={{
        backgroundColor: '#0000000f',
        borderRadius: '999px',
        padding: '4px',
        gap: 1
      }}
      {...groupProps}>
      {options.map((label) => (
        <ToggleButton
          key={label}
          value={label}
          size="small"
          disableRipple
          sx={{
            textTransform: 'capitalize',
            color: '#344054',
            px: 3,
            border: 'none',
            borderRadius: '999px !important',
            transition: 'none',
            '&.Mui-selected': {
              backgroundColor: '#fff',
              color: '#101828',
              transition: 'none',
              '&:hover': {
                backgroundColor: '#fff'
              }
            },
            '&:hover': {
              opacity: 0.8,
              transition: 'none'
            }
          }}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default PillToggleGroup;
