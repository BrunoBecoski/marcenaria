import { MutableRefObject, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { format } from 'date-fns';

import { ProductType } from '../../../../graphql/generated';

import { 
  Button, 
  RadioBox, 
  TextField, 
  TextFieldCurrency
} from '../../../../components/MaterialDesign';

import { Form } from './styles';

export interface ProductData {
  name: string;
  description: string;
  price: string;
  date: string;
  type: ProductType;
}

const schema = yup.object({
  name: yup.string().required('Name obrigatório'),
  description: yup.string().required('descrição obrigatório'),
  price: yup.string().required('Preço obrigatório'),
  date: yup.string().required('Obrigatório'),
  type: yup.string().required('Obrigatório'),
})

interface NewProductProps {
  product: ProductData;
  submitRef: MutableRefObject<HTMLButtonElement>;
  setProductIsValid: (value: boolean) => void;
  setProduct: (data: ProductData) => void;
}

export function NewProduct({ product, setProductIsValid, setProduct, submitRef }: NewProductProps) {
  const { handleSubmit, control, getValues, setValue, reset, formState: { isValid }} = useForm<ProductData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: product.name || '',
      description: product.description || '',
      price: product.price || 'R$ 00,00',
      date: product.date || format(new Date(), 'yyyy-MM-dd'),
      type: product.type || ProductType.New,
    },
  })

  async function onSubmit(data: ProductData) {
    setProductIsValid(!!data)
    setProduct(data)
  }

  useEffect(() => { 
    console.log(isValid)
  }, [isValid])

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

      <button
        ref={submitRef}
        type="submit"
        style={{ display: 'none' }}
      />      
    </Form>
  )
}