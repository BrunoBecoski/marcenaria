import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../Button';
import { RadioBox } from '../RadioBox';
import { TextField, TextFieldCurrency } from '../TextField';

import { Form } from './styles';

interface IFormInputs {
  name: string;
  description: string;
  price: number;
  date: string;
  type: 'new' | 'reform';
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório.'),
  description: yup.string().notRequired(),
  price: yup.number().positive('Valor negativo.'),
  date: yup.string().notRequired(),
  type: yup.string().notRequired(),
})


export function ProductForm() {
  const { handleSubmit, control, setValue, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  async function onSubmit(data: IFormInputs) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({
          field: { name, onChange, value },
          formState: { errors }
        }) => (
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
        name="description"
        render={({
          field: { name, onChange, value },
          formState: { errors }
        }) => (
          <TextField
            label="Descrição"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.description?.message}     
          />
        )}
      />

      <Controller
        control={control}
        name="price"
        render={({
          field: { name, onChange, value },
          formState: { errors }
        }) => (
          <TextFieldCurrency
            setValue={setValue}
            label="Preço"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.price?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="type"
        render={({
          field: { name, onChange },
          formState: { errors }
        }) => (
          <RadioBox
            title="Tipo de "
            items={[
              { label: 'Novo', value: 'new' },
              { label: 'Reforma', value: 'reform' },
            ]}
            name={name}
            onChange={onChange}
            errorMessage={errors.type?.message}     
          />
        )}
      />  

      <Button type="submit">
        Cadastar
      </Button>      
    </Form>
  )
}