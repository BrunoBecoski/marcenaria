import { useState } from 'react';

import { useMdf } from '../../../contexts/MdfContext';

import { Button } from './styles';

type ButtonProps = {
  handleAddComponentInput: (type: 'mdf') => void;
}

export default function Buttons({ handleAddComponentInput }: ButtonProps) {
   const { handleMdfOpen, isMdfOpen } = useMdf();

  return (
    <>
      {/* <Button type="button" onClick={() => handleAddComponentInput('mdf')}>MDF</Button> */}
      <Button onClick={handleMdfOpen} isMdfOpen={isMdfOpen}>MDF</Button>
    </>
  );
}