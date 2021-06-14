import React, { useState } from 'react';

import InputsMDF from '../components/InputsMDF';
import ResultMDF from '../components/ResultMDF';

type inputsMDFValuesProps = {
  id: number;
  width: number;
  height: number;
  thickness: string;
}

type inputsMDFResultProps = {
  total3: number;
  total6: number;
  total9: number;
  total12: number;
  total15: number;
}

export default function Home() {
  const [keyInputsMDF, setInputsMDF] = useState(1);
  const [inputsMDFValues, setInputsMDFValues] = useState<inputsMDFValuesProps[]>([]);
  const [inputsMDFComponent, setInputsMDFComponent] = useState([<InputsMDF key={0} id={0} addInputMDFValues={addInputMDFValues} />]);
  const [inputsMDFResult, setInputsMDFResult] = useState<inputsMDFResultProps>();
  
  function handleAddNewInputsMDF() {
    setInputsMDFComponent([...inputsMDFComponent, <InputsMDF key={keyInputsMDF} id={keyInputsMDF} addInputMDFValues={addInputMDFValues} />])
    setInputsMDF(keyInputsMDF + 1);
  }
  
  function addInputMDFValues(object: inputsMDFValuesProps) {

    const oldInputsMDF = inputsMDFValues.map((value) => {
      if(value.id === object.id) {
        return {}
      } 
        
      return value
    }); 

    console.log('oldInputsMDF');
    console.log(JSON.stringify(oldInputsMDF, null, 1));

    // setInputsMDFValues([...inputsMDFValues, object]);
  }
  
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setInputsMDFResult(inputsMDFValues.reduce((acc, input) => {
      switch(input.thickness) {
        case '3mm':
          acc.total3 += input.height * input.width;
          break;
        case '6mm':
          acc.total6 += input.height * input.width;
          break;
        case '9mm':
          acc.total9 += input.height * input.width;
          break;
        case '12mm':
          acc.total12 += input.height * input.width;
          break;
        case '15mm':
          acc.total15 += input.height * input.width;
          break;
      }
  
      return acc;
    }, {
      total3: 0,
      total6: 0,
      total9: 0,
      total12: 0,
      total15: 0,
    }));
  }

  return (
    <div>

      <h1>Cálculos</h1>
      <br />

    <form onSubmit={handleSubmit}>
      {inputsMDFComponent}
      <button onClick={handleAddNewInputsMDF}>+</button>
      <button type="submit">Calcular</button>
    </form>

      <h1>Resultado</h1>

      {inputsMDFResult && <ResultMDF data={inputsMDFResult}/>}
      
    </div>
  )
}
