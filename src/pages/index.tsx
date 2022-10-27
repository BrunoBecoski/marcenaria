import styled from 'styled-components'

import { Layout } from '../components/Layout';

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
    <Layout>
      <HomeContainer>
        <h1>Home</h1>
      </HomeContainer>
    </Layout>
  )
}