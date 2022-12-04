import styled from 'styled-components';

import { useGetClientsQuery, useGetProductsQuery } from '../graphql/generated';
import { Layout } from '../components/Layout';
import { List } from '../components/List';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: var(--space_40);

  background: ${({ theme }) => theme.colors.surfaceAt_1};

  div {
    display: flex;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

`;

export default function Home() {
  const { data: clientsData } = useGetClientsQuery();
  const { data: productsData } = useGetProductsQuery();

  let clientsFormatted: any[] = [];
  let productsFormatted: any[] = [];
  
  if(clientsData) {
    clientsFormatted = clientsData?.clients.map(client => (
      {
        id: client.id,
        title: client.name,
        description: client.phoneNumber,
      }
    ))
  }

  if(productsData) {
    productsFormatted = productsData?.products.map(produt => (
      {
        id: produt.id,
        title: produt.name,
        description: produt.description,
      }
    ))
  }

  return (
    <Layout>
      <HomeContainer>
        <h1>Home</h1>

        <div>
          <div>
            <h2>Clientes</h2>
            <List 
              contentList={clientsFormatted}
            />
          </div>

          <div>
            <h2>Produtos</h2>

            <List
              contentList={productsFormatted}
            />
          </div>
        </div>
      </HomeContainer>
    </Layout>
  )
}