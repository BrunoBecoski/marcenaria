import { useState } from 'react';

import { Button, Container } from './styles';

type ButtonProps = {
  handleAddComponentInput: (type: 'mdf') => void;
}

export default function Buttons({ handleAddComponentInput }: ButtonProps) {
  const [isModalMdfOpen, setIsModalMdfOpen] = useState(false);

  function modalMdf() {
    setIsModalMdfOpen(!isModalMdfOpen);
  }

  return (
    <>
    {/* <Button type="button" onClick={() => handleAddComponentInput('mdf')}>MDF</Button> */}
    <button onClick={modalMdf}>MDF</button>
    <Container>
      <div style={{ display: isModalMdfOpen ? "flex" : "none" }}>
        <button>3mm</button>
        <button>6mm</button>
        <button>9mm</button>
        <button>12mm</button>
        <button>15mm</button>
      </div>
    </Container>
    </>
  );
}