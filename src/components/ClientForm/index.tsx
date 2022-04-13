import { useState } from 'react';

import { api } from '../../services/api';

import { Label } from '../Label';
import { Input } from '../Input';
import { Button } from '../Button';

import { Container } from './styles';

export function ClientForm() {  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');

  async function handleAddClient() {
    await api.post('/clients', {
      firstName,
      lastName,
      telephone
    });

    setFirstName('');
    setLastName('');
    setTelephone('');
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
      </Label>

      <Label>
        Sobrenome
        <Input 
          placeholder="Sobrenome"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </Label>

      <Label>
        Telefone
        <Input 
          type="tel"
          placeholder="Telefone"
          value={telephone}
          onChange={event => setTelephone(event.target.value)}
        />
      </Label>
      
      <Button 
        title="Cadastrar Cliente" 
        onClick={handleAddClient}     
      />
    </Container>
  )
}