import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
   
import { Container, Header,  Main, NavBar, Content, Background } from './styles';
import { InputRadio } from '../InputRadio';

type ModalCreateInputBoxProps = {
  onClose: () => void;
}

export function ModalCreateInputBox({ onClose }: ModalCreateInputBoxProps) {
  const [selectType, setSelectType] = useState('mdf');
  const [thickness, setThickness] = useState('12mm');

  function handleCreate() {
    console.log('submit');
  }

  useEffect(() => {
    console.log(thickness)
  }, [thickness]) 
  
  return (
    <Background>

      <Container>
        <Header>
          <h2>Criar - Mdf</h2>
          <button onClick={onClose}>
            <MdClose size='2rem'/>
          </button>
        </Header>
    
        <Main>

          <NavBar>
            <h3 className="selected">Mdf</h3>
            <h3>Madeira</h3>
          </NavBar>

          <Content>
            <form onSubmit={handleCreate}>
              <div>
                Espessura
                <InputRadio
                  value="3mm"
                  name="thickness"
                  setThickness={setThickness}
                />

                <InputRadio
                  value="6mm"
                  name="thickness"
                  setThickness={setThickness}
                />
                
                <InputRadio
                  value="9mm"
                  name="thickness"                  
                  setThickness={setThickness}
                />

                <InputRadio
                  value="12mm"
                  name="thickness"
                  defaultChecked
                  setThickness={setThickness}
                />

                <InputRadio
                  value="15mm"
                  name="thickness"
                  setThickness={setThickness}
                />
              </div>

              <div>
                <label>
                  Largura
                  <input />
                </label>

                <label>
                  Comprimento
                  <input />
                </label>
              </div>

              <label>
                Quantidade
                <input />
              </label>

              <button type="submit">Criar</button>
            </form>
          </Content>

        </Main>
      </Container >
    </Background>
  );
}