import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { api } from '../../services/api';

import { Label } from '../Form/Label';
import { Input } from '../Form/Input';
import { Button } from '../Form/Button';

import { Container, SpanError } from './styles';

interface InputError {
  path: string;
  message: string;
}

export function ClientForm() {  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [inputsErrors, setInputsErrors] = useState<InputError[]>([]);

  const clientSchema = Yup.object().shape({
    telephone: Yup.string().required('Campo telefone é obrigatório'),
    lastName: Yup.string().required('Campo sobrenome é obrigatório'),
    firstName: Yup.string().required('Campo nome é obrigatório')
  });

  async function handleAddClient() {
    try {
      await clientSchema
        .validate({
          firstName,
          lastName,
          telephone
        }, 
        {
          abortEarly: false
        });
   
      await api.post('/clients', {
        firstName,
        lastName,
        telephone,
        ordersIds: []
      });
  
      setFirstName('');
      setLastName('');
      setTelephone('');
      setInputsErrors([]);
    } catch(err) {
      const inputErrors = err.inner.map(input => ({
        path: input.path,
        message: input.message
      }));
      
      setInputsErrors(inputErrors);
    }   
  }

  return (
    <Container>
      <Label>
        Nome
        <Input
          placeholder="Nome"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'firstName')?.message}
        </SpanError>
      </Label>

      <Label>
        Sobrenome
        <Input 
          placeholder="Sobrenome"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'lastName')?.message}
        </SpanError>
      </Label>

      <Label>
        Telefone
        <Input 
          type="tel"
          placeholder="Telefone"
          value={telephone}
          onChange={event => setTelephone(event.target.value)}
        />
        <SpanError>
          {inputsErrors.find(input => input.path === 'telephone')?.message}
        </SpanError>
      </Label>
      
      <Button
        title="Cadastrar Cliente" 
        onClick={handleAddClient}     
      />
    </Container>
  )
}