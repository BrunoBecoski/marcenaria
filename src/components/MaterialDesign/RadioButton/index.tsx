import { Icon } from '../../MaterialDesign';

import { RadioButtonContainer } from './styles';

interface RadioButtonProps {
  checked: boolean;
}

export function RadioButton({ checked }: RadioButtonProps) {
  return (
    <RadioButtonContainer
      className={ checked ? 'selected' : 'unselected'}
    >
      <Icon name={ checked ? "radio_button_checked" : "radio_button_unchecked" } />
    </RadioButtonContainer>
  )
}