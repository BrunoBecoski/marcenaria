import { useState } from 'react';
import { Container, Content } from './styles';

type ModalCreateInputBoxProps = {
  onClose: () => void;
}

export function ModalCreateInputBox({ onClose }: ModalCreateInputBoxProps) {

  const [selectType, setSelectType] = useState('mdf')

  function handleCreate() {
    console.log('submit');
 }
 
  return (
    <Container>
      <Content>
        <button onClick={onClose}>Fechar Modal</button>
        <form onSubmit={handleCreate}>
          <h2>Mdf</h2>
          <button type="submit">Criar</button>
        </form>
      </Content>
    </Container >
  );
}