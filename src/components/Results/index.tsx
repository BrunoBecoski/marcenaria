import { useFormResult } from '../../contexts/FormResultContext';
import { ResultMDF } from './ResultMDF';

import { Container } from './styles';

export default function Results() {
  const { inputsMDFResult }  = useFormResult();

  return (
    <Container>
      <ResultMDF inputsMDFResult={inputsMDFResult}/> 
    </Container>
  )
}