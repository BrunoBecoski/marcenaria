import { RadioButton } from '../RadioButton';

import { RadioBoxContainer, Title, Options } from './styles';

interface RadioGroupProps {
  title?: string;
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
}

export function RadioGroup({ title, options, value, onChange }: RadioGroupProps) {
  return (
    <RadioBoxContainer>
      {title && <Title>{title}</Title>}
      <Options>
        {options.map(item => 
          <RadioButton
            key={item.value}
            label={item.label}
            selected={item.value === value ? true : false}
            onClick={() => onChange(item.value)}
          />            
        )}
      </Options>
    </RadioBoxContainer>
  )
}