import { MutableRefObject, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { 
  TextField,
 } from '../../../../components/MaterialDesign';

import { Form } from './styles';

export interface ClientData {
  name: string;
  phoneNumber: string;
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório.'),
  phoneNumber: yup.string(),
})

interface NewClientPros {
  submitRef: MutableRefObject<HTMLButtonElement>;
  setClientIsValid: (value: boolean) => void;
  setClient: (data: ClientData) => void;
}

export function NewClient({ submitRef, setClientIsValid, setClient }: NewClientPros) {
  const { handleSubmit, control, formState: { errors, isValid } } = useForm<ClientData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phoneNumber: '',
    }
  });


  async function onSubmit(data: ClientData) {
    setClient(data)
  }

  useEffect(() => {
    setClientIsValid(isValid);
  }, [isValid])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ 
          field: { name, onChange, value},
          formState: { errors },
        }) =>(
          <TextField 
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