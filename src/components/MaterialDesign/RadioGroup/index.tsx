import { useState } from 'react';
import { RadioButton } from '../RadioButton';

import { RadioBoxContainer, Title, Options } from './styles';

interface RadioGroupProps {
  title?: string;
  options: {
    label: string;
    value: string;
  }[];
  setSelected: (value: string) => void;
}

export function RadioGroup({ title, options, setSelected }: RadioGroupProps) {
  const [optionsList, setOptionsList] = useState(
    options.map((item, index) => {
      return {
        ...item,
        selected: index === 0 ? true : false,
      }
    })
  );

  function handleSelect(value: string) {
    setSelected(value);

    const newOptionsList = optionsList.map(item => {
      if(item.value === value) {
        return {
          ...item,
          selected: true,
        }
      } else {
        return {
          ...item,
          selected: false,
        }
      }
    })

    setOptionsList(newOptionsList);
  }

  return (
    <RadioBoxContainer>
      {title && <Title>{title}</Title>}
      <Options>
        {optionsList.map(item => 
          <RadioButton
            key={item.value}
            label={item.label}
            selected={item.selected}
            onClick={() => handleSelect(item.value)}
          />            
        )}
      </Options>
    </RadioBoxContainer>
  )
}