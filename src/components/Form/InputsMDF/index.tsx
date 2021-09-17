import { useState } from 'react';

import { Container, Header, Main } from './styles'

type InputsMDFProps = {
  id: number;
  // handleRemoveComponentInput: (id: number) => void;
}

export default function InputsMDF({ id  }: InputsMDFProps) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [thickness, setThickness] = useState('15mm');

  // function handleRemoveInput() {
  //   handleRemoveComponentInput(id);
  // }

  return (
    <Container>
      <Header>
        <h3>Mdf - 15mm</h3>
        <button type="button" >X</button>
      </Header>

      <Main>
        <div>
          <label htmlFor="width">Largura:</label>
          <input 
            id="width" 
            type="number" 
            name="width"
            value={width} 
            onChange={(event) => setWidth(Number(event.target.value))} 
            />
        </div>

        <div>
          <label htmlFor="length">Comprimento:</label>
          <input 
            id="length" 
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