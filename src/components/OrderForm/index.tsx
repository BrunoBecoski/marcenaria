import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { api } from '../../services/api';

import { InputRadioBox } from '../InputRadioBox';
import { Label } from '../Label';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Button } from '../Button';

import { Container } from './styles';

export function OrderForm() {
  const [type, setType] = useState('')
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [client, setClient] = useState('');

  async function handleAddOrder() {
    await api.post('/orders', {
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


  useEffect(() => {
    console.log(type)
    console.log('type')
  }, [type]);

  return (
    <Container>
      <Label>
        Tipo
        <InputRadioBox
          name="types"
          options={["Novo", "Reforma"]}
          setState={setType}
        />
      </Label>

      <Label>
        Nome
        <Input 
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </Label>
      <Label>
        Descrição
        <TextArea
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </Label>
      <Label>
        Preço
        <Input 
          placeholder="Preço"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
      </Label>
      <Label>
        Data
        <Input
          type="date"
          defaultValue={date}
          onChange={event => setDate(event.target.value)}
        />
      </Label>
      <Label>
        Cliente
        <Input 
          placeholder="Cliente"
          value={client}
          onChange={event => setClient(event.target.value)}
        />
      </Label>

      <Button 
        title="Cadastrar Pedido"
        onClick={handleAddOrder}
      />
    </Container>
  );
}