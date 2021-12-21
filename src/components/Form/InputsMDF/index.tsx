import { useEffect, useState } from 'react';

import { useMdf } from '../../../contexts/MdfContext';

import { Container, Header, Main } from './styles'

type InputsMDFProps = {
  thick: string;
  id: string;
  width: number;
  height: number;
  // handleRemoveComponentInput: (id: number) => void;
}

export default function InputsMDF(
  { 
    thick, 
    id, 
  }: InputsMDFProps) {
  const [thickness, setThickness] = useState('15mm');

  const { handleRemoveMdfBox,  } = useMdf();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log('Width: ');
    console.log(width);
  }, [width])


  useEffect(() => {
    console.log('Height: ');
    console.log(height);
  }, [height])

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
            onChange={(event) => setWidth(Number(event.target.value))} 
            />
        </div>

        <div>
          <label htmlFor={`length_${id}`}>Comprimento:</label>
          <input 
            id={`length_${id}`}
            type="number" 
            name="length"
            onChange={(event) => setHeight(Number(event.target.value))} 
            />
        </div>

      </Main>

    </Container>
  )
}