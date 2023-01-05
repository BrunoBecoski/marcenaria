import { MutableRefObject, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGetClientsQuery } from '../../../../graphql/generated';

import {
  ListWithRadioButton,
  ListContentTypes,
  TextField,
  Tabs,
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

const clientSchema = yup.object({
  name: yup.string().required('Obrigatório'),
})

export function Client({ setClient, client, setStep, clientSubmitButtonRef  }: ClientPros) {
  const [clientSelected, setClientSelected] = useState<any | undefined>(undefined);

  const [tab, setTab] = useState('new');

  useEffect(() => {
    if(clientSelected) {
      setClient({
        id: clientSelected.id,
        name: clientSelected.text,
      })
    }
  }, [clientSelected])


  async function onSubmit(data: ClientData) {
    if(tab === 'new') {
      setClient(clientSelected);
      setStep(2);
    } 
    if (tab === 'select') {
      setClient(data);
      setStep(2);
    }
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

      {
        <Tabs
          setTabActive={setTab}
          tabActive={tab}
          tabs={
            [
              { id: 'new', label: 'Novo' },
              { id: 'select', label: 'Selecione' },
            ]
          }
        />
      }

      { tab === 'new' &&
        <TextField
          name="name"
          label="Nome"
        />
      }

      { tab === 'select' &&
        <SelectClientContainer>
          {!loading &&
            <ListWithRadioButton
              icon="person"
              content={clients}
              setSelected={setClientSelected}
            />
          }
        </SelectClientContainer>
      }

      <button 
        ref={clientSubmitButtonRef}
        type="submit"
        style={{ display: 'hidden' }}
      />
    </ClientContainer>
  )
}