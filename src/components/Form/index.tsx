import { useState } from 'react';
import { useInputBox } from '../../contexts/InputBoxContext';
import InputsMDF from './InputsMDF';

import { Container } from './styles';

type InputComponentProps = {
  id: number;
  type: 'mdf',
}

type FormProps = {
  onSubmit: () => void;
  componentInputList: InputComponentProps[];
  handleRemoveComponentInput: (id: number) => void;
}

type inputsMDFResultProps = {
  total3: number;
  total6: number;
  total9: number;
  total12: number;
  total15: number;
}

export default function Form({ onSubmit, componentInputList, handleRemoveComponentInput}: FormProps) {
  const [inputsMDFResult, setInputsMDFResult] = useState<inputsMDFResultProps>();

  const value = useInputBox();

  console.log(value);

  return (  
    <Container onSubmit={onSubmit}>
      <h6>{value}</h6>
        {
          componentInputList.map((input) => {
            switch (input.type) {
              case 'mdf':
                return <InputsMDF 
                        key={input.id} 
                        id={input.id} 
                        // handleRemoveComponentInput={handleRemoveComponentInput(input.id)} 
                      />
                break;
            }

          })
        }
{/* 
        <InputsMDF />
        <InputsMDF />
        <InputsMDF /> */}

      <button type="submit">Calcular</button>

    </Container>
  )
}