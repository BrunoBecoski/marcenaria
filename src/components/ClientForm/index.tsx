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

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [telephoneErrorMessage, setTelephoneErrorMessage] = useState('');


  const clientSchema = Yup.object().shape({
    telephone: Yup.string().required('Campo telefone é obrigatório'),
    lastName: Yup.string().required('Campo sobrenome é obrigatório'),
    firstName: Yup.string().required('Campo nome é obrigatório')
  });

  async function handleAddClient() {
    setFirstNameErrorMessage('');
    setLastNameErrorMessage('');
    setTelephoneErrorMessage('');
    
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
    } catch(err) {
      // console.log(JSON.stringify({err}, null, '\t'));

      err.inner.forEach(element => {
        if(element.path === 'firstName') {
          setFirstNameErrorMessage(element.message);
        }

        if(element.path === 'lastName') {
          setLastNameErrorMessage(element.message);
        }
        
        if(element.path === 'telephone') {
          setTelephoneErrorMessage(element.message);
        } 
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
          <SpanError>
            {firstNameErrorMessage}
          </SpanError>
      </Label>

      <Label>
        Sobrenome
        <Input 
          placeholder="Sobrenome"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        {
          <SpanError>
            {lastNameErrorMessage}
          </SpanError>
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
          <SpanError>
            {telephoneErrorMessage}
          </SpanError>
        }
      </Label>
      
      <Button 
        title="Cadastrar Cliente" 
        onClick={handleAddClient}     
      />
    </Container>
  )
}