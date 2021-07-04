import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.GITHUB_ACCESS_TOKEN
        ? `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        : null,
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
