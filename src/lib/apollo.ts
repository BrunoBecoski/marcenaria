import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_API_CONTENT,
  headers: {
    'Authorizarion': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache(),
});