import { useForm, Controller } from 'react-hook-form'

import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'

import { RegisterContainer, Form } from './styles'
import { Layout } from '../../components/Layout'

export default function Register() {

  const { handleSubmit, control} = useForm()

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <Layout>
      <RegisterContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ 
              field: { name, onChange, value},
            }) =>(
              <TextField 
                label="Nome"
                name={name}
                value={value}
                onChange={onChange}
              />
            )}
          />
        
          <Controller
            control={control}
            name="telephone"
            render={({ field: { name ,onChange, value } }) =>(
              <TextField 
                label="Telefone"
                name={name}
                value={value}
                onChange={onChange}
              />
            )}
          /> 
          
          <Button type="submit">
            Cadastrar
          </Button>
        </Form>
      </RegisterContainer>
    </Layout>
  )
}