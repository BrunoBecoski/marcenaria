import { useMdf } from '../../contexts/MdfContext';

import { Container } from './styles';

export default function MdfP() {
  const { isMdfOpen } = useMdf();

  if(isMdfOpen) {
    return (
      <Container>
        <h2>
          MDF
        </h2>
        {isMdfOpen}
      </Container>
    )
  }


  return (
    <>
    </>
  )
} 