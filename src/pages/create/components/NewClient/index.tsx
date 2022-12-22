import { MutableRefObject, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useGetClientsQuery } from '../../../../graphql/generated';

import { 
  ListWithRadioButton,
  ListContentTypes,
  Tabs,
 } from '../../../../components/MaterialDesign';

import { Form } from './styles';

export interface ClientData {
  name: string;
  phoneNumber: string;
}

const schema = yup.object({
  name: yup.string().required('Obrigatório'),
})

interface NewClientPros {
  setStep: (value: number) => void;
  client: ClientData;
  submitRef: MutableRefObject<HTMLButtonElement>;
  setClient: (data: ClientData) => void;
}

export function NewClient({ client, submitRef, setStep, setClient }: NewClientPros) {
  const [tabActive, setTabActive] = useState('search');
  const [clients, setClients] = useState<ListContentTypes[]>([]);
  const [selected, setSelected] = useState('');

  const { data, loading } = useGetClientsQuery()

  const { handleSubmit, control } = useForm<ClientData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: client.name || '',
    }
  });

  async function onSubmit(data: ClientData) {    
    setStep(3)
    setClient(data)
  }

  
  useEffect(() => {
    if(data) {
      setClients(data.clients.map(client => {
        return {
          id: client.id,
          text: client.name,
        }
      }))
    }
  }, [loading])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Tabs
        tabs={[
          { id: 'search', label: 'Buscar' },
          { id: 'new', label: 'Novo' },
        ]}
        setTabActive={setTabActive}
        tabActive={tabActive}
      />

     { !loading &&
        <ListWithRadioButton
          icon="person"
          content={clients}
          setSelected={setSelected}
        />
      }

      <button
        ref={submitRef}
        type="submit"
        style={{ display: 'none' }}
      />
    </Form>
  )
}