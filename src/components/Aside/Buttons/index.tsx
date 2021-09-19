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
    <Button onClick={modalMdf}>MDF</Button>
    <Container>
      <div style={{ display: isModalMdfOpen ? "flex" : "none" }}>
        <button onClick={() => handleAddComponentInput('mdf')}>3mm</button>
        <button onClick={() => handleAddComponentInput('mdf')}>6mm</button>
        <button onClick={() => handleAddComponentInput('mdf')}>9mm</button>
        <button onClick={() => handleAddComponentInput('mdf')}>12mm</button>
        <button onClick={() => handleAddComponentInput('mdf')}>15mm</button>
      </div>
    </Container>
    </>
  );
}