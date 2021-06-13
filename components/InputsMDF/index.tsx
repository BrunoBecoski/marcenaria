import { useEffect, useState } from 'react';

import { Container } from './styles'

type inputMFDValues = {
  id: number;
  height: number;
  width: number;
  thickness: string;
}

type InputsMDFProps = {
  id: number;
  addInputMDFValues: ({}: inputMFDValues) => void;
}

export default function InputsMDF({ id, addInputMDFValues }: InputsMDFProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [thickness, setThickness] = useState('15mm');


  useEffect(() => {
    addInputMDFValues({
      id,
      width,
      height,
      thickness
    });
  }, [ width, height, thickness])

  return (
    <Container>
        <label htmlFor="width">
          Largura: 
          <input 
            id="width" 
            type="number" 
            value={width} 
            onChange={(event) => setWidth(Number(event.target.value))} 
          />
        </label>

        <label htmlFor="height">
          Altura: 
          <input 
            id="height" 
            type="number" 
            value={height} 
            onChange={(event) => setHeight(Number(event.target.value))} 
          />
        </label>

        <label htmlFor="thickness">
          Espessura: 
          <select 
            id="thickness" 
            value={thickness} 
            defaultValue="15mm" 
            onChange={(event) => setThickness(event.target.value)}
          >
            <option value="3mm" >3mm</option>
            <option value="6mm" >6mm</option>
            <option value="9mm" >9mm</option>
            <option value="12mm" >12mm</option>
            <option value="15mm" >15mm</option>
          </select>
        </label>
    </Container>
  )
}