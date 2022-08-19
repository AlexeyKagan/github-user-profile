import { useQuery } from '@apollo/client';
import { GET_USER_INFO_BY_LOGIN } from 'services/github-schema';
import UserProfile from './UserProfile';
import RepositoryList from './RepositoryList';
import styled from 'styled-components';
import { getRepositories } from './utils';

const LOGIN = 'gaearon';
// const LOGIN = 'AlexeyKagan';
const NUMBER_OF_REPOS = 10;

const OverviewPage = () => {
  const { loading, error, data } = useQuery(GET_USER_INFO_BY_LOGIN, {
    variables: {
      login: LOGIN,
      number_of_repos: NUMBER_OF_REPOS,
    },
  });

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error}`;
  }

  const repositories = getRepositories(data);

  return (
    <OverviewContainer>
      <UserProfile userData={data.user} />
      <RepositoryList repositories={repositories} />
    </OverviewContainer>
  );
};

export default OverviewPage;

const OverviewContainer = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
