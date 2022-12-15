import { MutableRefObject, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useGetClientsQuery } from '../../../../graphql/generated';

import { 
  Tabs,
  TextField,
 } from '../../../../components/MaterialDesign';

import { Form } from './styles';

export interface ClientData {
  name: string;
  phoneNumber: string;
}

const schema = yup.object({
  name: yup.string().required('Obrigatório'),
  phoneNumber: yup.string(),
})

interface NewClientPros {
  setStep: (value: number) => void;
  client: ClientData;
  submitRef: MutableRefObject<HTMLButtonElement>;
  setClient: (data: ClientData) => void;
}

export function NewClient({ client, submitRef, setStep, setClient }: NewClientPros) {
  const [tabActive, setTabActive] = useState('search');

  const { handleSubmit, control, formState: { errors, isValid } } = useForm<ClientData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: client.name || '',
      phoneNumber: client.phoneNumber || '',
    }
  });

  async function onSubmit(data: ClientData) {    
    setStep(3)
    setClient(data)
  }

  const { data } = useGetClientsQuery()

  console.log(data)

  useEffect(() => {
    console.log(tabActive)
  }, [tabActive])

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

      <Controller
        control={control}
        name="name"
        render={({ 
          field: { name, onChange, value},
          formState: { errors },
        }) =>(
          <TextField
            list="clients"
            label="Nome"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.name?.message}                
          />
        )}
      />
    
      <Controller
        control={control}
        name="phoneNumber"
        render={({
            field: { name ,onChange, value },
          }) =>(
          <TextField 
            label="Telefone"
            type="tel"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.phoneNumber?.message}
          />
        )}
      /> 

      <button
        ref={submitRef}
        type="submit"
        style={{ display: 'none' }}
      />
    </Form>
  )
}