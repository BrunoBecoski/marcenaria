import { usePrice } from '../../contexts/PriceContext';

import { ResultMDF } from './ResultMDF';

import { Container } from './styles';

export default function Results() {

  const data = usePrice();

  return (
    <Container>
      

      <ResultMDF /> 

    </Container>
  )
}