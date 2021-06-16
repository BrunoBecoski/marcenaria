import React, { useEffect, useState } from 'react';

import InputsMDF from '../components/InputsMDF';
import ResultMDF from '../components/ResultMDF';

type inputValuesMDFProps = {
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

type inputListProps = {
  id: number;
  type: 'mdf';
}

export default function Home() {
  const [keyComponentInput, setKeyComponentInput] = useState(0);
  const [componentInputList, setComponentInputList] = useState<inputListProps[]>([]);
  const [inputsMDFResult, setInputsMDFResult] = useState<inputsMDFResultProps>();
  
  function handleAddComponentInput(type: 'mdf') {
    setComponentInputList([...componentInputList, { id: keyComponentInput, type: type }]);
    setKeyComponentInput(keyComponentInput + 1);
  }

  function handleRemoveComponentInput(id: number) {
    const newComponentInputList = componentInputList.filter((component) => component.id !== id);
    setComponentInputList(newComponentInputList);
  }
    
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    let inputValuesMDF: inputValuesMDFProps[] = [];
  
    if(componentInputList.length === 1) {
      const inputValue = {
        width: event.target.width.value,
        height: event.target.height.value,
        thickness: event.target.thickness.value
      }
      inputValuesMDF.push(inputValue)
    } else {
      for (let index = 0; index < componentInputList.length; index++) {
        const inputValue = {
          width: event.target.width[index].value,
          height: event.target.height[index].value,
          thickness: event.target.thickness[index].value
        }
        inputValuesMDF.push(inputValue)
      }
    }

    setInputsMDFResult(inputValuesMDF.reduce((acc, input) => {
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

      <button type="button" onClick={() => handleAddComponentInput('mdf')}>+ MDF</button>

      <form onSubmit={handleSubmit}>
        {
          componentInputList.map((input) => {
            switch (input.type) {
              case 'mdf':
                return <InputsMDF 
                        key={input.id} 
                        id={input.id} 
                        handleRemoveComponentInput={handleRemoveComponentInput} 
                      />
                break;
            }

          })
        }
        <button type="submit">Calcular</button>
      </form>

      <h1>Resultado</h1>

      {inputsMDFResult && <ResultMDF data={inputsMDFResult}/>}
      
    </div>
  )
}
