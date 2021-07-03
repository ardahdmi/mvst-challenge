import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User($username: String!) {
    user(login: $username) {
      id
      avatarUrl(size: 200)
      bio
      company
      email
      isGitHubStar
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
      repositories {
        totalCount
      }
    }
  }
`;
