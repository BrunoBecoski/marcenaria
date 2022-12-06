import { useState } from 'react';

import { Layout } from '../../components/Layout';
import { ClientForm } from '../../components/ClientForm';
import { ProductForm, ProductData } from '../../components/ProductForm';

import {
  ProgressIndicator,
  Button,
} from '../../components/MaterialDesign'

import { RegisterContainer } from './styles';


export default function Register() {
  const [tabActive, setTabActive ] = useState('client');
  const [product, setProduct ] = useState<ProductData>({} as ProductData);
  const [productIsSubmit, setProductIsSubmit] = useState(false);

  const [progess, setProgreess] = useState(1)

  console.log(product)

  return (
    <Layout>
      <RegisterContainer>
        {/* <Tabs
          tabs={[{id: 'client', label: 'Cliente '}, { id: 'product', label: 'Produto'}]}
          tabActive={tabActive}
          setTabActive={setTabActive}
        /> */}

        <ProgressIndicator
          size={3}
          active={progess}
        />

        {
          productIsSubmit
            ?
              JSON.stringify(product, null, ' ')
            :
              <ProductForm
                setProductIsSubmit={setProductIsSubmit}
                setProduct={setProduct}
              />
        }

        <Button onClick={() => setProgreess(prevState => prevState + 1)}>
          Próximo
        </Button>
        {/* { tabActive === 'client' && <ClientForm /> } */}

        {/* { tabActive === 'product' && <ProductForm />} */}

      </RegisterContainer>
    </Layout>
  )
}