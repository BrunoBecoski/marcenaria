import { useEffect, useState } from 'react';
import { Container } from './styles'

type objectProps = {
  id: number;
  height: number;
  width: number;
  thickness: string;
}

type InputsMDFProps = {
  id: number;
  addObject: (object: objectProps) => void;
}

export default function InputsMDF({ id, addObject }: InputsMDFProps) {
const [height, setHeight] = useState(0);
const [width, setWidth] = useState(0);
const [thickness, setThickness] = useState('15mm');

addObject({
  id,
  height,
  width,
  thickness
})

// useEffect(() => {
//   console.log(`
//     ID: ${id}
//     Height: ${height}
//     Width: ${width}
//     Thickness: &{thickness}    
//   `);

// }, [height, width])

  return (
    <Container>
      <div>
        <label htmlFor="height">Altura: </label>
        <input id="height" type="number" onChange={(event) => setHeight(Number(event.target.value))} />
      </div>
      <div>
        <label htmlFor="width">Largura: </label>
        <input id="width" type="number" onChange={(event) => setWidth(Number(event.target.value))} />
      </div>
      <div>
        <label htmlFor="thickness">Espessura: </label>
        <select id="thickness" defaultValue="15mm" onChange={(event) => setThickness(event.target.value)}>
          <option value="3mm" >3mm</option>
          <option value="6mm" >6mm</option>
          <option value="9mm" >9mm</option>
          <option value="12mm" >12mm</option>
          <option value="15mm" >15mm</option>
        </select>
      </div>

    </Container>
  )
}