import { useEffect, useState } from 'react';
import { Container } from './styles';

import { useFormResult } from '../../../contexts/FormResultContext';

type resultMdfProps = {
  total3: number;
  total6: number;
  total9: number;
  total12: number;
  total15: number;
}

export function ResultMDF() {
  const [inputsMdfResult, setInputsMDFResult] = useState({} as resultMdfProps);

  const { inputsMDFValues }  = useFormResult();

  useEffect(() => {
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

  }, [inputsMDFValues])
    
  return (
    <Container>
      <h2>Resultados do MDF</h2>
 
      {(inputsMdfResult.total3 > 0) &&
        <>
          <h3>3mm</h3>
          <strong>{inputsMdfResult.total3}cm²</strong>
        </>
      }

      {(inputsMdfResult.total6 > 0) &&
        <>
          <h3>6mm</h3>
          <strong>{inputsMdfResult.total6}cm²</strong>
        </> 
      }

      {(inputsMdfResult.total9 > 0) && 
        <>
          <h3>9mm</h3>
          <strong>{inputsMdfResult.total9}cm²</strong>
        </>
      }

      {(inputsMdfResult.total12 > 0) && 
        <>
          <h3>12mm</h3>
          <strong>{inputsMdfResult.total12}cm²</strong>
        </>
      }

      {(inputsMdfResult.total15 > 0) && 
        <>
          <h3>15mm</h3>
          <strong>{inputsMdfResult.total15}cm²</strong>
        </>
      } 
    </Container>
  )
}