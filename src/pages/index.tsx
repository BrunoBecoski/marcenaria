import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { api } from '../services/api';

import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';

interface OrderResponseProps {
  id: string;
  name: string;
  description: string;
  price: string;
  date: string;
  client: string;
}

export default function Home() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [client, setClient] = useState('');

  const [ordersData, setOrdersData] = useState<OrderResponseProps[]>([]);

  async function handleAddOrder() {
    const response = await api.post('/orders', {
      name,
      description,
      price: new Intl.NumberFormat(
        'pt-BR', { style: 'currency', currency: 'BRL'}
      ).format(Number(price)),
      date,
      client
    });

    setOrdersData(oldState => [...oldState, response.data]);

    setName('');
    setDescription('');
    setPrice('');
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setClient('');
  }

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

      <div>
        <Input 
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextArea
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <Input 
          placeholder="Preço"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
        <Input
          type="date"
          defaultValue={date}
          onChange={event => setDate(event.target.value)}
        />
        <Input 
          placeholder="Cliente"
          value={client}
          onChange={event => setClient(event.target.value)}
        />

        <Button 
          title="Cadastrar Pedido"
          onClick={handleAddOrder}
        />
      </div>

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