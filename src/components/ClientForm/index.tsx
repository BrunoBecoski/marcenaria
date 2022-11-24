import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useCreateClientMutation } from '../../graphql/generated';

import { TextField } from '../TextField';
import { Button } from '../Button';

import { Form } from './styles';

interface IFormInputs {
  name: string;
  phoneNumber: string;
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório.'),
  phoneNumber: yup.string(),
})

export function ClientForm() {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phoneNumber: '',
    }
  });

  const [createClient] = useCreateClientMutation();

  async function onSubmit(data: IFormInputs) {
    try {
      await createClient({
        variables: {
          name: data.name,
          phoneNumber: data.phoneNumber,
        }
      })
    } catch (error) {
      console.log(JSON.stringify(error, null, ' '))
    }
  }

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

      <Button type="submit">
        Cadastrar
      </Button>
    </Form>
  )
}