import { useState } from 'react';
import { Container, Header,  Main, NavBar, Content, Background } from './styles';

type ModalCreateInputBoxProps = {
  onClose: () => void;
}

export function ModalCreateInputBox({ onClose }: ModalCreateInputBoxProps) {

  const [selectType, setSelectType] = useState('mdf')

  function handleCreate() {
    console.log('submit');
 }
 
  return (
    <Background>

      <Container>
        <Header>
          <h2>Criar - Mdf</h2>
          <button onClick={onClose}>X</button>
        </Header>
    
        <Main>

          <NavBar>
            <h3 className="selected">Mdf</h3>
            <h3>Madeira</h3>
          </NavBar>

          <Content>
            <form onSubmit={handleCreate}>
              <button type="submit">Criar</button>
            </form>
          </Content>

        </Main>
      </Container >
    </Background>
  );
}