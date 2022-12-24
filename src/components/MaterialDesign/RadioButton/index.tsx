import { ButtonHTMLAttributes } from 'react';
import { Icon } from '../../MaterialDesign';

import { RadioButtonContainer, Label } from './styles';

interface RadioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  label?: string;
}

export function RadioButton({ selected, label, ...props }: RadioButtonProps) {
  return (
    <RadioButtonContainer
      selected={selected}
      type="button"
      {...props}
    >
      <Icon 
        weight="700"
        name={ selected ? "radio_button_checked" : "radio_button_unchecked" }
      />
      {label && <Label>{label}</Label>}
    </RadioButtonContainer>
  )
}