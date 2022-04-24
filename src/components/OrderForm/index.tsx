import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import * as Yup from 'yup';

import { api } from '../../services/api';
import { ClientData } from '../../types/ClientData';

import { InputRadioBox } from '../Form/InputRadioBox';
import { Label } from '../Form/Label';
import { Input } from '../Form/Input';
import { TextArea } from '../Form/TextArea';
import { Select, SelectOptionsProps } from '../Form/Select';
import { Button } from '../Form/Button';

import { Container, SpanError } from './styles';

interface InputError {
  path: string;
  message: string;
}

export function OrderForm() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [clientId, setClientId] = useState('');
  const [clientNamesList, setClientNamesList] = useState<SelectOptionsProps[]>([]);
  const [inputsErrors, setInputsErrors] = useState<InputError[]>([]);
  const [isActiveAutoValidateForm, setIsActiveAutoValidateForm] = useState(false);

  const orderSchema = Yup.object().shape({
    type: Yup.string().required('Selecione um tipo'),
    name: Yup.string().required('Campo nome é obrigatório'),
    description: Yup.string().required('Campo descrição é obrigatório'),
    price: Yup.string().required('Campo preço é obrigatório'),
    date: Yup.string().required('Campo data é obrigatório'),
    clientId: Yup.string().required('Selecione um cliente')
  });

  async function handleAddOrder() {
    setIsActiveAutoValidateForm(true);
    const isValid = await validateForm();

    if (isValid) {
      try {
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
    
        const clienteResponse = await api.get<ClientData>(`/clients/${clientId}`);
    
        await api.patch(`/clients/${clientId}`, {
          ordersIds: [
            ...clienteResponse.data.ordersIds,
            data.id
          ]
        });

        setName('');
        setDescription('');
        setPrice('');
        setIsActiveAutoValidateForm(false);
      } catch {
        alert('Não foi possível cadastrar o pedido.');
      }
    }
  }

  async function validateForm() {
    try {
      await orderSchema.validate({
        type,
        name,
        description,
        price,
        date,
        clientId
      },
      {
        abortEarly: false
      });

      setInputsErrors([]);

      return true;
    } catch(err) {
      if (err instanceof Yup.ValidationError) {        
        const inputErrors = err.inner.map(({ path, message }) => ({
          path,
          message
        }));
        
        setInputsErrors(inputErrors as InputError[]);
        
        return false;
      }
    }
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

  useEffect(() => {
    if (isActiveAutoValidateForm) {
      const timeOutId = setTimeout(() => validateForm(), 500);
      return () => clearTimeout(timeOutId);
    }
  }, [type, name, description, price, date, clientId]);

  return (
    <Container>
      <Label>
        Tipo
        <InputRadioBox
          name="type"
          options={["Novo", "Reformado"]}
          setState={setType}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'type')?.message}
        </SpanError>
      </Label>

      <Label>
        Nome
        <Input 
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'name')?.message}
        </SpanError>
      </Label>
      <Label>
        Descrição
        <TextArea
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'description')?.message}
        </SpanError>
      </Label>
      <Label>
        Preço
        <Input 
          placeholder="Preço"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'price')?.message}
        </SpanError>
      </Label>
      <Label>
        Data
        <Input
          type="date"
          defaultValue={date}
          onChange={event => setDate(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'date')?.message}
        </SpanError>
      </Label>
      <Label>
        Cliente
        <Select 
          name="clientNamesList"
          options={clientNamesList}
          onChange={event => setClientId(event.target.value)}
          placeholder="Selecione um cliente"
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'clientId')?.message}
        </SpanError>
      </Label>
      
      <Button 
        title="Cadastrar Pedido"
        onClick={handleAddOrder}
      />
    </Container>
  );
} 