import { Icon } from '../../MaterialDesign';

import { RadioButtonContainer } from './styles';

interface RadioButtonProps {
  selected: boolean;
}

export function RadioButton({ selected }: RadioButtonProps) {
  return (
    <RadioButtonContainer
      className={ selected ? 'selected' : 'unselected'}
    >
      <Icon 
        weight="700"
        fill={false}
        name={ selected ? "radio_button_checked" : "radio_button_unchecked" }
      />
    </RadioButtonContainer>
  )
}