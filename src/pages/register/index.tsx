import { useState } from 'react';

import { Tabs } from '../../components/Tabs';
import { Layout } from '../../components/Layout';
import { ClientForm } from '../../components/ClientForm';
import { ProductForm } from '../../components/ProductForm';

import { RegisterContainer } from './styles';

export default function Register() {
  const [tabActive, setTabActive ] = useState('client');
  return (
    <Layout>
      <RegisterContainer>
        <Tabs
          tabs={[{id: 'client', label: 'Cliente '}, { id: 'product', label: 'Produto'}]}
          tabActive={tabActive}
          setTabActive={setTabActive}
        />

        { tabActive === 'client' && <ClientForm /> }

        { tabActive === 'product' && <ProductForm />}

      </RegisterContainer>
    </Layout>
  )
}