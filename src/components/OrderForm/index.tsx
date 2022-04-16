import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { api } from '../../services/api';
import { ClientData } from '../../types/ClientData';

import { InputRadioBox } from '../Form/InputRadioBox';
import { Label } from '../Form/Label';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';
import { Select, SelectOptionsProps } from '../Form/Select';
import { Button } from '../Form/Button';

import { Container } from './styles';

export function OrderForm() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [clientId, setClientId] = useState('');
  const [clientNamesList, setClientNamesList] = useState<SelectOptionsProps[]>([]);

  async function handleAddOrder() {
    const { data } = await api.post('/orders', {
      type,
      name,
      description,
      price: new Intl.NumberFormat(
        'pt-BR', { style: 'currency', currency: 'BRL'}
      ).format(Number(price)),
      date,
      clientId
    });

    await api.patch(`/clients/${clientId}`, {
      ordersIds: [data.id]
    });

    setType('');
    setName('');
    setDescription('');
    setPrice('');
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setClientId('');
  }

  useEffect(() => {
    async function requestClient() {
      const { data } = await api.get<ClientData[]>('/clients');
      const clientsNames = data.map(client => (
        {
          value: client.id,  
          label: `${client.firstName} ${client.lastName}`
        }
      ));

      setClientNamesList(clientsNames);
    }

    requestClient();
  }, []);

  return (
    <Container>
      <Label>
        Tipo
        <InputRadioBox
          name="types"
          options={["Novo", "Reformado"]}
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
        <Select 
          name="clientNamesList"
          options={clientNamesList}
          onChange={event => setClientId(event.target.value)}
        />
      </Label>
      
      <Button 
        title="Cadastrar Pedido"
        onClick={handleAddOrder}
      />
    </Container>
  );
} 