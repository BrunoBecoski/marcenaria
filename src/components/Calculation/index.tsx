import { useEffect, useState } from 'react';
// import { MdAddCircle } from 'react-icons/md'

import { ModalOptionsCreate } from '../ModalOptionsCreate';

import { Container, Header, Main, NavBar, Content, AddOptions, OptionsAddModal } from './styles';

export function Calculation() {
  const [modalOptionsCreateIsOpen, setModalOptionsCreateIsOpen] = useState(false);

  function handleOpenModalOptionsCreate() {
    setModalOptionsCreateIsOpen(true);
  }

  function handleCloseModalOptionsCreate() {
    setModalOptionsCreateIsOpen(false);
  }

  return (
    <Container>
      {modalOptionsCreateIsOpen &&
      <div className="overlay-modal">
        <div className="overlay" onClick={handleCloseModalOptionsCreate} />
        <ModalOptionsCreate
          handleClose={handleCloseModalOptionsCreate}
        /> 
      </div> 
      }
      <Header>
        <h2>Criar - Mdf</h2>
      </Header>

      <Main>

        <NavBar>
          <h3 className="selected">Mdf</h3>
          <h3>Madeira</h3>
        </NavBar>

        <Content>

        </Content>

      </Main>
      
 
      <AddOptions>
        Add
        {/* <MdAddCircle size={'80px'} onClick={handleOpenModalOptionsCreate} /> */}
      </AddOptions>
    </Container>
  );
}