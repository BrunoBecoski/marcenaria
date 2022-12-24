import { useState } from 'react';

import { ProductType } from '../../graphql/generated';

import { Layout } from '../../components/Layout';
import { Product } from './components/Product';
import { Client } from './components/Client';

import {
  ProgressIndicator,
  Button,
} from '../../components/MaterialDesign'

import { CreateContainer } from './styles';

interface ProductData {
  name: string;
  description: string;
  price: string;
  date: string;
  type: ProductType;
}

interface ClientData {
  id: string;
  name: string;
}

export default function Create() {
  const [step, setStep] = useState(2);

  const [product, setProduct ] = useState<ProductData>({} as ProductData);
  const [client, setClient] = useState<ClientData | undefined>();

  function nextStep() {
    if(step === 2 && client) {
      setStep(3);
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
            <Product
              product={product}
              setStep={setStep}
              setProduct={setProduct}
            />
          }

          {
            step === 2 &&
              <Client
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