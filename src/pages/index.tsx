import { useState } from 'react';
import { format } from 'date-fns';

import { api } from '../services/api';

import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';

export default function Home() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [client, setClient] = useState('');

  async function handleAddOrder() {
    api.post('/orders', {
      name,
      description,
      price: new Intl.NumberFormat(
        'pt-BR', { style: 'currency', currency: 'BRL'}
      ).format(Number(price)),
      date,
      client
    });

    setName('');
    setDescription('');
    setPrice('');
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setClient('');
  }


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

    </main>
    );
}
