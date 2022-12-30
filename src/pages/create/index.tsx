import { useRef, useState } from 'react';

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
  const [step, setStep] = useState(1);

  const [product, setProduct ] = useState<ProductData>({} as ProductData);
  const [client, setClient] = useState<ClientData>({} as ClientData);

  const productSubmitButtonRef = useRef<HTMLButtonElement>({} as HTMLButtonElement);
  const clientSubmitButtonRef = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  function nextStep() {
    if(step === 1) {
      productSubmitButtonRef.current.click();
    }

    if(step === 2 && client) {
      clientSubmitButtonRef.current.click();
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
          
          { step === 1 && <h2>Produto</h2> }
          
          { step === 2 && <h2>Client</h2> }

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
              setProduct={setProduct}
              setStep={setStep}
              productSubmitButtonRef={productSubmitButtonRef}
            />
          }

          {
            step === 2 &&
              <Client
                client={client}
                setClient={setClient}
                setStep={setStep}
                clientSubmitButtonRef={clientSubmitButtonRef}
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