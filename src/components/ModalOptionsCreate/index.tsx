import { useEffect, useState } from 'react';

import { Container, Content, Footer } from './style';
import { InputRadio } from '../InputRadio';

type ModalOptionsCreateProps = {
  handleClose: () => void;
}

export function ModalOptionsCreate({ handleClose }: ModalOptionsCreateProps) {
  const [thickness, setThickness] = useState('12mm');
  const [quantity, setQuantity] = useState(1);

  function handleSetThickness(value: string) {
    setThickness(value);
  }

  function handleCreate() {
    console.log('Espessura: ' + thickness);
    console.log('Quantidade: ' + quantity);
  }

  return (
    <Container>
      <h2>Mdf</h2>
      <Content>
        <div className="radio">
          <InputRadio
            value="3mm"
            name="thickness"
            handleChange={handleSetThickness}
            checked={thickness === '3mm' && true}
          />
          <InputRadio
            value="6mm"
            name="thickness"
            handleChange={handleSetThickness}
            checked={thickness === '6mm' && true}
          />        
          <InputRadio
            value="9mm"
            name="thickness"
            handleChange={handleSetThickness}
            checked={thickness === '9mm' && true}
          />
          <InputRadio
            value="12mm"
            name="thickness"
            handleChange={handleSetThickness}
            checked={thickness === '12mm' && true}
          />        
          <InputRadio
            value="15mm"
            name="thickness"
            handleChange={handleSetThickness}
            checked={thickness === '15mm' && true}
          />
        </div>

        <div className="range">
          <input 
            type="range" 
            min="1" 
            max="10"
            onChange={(props) => setQuantity(Number(props.target.value))}
            value={quantity}
          />
        </div>
      </Content> 
      <Footer>
        <button onClick={handleClose}>Cancelar</button>
        <button onClick={handleCreate}>Criar</button>
      </Footer>
    </Container>
  );
}