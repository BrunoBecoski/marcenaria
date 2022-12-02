import { InputHTMLAttributes } from 'react';

import { RadioBoxContainer, Title, Button, Label, Icon } from './styles';

interface RadioBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
}

export function RadioBox({ title, items, ...props}: RadioBoxProps) {
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
              {...props}
              type="radio"
              id={item.value}
              value={item.value}
              checked={props.value === item.value}
            />
            
            <Label>{item.label}</Label>
          </Button>
        )
      }
    </RadioBoxContainer>
  )
}