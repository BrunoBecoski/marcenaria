import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { format } from 'date-fns'

import { Button } from '../Button';
import { RadioBox } from '../RadioBox';
import { TextField, TextFieldCurrency } from '../TextField';

import { Form } from './styles';

interface IFormInputs {
  name: string;
  description: string;
  price: string;
  date: string;
  type: 'new' | 'reform';
}

const schema = yup.object({
  name: yup.string(),
  description: yup.string(),
  price: yup.string(),
  date: yup.string(),
  type: yup.string(),
})

export function ProductForm() {
  const { handleSubmit, control, getValues, setValue, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      description: '',
      price: 'R$ 00,00',
      date: format(new Date(), 'yyyy-MM-dd'),
      type: 'new',
    }
  })

  async function onSubmit(data: IFormInputs) {
    console.log(data);
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({
          field: { name, onChange, value },
          formState: { defaultValues ,errors }
        }) => (
          <TextField
            label="Nome"
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValues?.name}
            errorMessage={errors.name?.message}            
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({
          field: { name, onChange, value },
          formState: { defaultValues ,errors }
        }) => (
          <TextField
            label="Descrição"
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValues?.description}
            errorMessage={errors.description?.message}     
          />
        )}
      />

      <Controller
        control={control}
        name="price"
        render={({
          field: { name, onChange, value },
          formState: { defaultValues, errors }
        }) => (
          <TextFieldCurrency
            getValues={getValues}
            setValue={setValue}
            label="Preço"
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValues?.price}
            errorMessage={errors.price?.message}
          />
        )}
      />
      
      <Controller
        control={control}
        name="date"
        render={({
          field: { name, onChange, value },
          formState: { defaultValues, errors },
        }) => (
          <TextField
            defaultValue={defaultValues?.date}
            type="date"
            label="Data"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.date?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="type"
        render={({
          field: { name, value, onChange },
          formState: { defaultValues },
        }) => (
          <RadioBox
            title="Tipo de trabalho"
            name={name}
            items={[
              { label: 'Novo', value: 'new' },
              { label: 'Reforma', value: 'reform' },
            ]}
            value={value}
            onChange={onChange}
            defaultValue={defaultValues?.type}
          />
        )}
      />  

      <Button type="submit">
        Cadastar
      </Button>      
    </Form>
  )
}