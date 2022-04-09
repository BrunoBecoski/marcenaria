import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { OrderForm } from '../components/OrderForm'; 

interface OrderResponseProps {
  id: string;
  name: string;
  description: string;
  price: string;
  date: string;
  client: string;
}

export default function Home() {
  const [ordersData, setOrdersData] = useState<OrderResponseProps[]>([]);

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

      <table>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Data</th>
            <th>Cliente</th>
          </tr>
        {
          ordersData &&
          ordersData.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.description}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>{order.client}</td>
            </tr>
          ))
        }
      </table>

    </main>
    );
}