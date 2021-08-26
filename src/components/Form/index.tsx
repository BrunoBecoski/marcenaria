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

export default function Form({ onSubmit, componentInputList, handleRemoveComponentInput}: FormProps) {
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