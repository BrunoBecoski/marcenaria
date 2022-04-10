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
  
  return (
    <main>
      <h1>Home</h1>
      <h2>Formulário de Encomenda</h2>

      <OrderForm />

      <Table ordersData={ordersData} />

    </main>
    );
}