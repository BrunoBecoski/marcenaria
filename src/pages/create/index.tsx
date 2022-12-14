import { useRef, useState } from 'react';


import { ProductType } from '../../graphql/generated';

import { Layout } from '../../components/Layout';
import { NewClient, ClientData } from './components/NewClient';

import {
  ProgressIndicator,
  Button,
} from '../../components/MaterialDesign'

import { CreateContainer } from './styles';
import { NewProduct } from './components/NewProduct';

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
  const [client, setClient] = useState<ClientData>({} as ClientData);

  const productSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  const clientSubmit = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  function nextStep() {   
    if(step === 1) {
      productSubmit.current.click();
    }

    if(step === 2) {
      clientSubmit.current.click();
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
              setStep={setStep}
              submitRef={productSubmit}
              setProduct={setProduct}
            />
          }

          {
            step === 2 &&
              <NewClient
                client={client}
                setStep={setStep}
                submitRef={clientSubmit}
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