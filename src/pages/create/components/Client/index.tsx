import { useEffect, useState } from 'react';

import { 
  Tabs,
 } from '../../../../components/MaterialDesign';

 import { SelectClient } from '../SelectClient';

import { ClientContainer } from './styles';

interface ClientPros {
  setClient: (data: ClientInfoProps | undefined) => void;
}

interface ClientInfoProps {
  id: string;
  name: string;
}

export function Client({ setClient }: ClientPros) {
  const [tabActive, setTabActive] = useState('select');
  const [clientSelected, setClientSelected] = useState<any | undefined>(undefined);

  useEffect(() => {
    if(clientSelected) {
      setClient({
        id: clientSelected.id,
        name: clientSelected.text,
      })
    } else {
      setClient(undefined)
    }
  }, [clientSelected])

  return (
    <ClientContainer>
      <Tabs
        tabs={[
          { id: 'select', label: 'Selecione' },
          { id: 'create', label: 'Criar' },
        ]}
        setTabActive={setTabActive}
        tabActive={tabActive}
      />

      { tabActive === 'select' && <SelectClient setClientSelected={setClientSelected} /> }

      { tabActive === 'create' && <h1>Criar novo cliente</h1> }
    </ClientContainer>
  )
}