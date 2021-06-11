import { useEffect, useState } from 'react';

import InputsMDF from '../components/InputsMDF';

type inputsMDFObject = {
  id: number;
  height: number;
  width: number;
  thickness: string;
}

export default function Home() {
  const [keyInputsMDF, setInputsMDF] = useState(1);
  const [inputsMDFObject, setInputsMDFObject] = useState<inputsMDFObject[]>([]);
  const [inputsMDFArray, setInputsMDFArray] = useState([<InputsMDF key={0} id={0} addObject={addObject} />]);
      
  function handleAddNewInputsMDF() {
    setInputsMDFArray([...inputsMDFArray, <InputsMDF key={keyInputsMDF} id={keyInputsMDF} addObject={addObject} />])
    setInputsMDF(keyInputsMDF + 1);
  }
  
  function addObject(object: inputsMDFObject) {
    setInputsMDFObject([...inputsMDFObject, object]);
  }

  return (
    <div>
      <h1>Cálculos</h1>
      <br />

      <ul>
        {inputsMDFArray}
        <button onClick={handleAddNewInputsMDF}>+</button>
      </ul>


      <h1>Resultado</h1>
      {inputsMDFObject.map((inputMDF) => {
          return (
            <div key={inputMDF.id}>
              <p>{1 + inputMDF.id}ª item</p>
              <strong>{inputMDF.thickness}</strong>
              <br />
              <strong>{inputMDF.height * inputMDF.width} cm²</strong>
            </div>
          )
        })}     
    </div>
  )
}
