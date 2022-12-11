import { MutableRefObject } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import * as yup from 'yup';

import { ProductType } from '../../../../graphql/generated';

import { 
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

interface NewProductProps {
  submitRef: MutableRefObject<HTMLButtonElement>;
  setProduct: (data: ProductData) => void;
}

export function NewProduct({ setProduct, submitRef }: NewProductProps) {
  const { handleSubmit, control, getValues, setValue } = useFormContext<ProductData>()

  async function onSubmit(data: ProductData) {
    setProduct(data)
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

      <button
        ref={submitRef}
        type="submit"
        style={{ display: 'none' }}
      />      
    </Form>
  )
}