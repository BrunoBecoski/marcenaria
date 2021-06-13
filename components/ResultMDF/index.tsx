import { Container } from './styles';

type resultMDFProps = {
  data: {
    total3: number;
    total6: number;
    total9: number;
    total12: number;
    total15: number;
  }
}

export default function ResultMDF({ data }: resultMDFProps) {

  console.log(data)

  return (
    <Container>
      <h2>Resultados do MDF</h2>

      {!(data.total3 === 0 )&&
        <>
          <h3>3mm</h3>
          <strong>{data.total3}cm²</strong>
        </>
      }

      {!(data.total6 === 0) &&
        <>
          <h3>6mm</h3>
          <strong>{data.total6}cm²</strong>
        </> 
      }

      {!(data.total9 === 0 )&& 
        <>
          <h3>9mm</h3>
          <strong>{data.total9}cm²</strong>
        </>
      }

      {!(data.total12 === 0) && 
        <>
          <h3>12mm</h3>
          <strong>{data.total12}cm²</strong>
        </>
      }

      {!(data.total15 === 0) && 
        <>
          <h3>15mm</h3>
          <strong>{data.total15}cm²</strong>
        </>
      }


    </Container>
  )
}