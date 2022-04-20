import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { api } from '../../services/api';

import { Label } from '../Form/Label';
import { Input } from '../Form/Input';
import { Button } from '../Form/Button';

import { Container, SpanError } from './styles';

export function ClientForm() {  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');

  const [inputError, setInputError] = useState({});

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
      setInputError({});
    } catch(err) {
      console.log(JSON.stringify({err}, null, '\t'));

      setInputError({
        input: err.path,
        message: err.errors[0]
      });
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
       {
         inputError.input === 'firstName' &&
         <SpanError>{inputError.message}</SpanError>
       }
      </Label>

      <Label>
        Sobrenome
        <Input 
          placeholder="Sobrenome"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        {
          inputError.input === 'lastName' &&
          <SpanError>{inputError.message}</SpanError>
        }
      </Label>

      <Label>
        Telefone
        <Input 
          type="tel"
          placeholder="Telefone"
          value={telephone}
          onChange={event => setTelephone(event.target.value)}
        />
        {
          inputError.input === 'telephone' &&
          <SpanError>{inputError.message}</SpanError>
        }
      </Label>
      
      <Button 
        title="Cadastrar Cliente" 
        onClick={handleAddClient}     
      />
    </Container>
  )
}