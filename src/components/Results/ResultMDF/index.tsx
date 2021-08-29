import { Container } from './styles';

type resultMDFProps = {
  inputsMDFResult: {
    total3: number;
    total6: number;
    total9: number;
    total12: number;
    total15: number;
  }
}

export function ResultMDF({ inputsMDFResult }: resultMDFProps) {

  console.log(inputsMDFResult)

  return (
    <Container>
      <h2>Resultados do MDF</h2>

      {(inputsMDFResult.total3 > 0) &&
        <>
          <h3>3mm</h3>
          <strong>{inputsMDFResult.total3}cm²</strong>
        </>
      }

      {(inputsMDFResult.total6 > 0) &&
        <>
          <h3>6mm</h3>
          <strong>{inputsMDFResult.total6}cm²</strong>
        </> 
      }

      {(inputsMDFResult.total9 > 0) && 
        <>
          <h3>9mm</h3>
          <strong>{inputsMDFResult.total9}cm²</strong>
        </>
      }

      {(inputsMDFResult.total12 > 0) && 
        <>
          <h3>12mm</h3>
          <strong>{inputsMDFResult.total12}cm²</strong>
        </>
      }

      {(inputsMDFResult.total15 > 0) && 
        <>
          <h3>15mm</h3>
          <strong>{inputsMDFResult.total15}cm²</strong>
        </>
      }


    </Container>
  )
}