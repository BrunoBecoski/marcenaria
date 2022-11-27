import { yupResolver } from '@hookform/resolvers/yup';
import {  useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../Button';
import { RadioBox } from '../RadioBox';
import { TextField } from '../TextField';

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
  price: yup.number().negative('Valor negativo.'),
  date: yup.string().notRequired(),
  type: yup.string().notRequired(),
})


export function ProductForm() {
  const [price, setPrice] = useState('');

  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  function handlePrice(value: string) {
    const valueFormatted = Number(value.replace('R$', '').replace('.', '').replace(',', '.'));

    if(isNaN(valueFormatted)){
      return;
    }

    const priceFormatted = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valueFormatted)

    setPrice(priceFormatted)
  }

  async function onSubmit(data: IFormInputs) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Controller
        control={control}
        name="name"
        render={({
          field: { name, onChange, value},
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
          field: { name, onChange, value},
          formState: { errors }
        }) => (
          <TextField
            label="Descrição"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.name?.message}     
          />
        )}
      />

      <Controller
        control={control}
        name="price"
        render={({
          field: { name },
          formState: { errors }
        }) => (
          <TextField
            label="Preço"
            name={name}
            value={price}
            onChange={event => handlePrice(event.target.value)}
            errorMessage={errors.name?.message}     
          />
        )}
      />

      <Controller
        control={control}
        name="date"
        render={({
          field: { name, onChange, value},
          formState: { errors }
        }) => (
          <TextField
            label="Data"
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errors.name?.message}     
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
            errorMessage={errors.name?.message}     
          />
        )}
      />  

      <Button type="submit">
        Cadastar
      </Button>      
    </Form>
  )
}