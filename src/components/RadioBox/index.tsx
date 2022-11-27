import { RadioBoxContainer, Title, Button, Label, Icon } from './styles';

interface RadioBoxProps {
  title: string;
  name: string;
  onChange: any;
  errorMessage: string | undefined;
  items: {
    label: string;
    value: string;
  }[];
}

export function RadioBox({title, name, items, onChange }: RadioBoxProps) {
  return (
    <RadioBoxContainer>
      <Title>{title}</Title>
      {
        items.map(item => 
          <Button key={item.value} htmlFor={item.value}>

            <Icon>
              <span />
            </Icon>
            <input 
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              onChange={onChange}
            />
            
            <Label>{item.label}</Label>
          </Button>
        )
      }
    </RadioBoxContainer>
  )
}