import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { OrderData } from '../types/OrderData';
import { ClientData } from '../types/ClientData';

import { OrderForm } from '../components/OrderForm'; 
import { ClientForm } from '../components/ClientForm';
import { Table } from '../components/Table';
import { Select, SelectOptionsProps } from '../components/Form/Select';

export default function Home() {
  const [ordersData, setOrdersData] = useState<OrderData[]>([]);
  const [clientNameList, setClientNameList] = useState<SelectOptionsProps[]>([]);

  useEffect(() => {
    async function requestClients() {
      const { data } = await api.get<ClientData[]>('/clients');

      setClientNameList(data.map(client => (
        {
          value: client.id,  
          label: `${client.firstName} ${client.lastName}`
        }
      )));
    }

    requestClients();
  }, []);

  async function requestOrders(id: string) {
    const response = await api.get(`/orders?clientId=${id}`);
    setOrdersData(response.data);
  }
  
  // Fix Error: Hydration failed because the initial UI 
  // does not match what was rendered on the server.
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <main
      style={{
        margin: 'auto',
        maxWidth: 500,
      }}
    >
      <h1>Home</h1>
      <h2>Formulário de Encomenda</h2>

      <OrderForm />

      <ClientForm />

      <Select 
        name="clientNameList"
        options={clientNameList}
        onChange={event => requestOrders(event.target.value)}
        placeholder="Selecione algum cliente"
      />

      <Table ordersData={ordersData} />

    </main>
    );
}