import { useRef, useState } from 'react';

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

  const [productIsValid, setProductIsValid] = useState(false);
  const [product, setProduct ] = useState<ProductData>({} as ProductData);

  const [clientIsValid, setClientIsValid] = useState(false);
  const [client, setClient] = useState<ClientData>({} as ClientData);

  const productSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  const clientSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  function nextStep() {
    console.log(productIsValid)
    if(step === 1) {
      productSubmit.current.click();
      
      if (productIsValid) {
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
            <NewProduct
              product={product}
              submitRef={productSubmit}
              setProductIsValid={setProductIsValid}
              setProduct={setProduct}
            />
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