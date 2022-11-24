import { useState } from 'react';

import { Tabs } from '../../components/Tabs';
import { Layout } from '../../components/Layout';
import { ClientForm } from '../../components/ClientForm';

import { RegisterContainer } from './styles';

export default function Register() {
  const [tabActive, setTabActive ] = useState('client');

  return (
    <Layout>
      <RegisterContainer>
        <Tabs
          tabs={[{label: 'Cliente'}, {label: 'Produto'}]}
          tabActive={tabActive}
          setTabActive={setTabActive}
        />

        <ClientForm />    
      </RegisterContainer>
    </Layout>
  )
}