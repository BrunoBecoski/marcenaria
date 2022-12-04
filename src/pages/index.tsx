import styled from 'styled-components';

import { useGetClientsProductsQuery } from '../graphql/generated';

import { Layout } from '../components/Layout';
import { List } from '../components/List';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: var(--space_40);
  background: ${({ theme }) => theme.colors.surfaceAt_1};

  h2 {
    margin-bottom: 2rem;
  }

  div {
    margin: 1rem;
  }
`;

export default function Home() {
  const { data } = useGetClientsProductsQuery();

  let dataFormatted: any[] = [];
  
  if(data) {
    dataFormatted = data.clients.map(client => (
      {
        id: client.id,
        name: client.name,
        products: client.products.map(product => (
          {
            id: product.id,
            title: product.name,
            description: product.description,          
          }
        ))
      }
    ))
  }

  return (
    <Layout>
      <HomeContainer>
          {
            dataFormatted.map(client => (
              <div key={client.id}>
                <h2>{client.name}</h2>
                {
                  client.products &&
                  <List contentList={client.products} />
                }
              </div>
            ))
          }
      </HomeContainer>
    </Layout>
  )
}