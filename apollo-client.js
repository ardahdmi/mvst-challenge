import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = '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';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

// create client for GraphQL queries
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
