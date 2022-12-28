import { MutableRefObject, useEffect, useState } from 'react';

import { useGetClientsQuery } from '../../../../graphql/generated';

import {
  ListWithRadioButton,
  ListContentTypes,
  TextField,
} from '../../../../components/MaterialDesign';

import { ClientContainer, SelectClientContainer } from './styles';

interface ClientData {
  id: string;
  name: string;
}

interface ClientPros {
  setClient: (data: ClientData) => void;
  client: ClientData;
  clientSubmitButtonRef: MutableRefObject<HTMLButtonElement>;
  setStep: (step: number) => void;
}

export function Client({ setClient, client, setStep, clientSubmitButtonRef  }: ClientPros) {
  const [clientSelected, setClientSelected] = useState<any | undefined>(undefined);

  useEffect(() => {
    if(clientSelected) {
      setClient({
        id: clientSelected.id,
        name: clientSelected.text,
      })
    }
  }, [clientSelected])


  async function onSubmit(data: ClientData) {
    setClient(data);
    setStep(2);
  }


  const [clients, setClients] = useState<ListContentTypes[]>([]);

  const { data, loading } = useGetClientsQuery();

  useEffect(() => {
    if (data) {
      setClients(data.clients.map(client => {
        return {
          id: client.id,
          text: client.name,
        }
      }))
    }
  }, [loading])

  return (
    <ClientContainer onSubmit={() => onSubmit}>
      <TextField
        name="name"
        label="Nome"
      />
      <SelectClientContainer>
        {!loading &&
          <ListWithRadioButton
            icon="person"
            content={clients}
            setSelected={setClientSelected}
          />
        }
      </SelectClientContainer>

      <button 
        ref={clientSubmitButtonRef}
        type="submit"
        style={{ display: 'hidden' }}
      />
    </ClientContainer>
  )
}