import { useQuery } from '@apollo/client';
import { GET_USER_INFO_BY_LOGIN } from 'services/github-schema';
import { useMemo } from 'react';
import UserProfile from './UserProfile';
import PinnedRepository from './PinnedRepository';
import styled from 'styled-components';
import { pinnedItemsResolver } from './utils';

// const LOGIN = 'gaearon';
const LOGIN = 'AlexeyKagan';

const OverviewPage = () => {
  const { loading, error, data } = useQuery(GET_USER_INFO_BY_LOGIN, {
    variables: {
      login: LOGIN,
    },
  });

  const pinnedItems = useMemo(() => pinnedItemsResolver(data), [data]);

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <OverviewContainer>
      <UserProfile userData={data.user} />
      <PinnedRepository pinnedItems={pinnedItems} />
    </OverviewContainer>
  );
};

export default OverviewPage;

const OverviewContainer = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
