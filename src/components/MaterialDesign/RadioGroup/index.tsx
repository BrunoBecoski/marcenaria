import { useEffect, useState } from 'react';
import { RadioButton } from '../RadioButton';

import { RadioBoxContainer, Title, Button, Label } from './styles';

interface RadioGroupProps {
  title?: string;
  items: {
    label: string;
  }[];
}

export function RadioGroup({ title, items }: RadioGroupProps) {
  const [list, setList] = useState([]);

  function handleSelect(label: string) {
    const newList = list.map(item => {
      if(item.label === label) {
        return {
          ...item,
          select: true,
        }
      } else {
        return {
          ...item,
          select: false,
        }
      }
    })

    setList(newList);
  }

  return (
    <RadioBoxContainer>
      <Title>{title}</Title>
      {
        list.map(item => 
          <Button key={item.label}>
            <RadioButton
              label={item.label}
              selected
              onClick={() => handleSelect(item.label)}
            />            
         </Button>
        )
      }
    </RadioBoxContainer>
  )
}