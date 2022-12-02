import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { format } from 'date-fns';

import { ProductType, useCreateProductMutation } from '../../graphql/generated';

import { Button } from '../Button';
import { RadioBox } from '../RadioBox';
import { TextField, TextFieldCurrency } from '../TextField';

import { Form } from './styles';

interface IFormInputs {
  name: string;
  description: string;
  price: string;
  date: string;
  type: ProductType;
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
      type: ProductType.New,
    }
  })

  const [createProduct] = useCreateProductMutation()

  async function onSubmit(data: IFormInputs) {
    const { name, description, date, price, type } = data;

    const priceFormatted = Number(price.replace(/\D+/g, ''));

    try {
      await createProduct({
        variables: {
          name,
          description,
          date,
          price: priceFormatted,
          type,
        }
      })

      reset()
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
            getValues={getValues}
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
        name="date"
        render={({
          field: { name, onChange, value },
          formState: { errors },
        }) => (
          <TextField
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
        }) => (
          <RadioBox
            title="Tipo de trabalho"
            name={name}
            items={[
              { label: 'Novo', value: ProductType.New },
              { label: 'Reforma', value: ProductType.Reform },
            ]}
            value={value}
            onChange={onChange}
          />
        )}
      />  

      <Button type="submit">
        Cadastar
      </Button>      
    </Form>
  )
}