import { RadioBoxContainer, Button, Label, Icon } from './styles';

interface RadioBoxProps {
  name: string;
  items: {
    label: string;
    value: string;
  }[];
}

export function RadioBox({ name, items }: RadioBoxProps) {
  return (
    <RadioBoxContainer>
      {
        items.map(item => 
          <Button key={item.value} htmlFor={item.value}>

            <Icon>
              <span />
            </Icon>
            <input type="radio" id={item.value} name={name} value={item.value} />
            
            <Label>{item.label}</Label>
          </Button>
        )
      }
    </RadioBoxContainer>
  )
}