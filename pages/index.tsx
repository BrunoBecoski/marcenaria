import { useState } from 'react';

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
  const [inputsMDFArray, setInputsMDFArray] = useState([<InputsMDF key={0} id={0} />]);
      
  function handleAddNewInputsMDF() {
    setInputsMDFArray([...inputsMDFArray, <InputsMDF key={keyInputsMDF} id={keyInputsMDF} />])
    setInputsMDF(keyInputsMDF + 1);
  }
  
  function addObject(object: inputsMDFObject) {
    setInputsMDFObject([...inputsMDFObject, object]);
  }

  const sumary = inputsMDFObject.reduce((acc, transaction) => {
    switch(transaction.thickness) {
      case '3mm':
        acc.total3 += transaction.height * transaction.width;
        break;
      case '6mm':
        acc.total6 += transaction.height * transaction.width;
        break;
      case '9mm':
        acc.total9 += transaction.height * transaction.width;
        break;
      case '12mm':
        acc.total12 += transaction.height * transaction.width;
        break;
      case '15mm':
        acc.total15 += transaction.height * transaction.width;
        break;

    }

    return acc;
  }, {
    total3: 0,
    total6: 0,
    total9: 0,
    total12: 0,
    total15: 0,
    total: 0,
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log('submit');
    // console.log(event.target)
    console.log(event.target.height.value);
    console.log(event.target.width.value);
    console.log(event.target.thickness.value);
    // console.log(event);
  }

  return (
    <div>

      <h1>Cálculos</h1>
      <br />

    <form onSubmit={handleSubmit}>
      {inputsMDFArray}
      <button onClick={handleAddNewInputsMDF}>+</button>
      <button type="submit">Calcular</button>
    </form>



      <h1>Resultado</h1>


      {!(sumary.total3 === 0 )&&
        <>
          <h3>3mm</h3>
          <strong>{sumary.total3}cm²</strong>
        </>
      }

      {!(sumary.total6 === 0) &&
        <>
          <h3>6mm</h3>
          <strong>{sumary.total6}cm²</strong>
        </> 
      }

      {!(sumary.total9 === 0 )&& 
        <>
          <h3>9mm</h3>
          <strong>{sumary.total9}cm²</strong>
        </>
      }

      {!(sumary.total12 === 0) && 
        <>
          <h3>12mm</h3>
          <strong>{sumary.total12}cm²</strong>
        </>
      }

      {!(sumary.total15 === 0) && 
        <>
          <h3>15mm</h3>
          <strong>{sumary.total15}cm²</strong>
        </>
      }

    </div>
  )
}
