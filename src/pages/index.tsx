import React, { useState } from 'react';

import { useMdf } from '../contexts/MdfContext';
 
import Aside from '../components/Aside';
import Form from '../components/Form';
import Results from '../components/Results';
import MdfConfig from '../components/MdfConfig';

import { Container } from '../styles/Home-styles';

type inputListProps = {
  id: number;
  type: 'mdf';
}

export default function Home() {
  const [keyComponentInput, setKeyComponentInput] = useState(0);
  const [componentInputList, setComponentInputList] = useState<inputListProps[]>([]);

  const { isMdfOpen } = useMdf();
  
  function handleAddComponentInput(type: 'mdf') {
    setComponentInputList([...componentInputList, { id: keyComponentInput, type: type }]);
    setKeyComponentInput(keyComponentInput + 1);
  }

  function handleRemoveComponentInput(id: number) {
    const newComponentInputList = componentInputList.filter((component) => component.id !== id);
    setComponentInputList(newComponentInputList);
  }
    
  return (
    <Container>
      <main>

        
          <Aside 
            handleAddComponentInput={handleAddComponentInput}
            />   
          <MdfConfig /> 
          {isMdfOpen ?
              <>
              </>
            :
            <section>
              <Form 
                componentInputList={componentInputList} 
                handleRemoveComponentInput={handleRemoveComponentInput}
                />
                
              <Results />
            </section>
          }

      </main>
    </Container>
  )
}
