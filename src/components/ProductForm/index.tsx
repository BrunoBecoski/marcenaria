import { Button } from '../Button';
import { RadioBox } from '../RadioBox';
import { TextField } from '../TextField';

import { Form } from './styles';

export function ProductForm() {
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
      />

      <TextField
        name="date"
        label="Data"
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