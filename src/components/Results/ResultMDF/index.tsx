import { useEffect, useState } from 'react';

import { Container } from './styles';

type resultMdfProps = {
  total3: number;
  total6: number;
  total9: number;
  total12: number;
  total15: number;
}

export function ResultMDF() {
  const [inputsMdfResult, setInputsMDFResult] = useState({} as resultMdfProps);

  // useEffect(() => {
  //   setInputsMDFResult(inputsMDFValues.reduce((acc, input) => {
  //     switch(input.thickness) {
  //         case '3mm':
  //         acc.total3 += input.height * input.width;
  //         break;
  //         case '6mm':
  //           acc.total6 += input.height * input.width;
  //         break;
  //         case '9mm':
  //           acc.total9 += input.height * input.width;
  //           break;
  //         case '12mm':
  //           acc.total12 += input.height * input.width;
  //           break;
  //           case '15mm':
  //             acc.total15 += input.height * input.width;
  //         break;
  //     }
      
  //       return acc;
  //     }, {
  //       total3: 0,
  //       total6: 0,
  //       total9: 0,
  //       total12: 0,
  //       total15: 0,
  //     }));

  // }, [inputsMDFValues])

  return (
    <Container>
      <h2>Resultados do MDF</h2>

      {(inputsMdfResult.total3 > 0) &&
        <>
          <h3>3mm</h3>
          <p>{inputsMdfResult.total3}cm²</p>
          <p>R${inputsMdfResult.total3 * mdf3?.price}</p>
        </>
      }

      {(inputsMdfResult.total6 > 0) &&
        <>
          <h3>6mm</h3>
          <p>{inputsMdfResult.total6}cm²</p>
          <p>R${inputsMdfResult.total6 * mdf6?.price}</p>
        </> 
      }

      {(inputsMdfResult.total9 > 0) && 
        <>
          <h3>9mm</h3>
          <p>{inputsMdfResult.total9}cm²</p>
          <p>R${inputsMdfResult.total9 * mdf9?.price}</p>
        </>
      }

      {(inputsMdfResult.total12 > 0) && 
        <>
          <h3>12mm</h3>
          <p>{inputsMdfResult.total12}cm²</p>
          <p>R${inputsMdfResult.total12 * mdf12?.price}</p>
        </>
      }

      {(inputsMdfResult.total15 > 0) && 
        <>
          <h3>15mm</h3>
          <p>{inputsMdfResult.total15}cm²</p>
          <p>R${inputsMdfResult.total15 * mdf15?.price}</p>
        </>
      } 
    </Container>
  )
}