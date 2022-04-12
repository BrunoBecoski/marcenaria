import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { OrderData } from '../types/OrderData';

import { OrderForm } from '../components/OrderForm'; 
import { Table } from '../components/Table';

export default function Home() {
  const [ordersData, setOrdersData] = useState<OrderData[]>([]);

  useEffect(() => {
    async function request() {
      const response = await api.get('/orders');
      setOrdersData(response.data);
    }

    request();
  }, []);
  
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

      <Table ordersData={ordersData} />

    </main>
    );
}