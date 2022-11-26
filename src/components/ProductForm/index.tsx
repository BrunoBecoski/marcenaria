import {  useState } from 'react';

import { Button } from '../Button';
import { RadioBox } from '../RadioBox';
import { TextField } from '../TextField';

import { Form } from './styles';

export function ProductForm() {
  const [price, setPrice] = useState('');

  function handlePrice(value: string) {
    const valueFormatted = Number(value.replace('R$', '').replace('.', '').replace(',', '.'));

    if(isNaN(valueFormatted)){
      return;
    }

    const priceFormatted = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valueFormatted)

    setPrice(priceFormatted)
  }

  return (
    <Form>
      <TextField
        name="name"
        label="Nome"
      />

      <TextField
        name="description"
        label="Descrição"
      />

      <TextField
        name="price"
        label="Preço"
        value={price}
        inputMode="decimal"
        onChange={event => handlePrice(event.target.value)}
      />

      <TextField
        name="date"
        label="Data"
        type="date"
      />

      <RadioBox
        name="type"
        items={[
          { label: 'Novo', value: 'new' },
          { label: 'Reforma', value: 'reform' },
        ]}
      />

      <Button>
        Cadastar
      </Button>      
    </Form>
  )
}