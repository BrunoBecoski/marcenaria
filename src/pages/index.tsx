import { useState } from 'react';
import { format } from 'date-fns';

import { Input } from "../components/Input";
import { Button } from '../components/Button';

export default function Home() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  function handleAddClient() {
    console.log('CADASTRAR SERVIÇO');
    console.log('Nome: ' + name);
    console.log('Preço: ' + price);
    console.log('Data: ' + date);

    alert(`
      Nome: ${name} \n
      Preço: ${
        new Intl.NumberFormat(
          'pt-BR', { style: 'currency', currency: 'BRL'}
        ).format(Number(price))
      } \n
      Data: ${date} \n
    `);

    setName('');
    setPrice('');
    setDate(format(new Date(), 'yyyy-MM-dd'));
  }

  return (
    <main>
      <h1>Home</h1>
      <h2>Formulário do Pedido</h2>

      <div>
        <Input 
          placeholder="Pedido"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input 
          placeholder="Preço"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
        <Input
          placeholder="Data"
          type="date"
          defaultValue={date}
          onChange={event => setDate(event.target.value)}
        />

        <Button 
          title="Cadastrar Pedido"
          onClick={handleAddClient}
        />
      </div>
    </main>
    );
}
