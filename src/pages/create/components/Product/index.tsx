import { MutableRefObject } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';

import { ProductType } from '../../../../graphql/generated';

import {
  RadioGroup,
  TextField,
  TextFieldCurrency
} from '../../../../components/MaterialDesign';

import { ProductContainer } from './styles';

export interface ProductData {
  name: string;
  description: string;
  price: string;
  date: string;
  type: ProductType;
}

interface NewProductProps {
  setProduct: (data: ProductData) => void;
  product: ProductData;
  productSubmitButtonRef: MutableRefObject<HTMLButtonElement>;
  setStep: (step: number) => void;
}

const productSchema = yup.object({
  name: yup.string().required('Obrigatório'),
  description: yup.string().required('Obrigatório'),
  price: yup.string().required('Obrigatório'),
  date: yup.string(),
  type: yup.string(),
})

export function Product({ setProduct, product, setStep, productSubmitButtonRef }: NewProductProps) {
  const { handleSubmit, control, getValues, setValue } = useForm<ProductData>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product.name || '',
      description: product.description || '',
      price: product.price || '',
      date: product.date || format(new Date(), 'yyyy-MM-dd'),
      type: product.type || ProductType.New,
    }
  });

  async function onSubmit(data: ProductData) {
    setProduct(data);
    setStep(2);
  }

  return (
    <ProductContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="name">
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
      </div>

      <div className="description">
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
      </div>

      <div className="price">
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
      </div>

      <div className="date">
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
      </div>

      <div className="type">
        <Controller
          control={control}
          name="type"
          render={({
            field: { onChange, value },
          }) => (
            <RadioGroup
              title="Tipo"
              options={[
                { label: 'Novo', value: ProductType.New },
                { label: 'Reforma', value: ProductType.Reform },
              ]}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      
      <button
        type="submit"
        ref={productSubmitButtonRef}
      />
    </ProductContainer>
  )
}
