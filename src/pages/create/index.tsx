import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns';

import { ProductType } from '../../graphql/generated';

import { Layout } from '../../components/Layout';
import { NewProduct, ProductData } from './components/NewProduct';
import { NewClient, ClientData } from './components/NewClient';

import {
  ProgressIndicator,
  Button,
} from '../../components/MaterialDesign'

import { CreateContainer } from './styles';

export default function Create() {
  const [step, setStep] = useState(1)

  const [product, setProduct ] = useState<ProductData>({} as ProductData);

  const [clientIsValid, setClientIsValid] = useState(false);
  const [client, setClient] = useState<ClientData>({} as ClientData);

  const productSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  const clientSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  const productSchema = yup.object({
    name: yup.string().required('Requerido'),
    description: yup.string(),
    price: yup.string(),
    date: yup.string(),
    type: yup.string(),
  })

  const productMethods = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product.name || '',
      description: product.description || '',
      price: product.price || 'R$ 00,00',
      date: product.date || format(new Date(), 'yyyy-MM-dd'),
      type: product.type || ProductType.New,
    }
  })
  
  function nextStep() {
    if(step === 1) {
      productSubmit.current.click();
      
      if (productMethods.formState.isValid) {
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
            <FormProvider {...productMethods}>
              <NewProduct
                submitRef={productSubmit}
                setProduct={setProduct}
              />
            </FormProvider>
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