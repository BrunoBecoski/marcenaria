import Buttons from './Buttons';

import { Container } from './styles';

type AsideProps = {
  handleAddComponentInput: (type: 'mdf') => void;
}

export default function Aside({ handleAddComponentInput }: AsideProps) {
  return(
    <Container>
      <h2>Adicionar</h2>
      <div>
        <Buttons handleAddComponentInput={handleAddComponentInput}/>
      </div>
    </Container>
  )
}