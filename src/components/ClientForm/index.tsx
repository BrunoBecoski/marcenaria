import { useState } from 'react';
import * as Yup from 'yup';

import { api } from '../../services/api';

import { Label } from '../Form/Label';
import { Input } from '../Form/Input';
import { Button } from '../Form/Button';

import { Container } from './styles';

export function ClientForm() {  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');

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
    } catch (err) {
      alert(err.message);

      // await api.post('/clients', {
      //   firstName,
      //   lastName,
      //   telephone,
      //   ordersIds: []
      // });
  
      // setFirstName('');
      // setLastName('');
      // setTelephone('');
      
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