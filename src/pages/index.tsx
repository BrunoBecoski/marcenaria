import styled from 'styled-components';

import { useGetClientsQuery } from '../graphql/generated';
import { Layout } from '../components/Layout';
import { List } from '../components/List';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: var(--space_40);

  background: ${({ theme }) => theme.colors.surface1};
`;

export default function Home() {
  const { data } = useGetClientsQuery();

  const dataFormatted = data?.clients.map(client => (
    {
      id: client.id,
      title: client.name,
      description: client.phoneNumber,
    }
  ))

  return (
    <Layout>
      <HomeContainer>
        <h1>Home</h1>

        <List 
          contentList={dataFormatted}
        />
      </HomeContainer>
    </Layout>
  )
}