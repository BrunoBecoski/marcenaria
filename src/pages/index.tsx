import styled from 'styled-components'

import { Button } from '../components/Button'
import { TextField } from '../components/TextField'

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
  return (
    <HomeContainer>
      <TextField name="name" label="Name" />
      <TextField name="email" label="Email" />
      <TextField name="number" />
      <Button>
        Send
      </Button>
    </HomeContainer>
  )
}