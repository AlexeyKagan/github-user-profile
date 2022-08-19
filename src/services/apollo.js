import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_ENDPOINT, ACCESS_TOKEN } from 'consts/app';

const apollo = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default apollo;
