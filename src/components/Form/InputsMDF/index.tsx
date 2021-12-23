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

export default function InputsMDF(props: any) {
  const { handleRemoveMdfBox,  } = useMdf();

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  console.log('InputsMDF props')
  console.log(props)

  // function handleRemoveInput() {
  //   handleRemoveComponentInput(id);
  // }

  return (
    <Container id={props.id}>
      <Header>
        <p>{props.id}</p>
        <button type="button" onClick={() => handleRemoveMdfBox(props.id)} >X</button>
      </Header>

      <Main>
        <div>
          <label htmlFor={`width_${props.id}`} >Largura:</label>
          <input 
            id={`width_${props.id}`} 
            type="number" 
            name="width"
            onChange={(event) => setWidth(Number(event.target.value))} 
            />
        </div>

        <div>
          <label htmlFor={`length_${props.id}`}>Comprimento:</label>
          <input 
            id={`length_${props.id}`}
            type="number" 
            name="length"
            onChange={(event) => setHeight(Number(event.target.value))} 
            />
        </div>

      </Main>

    </Container>
  )
}