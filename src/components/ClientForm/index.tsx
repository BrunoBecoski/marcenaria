import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { supabase } from '../../services/supabaseClient';

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
  const [isActiveAutoValidateForm, setIsActiveAutoValidateForm] = useState(false);

  const clientSchema = Yup.object().shape({
    telephone: Yup.string().required('Campo telefone é obrigatório'),
    lastName: Yup.string().required('Campo sobrenome é obrigatório'),
    firstName: Yup.string().required('Campo nome é obrigatório')
  });

  async function handleAddClient() {
    setIsActiveAutoValidateForm(true);
    const isValid = await validateForm();

    if (isValid) {
      try {
        const { error } = await supabase.from('clients').insert({
          first_name: firstName,
          last_name: lastName,
          telephone,
          orders_ids: []
        });
        
        if(error) {
          throw new Error();
        }

        setFirstName('');
        setLastName('');
        setTelephone('');
        setIsActiveAutoValidateForm(false);
      } catch {
        alert('Não foi possível cadastrar o cliente.');
      }
    }
  }

  async function validateForm() {
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
    if (isActiveAutoValidateForm) {
      const timeOutId = setTimeout(() => validateForm(), 500);
      return () => clearTimeout(timeOutId);
    }
  }, [firstName, lastName, telephone]);

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