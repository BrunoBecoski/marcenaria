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

        <div>
          <h3>Espessura</h3>
          <label>
            <input type="radio" name="thick"/>
            3mm
          </label>
          <label>
            <input type="radio" name="thick"/>
            6mm
          </label>
          <label>
            <input type="radio" name="thick"/>
            9mm
          </label>
          <label>
            <input type="radio" name="thick"/>
            12mm
          </label>
          <label>
            <input type="radio" name="thick"/>
            15mm
          </label>
        </div>

        <div>
          <h3>Quantidade</h3>
          <label>
            <input type="number"/>
          </label>
        </div>

        <button>Criar</button>

      </Container>
    )
  }


  return (
    <>
    </>
  )
} 