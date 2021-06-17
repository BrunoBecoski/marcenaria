import InputsMDF from './InputsMDF';

import { Container } from './styles';

type InputComponentProps = {
  id: number;
  type: 'mdf',
}

type FormProps = {
  onSubmit: () => void;
  componentInputList: InputComponentProps[];
}

export default function Form({ onSubmit, componentInputList}: FormProps) {
  return (  
    <Container onSubmit={onSubmit}>
      <h1>Formulário</h1>
        {
          componentInputList.map((input) => {
            switch (input.type) {
              case 'mdf':
                return <InputsMDF 
                        key={input.id} 
                        id={input.id} 
                        // handleRemoveComponentInput={handleRemoveComponentInput} 
                      />
                break;
            }

          })
        }

      <button type="submit">Calcular</button>

    </Container>
  )
}