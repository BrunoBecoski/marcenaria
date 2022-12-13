import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns';

import { ProductType } from '../../graphql/generated';

import { Layout } from '../../components/Layout';
import { NewClient, ClientData } from './components/NewClient';

import {
  ProgressIndicator,
  Button,
  RadioBox,
  TextField, 
  TextFieldCurrency,
} from '../../components/MaterialDesign'

import { CreateContainer } from './styles';

interface ProductData {
  name: string;
  description: string;
  price: string;
  date: string;
  type: ProductType;
}

export default function Create() {
  const [step, setStep] = useState(1)

  const [product, setProduct ] = useState<ProductData>({} as ProductData);

  const [clientIsValid, setClientIsValid] = useState(false);
  const [client, setClient] = useState<ClientData>({} as ClientData);

  const productSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  const clientSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  function nextStep() {   
    if(step === 1) {
      productSubmit.current.click();
      
      if (methodsProduct.formState.isValid) {
       setStep(prevState => prevState + 1);
      }
    }

    if(step === 2) {
      clientSubmit.current.click();

      if (clientIsValid) {
        setStep(prevState => prevState + 1);
       }
    }
  }

  const productSchema = yup.object({
    name: yup.string().required('*Requerido'),
    description: yup.string(),
    price: yup.string(),
    date: yup.string(),
    type: yup.string(),
  })

  const methodsProduct = useForm<ProductData>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product.name || '',
      description: product.description || '',
      price: product.price || 'R$ 00,00',
      date: product.date || format(new Date(), 'yyyy-MM-dd'),
      type: product.type || ProductType.New,
    }
  });

  function handleSubmitProduct(data: ProductData) {
    setProduct(data)
  }

  useEffect(() => {
    console.log(methodsProduct.formState.isValid)
  }, [methodsProduct.formState.isValid])

  return (
    <Layout>

      <CreateContainer>

        <ProgressIndicator
          size={3}
          active={step}
        />

        <div className="nav">
          {
            step > 1 ?
            <Button onClick={() => setStep(prevState => prevState - 1)}>
              Anterior
            </Button>
            : <span />
          }

          { 
            step < 3 ?
            <Button 
              // disabled
              onClick={nextStep}
            >
              Próximo
            </Button>
            : <span />
          }
        </div>

          {
            step === 1 &&
            <form onSubmit={methodsProduct.handleSubmit(handleSubmitProduct)}>
              <Controller
                control={methodsProduct.control}
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
                control={methodsProduct.control}
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
                control={methodsProduct.control}
                name="price"
                render={({
                  field: { name, onChange, value },
                  formState: { errors }
                }) => (
                  <TextFieldCurrency
                    getValues={methodsProduct.getValues}
                    setValue={methodsProduct.setValue}
                    label="Preço"
                    name={name}
                    value={value}
                    onChange={onChange}
                    errorMessage={errors.price?.message}
                  />
                )}
              />
              
              <Controller
                control={methodsProduct.control}
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
                control={methodsProduct.control}
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
                ref={productSubmit}
                type="submit"
                style={{ display: 'none' }}
              />      
          </form>
          }

          {
            step === 2 &&
              <NewClient
                client={client}
                submitRef={clientSubmit}
                setClientIsValid={setClientIsValid}
                setClient={setClient}
              />
          }

          { step === 3 &&
            <>
              {JSON.stringify(product)}
              {JSON.stringify(client)}
            </>
          }
      </CreateContainer>
    </Layout>
  )
}