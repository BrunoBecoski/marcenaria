import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'

import { TextField } from '../components/TextField'
import { Button } from '../components/Button'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export default function Home() {
  const { handleSubmit, control} = useForm()

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </HomeContainer>
  )
}