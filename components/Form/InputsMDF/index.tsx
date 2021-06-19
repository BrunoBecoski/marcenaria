import { useState } from 'react';

import { Container, Header, Main } from './styles'

type InputsMDFProps = {
  id: number;
  // handleRemoveComponentInput: (id: number) => void;
}

export default function InputsMDF({ id  }: InputsMDFProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [thickness, setThickness] = useState('15mm');

  // function handleRemoveInput() {
  //   handleRemoveComponentInput(id);
  // }

  return (
    <Container>
      <Header>
        <h3>Mdf</h3>
        <button type="button" >X</button>
      </Header>

      <Main>
        <div>
          <label htmlFor="width">Largura:</label>
          <input 
            id="width" 
            type="number" 
            value={width} 
            onChange={(event) => setWidth(Number(event.target.value))} 
            />
        </div>

        <div>
          <label htmlFor="height">Altura:</label>
          <input 
            id="height" 
            type="number" 
            value={height} 
            onChange={(event) => setHeight(Number(event.target.value))} 
            />
        </div>

        <div>

        <label htmlFor="thickness">Espessura:</label>
          <select 
            id="thickness" 
            value={thickness} 
            onChange={(event) => setThickness(event.target.value)}
            >
            <option value="3mm" >3mm</option>
            <option value="6mm" >6mm</option>
            <option value="9mm" >9mm</option>
            <option value="12mm" >12mm</option>
            <option value="15mm" >15mm</option>
          </select>
        </div>
      </Main>

    </Container>
  )
}