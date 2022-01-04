import { useState } from 'react';

import { ModalCreateInputBox } from '../ModalCreateInputBox';
import { Container } from './styles';

export default function Form() {
  const [modalCreateInputBoxIsOpen, setModalCreateInputBoxIsOpen] = useState(false);
  
  function handleOpenModal() {
    setModalCreateInputBoxIsOpen(true);
  }

  function handleCloseModal() {
    setModalCreateInputBoxIsOpen(false);
  }

  return (
    <>
    {modalCreateInputBoxIsOpen &&
      <ModalCreateInputBox onClose={handleCloseModal} />  
    }
    <Container>
        <h2>Formulário</h2>

        <button type='button' onClick={handleOpenModal}>Abrir Modal</button>
    
        <button type="submit">Calcular</button>
    </Container>
    </>  
  )
}
