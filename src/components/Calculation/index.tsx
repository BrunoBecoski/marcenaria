import { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md'

import { Container, Header, Main, NavBar, Content, AddOptions, OptionsAddModal } from './styles';

export function Calculation() {
  const [optionsAddModalIsOpen, setOptionsAddModalIsOpen] = useState(false);

  function handleAddOptions() {
    setOptionsAddModalIsOpen(!optionsAddModalIsOpen);
  }


  return (
    <Container>
      {optionsAddModalIsOpen &&
        <OptionsAddModal>
          <button>3mm</button>
          <button>6mm</button>
          <button>9mm</button>
          <button>12mm</button>
          <button>15mm</button>
        </OptionsAddModal>
      }
      {optionsAddModalIsOpen && 
        <div className="background" onClick={handleAddOptions}></div>
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
        <MdAddCircle size={'80px'} onClick={handleAddOptions} />
      </AddOptions>
    </Container>
  );
}