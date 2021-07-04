import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User($username: String!, $after: String, $before: String) {
    user(login: $username) {
      id
      avatarUrl(size: 200)
      bio
      company
      email
      location
      login
      name
      starredRepositories {
        totalCount
      }
      followers(first: 10) {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100, after: $after, before: $before) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          stargazerCount
          url
          id
          name
          description
          forkCount
          languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
              color
              id
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_NEXT_PAGE = gql`
  query User($username: String!, $nextCursor: String!) {
    user(login: $username) {
      id
      avatarUrl(size: 200)
      bio
      company
      email
      location
      login
      starredRepositories {
        totalCount
      }
      followers(first: 10) {
        totalCount
      }
      following {
        totalCount
      }
      name
      repositories(first: 10, after: $nextCursor) {
        totalCount
        nodes {
          stargazerCount
          url
          id
          name
          description
          forkCount
          languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
              color
              id
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_PREV_PAGE = gql`
  query User($username: String!) {
    user(login: $username) {
      id
      avatarUrl(size: 200)
      bio
      company
      email
      location
      login
      starredRepositories {
        totalCount
      }
      followers(first: 10) {
        totalCount
      }
      following {
        totalCount
      }
      name
      repositories(first: 10) {
        totalCount
        nodes {
          stargazerCount
          url
          id
          name
          description
          forkCount
          languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
              color
              id
            }
          }
        }
      }
    }
  }
`;
