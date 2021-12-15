import { useState } from 'react';

import { useMdf } from '../../../contexts/MdfContext';

import { Container, Header, Main } from './styles'

type InputsMDFProps = {
  thick: string;
  id: string;
  // handleRemoveComponentInput: (id: number) => void;
}

export default function InputsMDF({ thick, id }: InputsMDFProps) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [thickness, setThickness] = useState('15mm');

  const { handleRemoveMdfBox } = useMdf();

  // function handleRemoveInput() {
  //   handleRemoveComponentInput(id);
  // }

  return (
    <Container id={id}>
      <Header>
        <p>{id}</p>
        <button type="button" onClick={() => handleRemoveMdfBox(id)} >X</button>
      </Header>

      <Main>
        <div>
          <label htmlFor={`width_${id}`} >Largura:</label>
          <input 
            id={`width_${id}`} 
            type="number" 
            name="width"
            value={width} 
            onChange={(event) => setWidth(Number(event.target.value))} 
            />
        </div>

        <div>
          <label htmlFor={`length_${id}`}>Comprimento:</label>
          <input 
            id={`length_${id}`}
            type="number" 
            name="length"
            value={length} 
            onChange={(event) => setLength(Number(event.target.value))} 
            />
        </div>

      </Main>

    </Container>
  )
}