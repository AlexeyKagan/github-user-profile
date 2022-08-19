import { gql } from '@apollo/client/core';

export const GET_USER_INFO_BY_LOGIN = gql`
  query GetUserInfoByLogin($login: String!, $number_of_repos: Int!) {
    user(login: $login) {
      login
      name
      avatarUrl(size: 260)
      id
      websiteUrl
      location
      company
      bio
      status {
        id
        message
      }
      twitterUsername
      email
      starredRepositories(first: 0) {
        totalCount
      }
      following(first: 0) {
        totalCount
      }
      followers(first: 0) {
        totalCount
      }
      repositories(
        first: $number_of_repos
        ownerAffiliations: OWNER
        orderBy: { direction: DESC, field: UPDATED_AT }
      ) {
        nodes {
          databaseId
          id
          name
          description
          nameWithOwner
          url
          owner {
            login
          }
          createdAt
          updatedAt
          forkCount
          stargazerCount
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY_ISSUES = gql`
  query GetRepositoryIssuesByOwnerAndName($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      nameWithOwner
      issues(last: 20, states: OPEN) {
        edges {
          node {
            title
            url
            id
            createdAt
            number
            author {
              login
            }
          }
        }
      }
    }
  }
`;

export const FIND_ISSUE_BY_ID = gql`
  query FindIssueID($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        title
        url
        id
        createdAt
        number
        bodyHTML
        author {
          login
        }
      }
    }
  }
`;

export const CREATE_AN_ISSUE = gql`
  mutation CreateIssue($repositoryId: ID!, $title: String!, $body: String!) {
    createIssue(
      input: { repositoryId: $repositoryId, title: $title, body: $body }
    ) {
      issue {
        number
        body
      }
    }
  }
`;
