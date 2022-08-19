import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { useCallback } from 'react';
import { ROUTES } from 'consts/app';
import { useNavigate } from 'react-router-dom';
import Repository from './Repository';

const PinnedRepository = (props) => {
  const { pinnedItems } = props;

  const navigate = useNavigate();

  const onRepositoryClicked = useCallback(
    (repository) => {
      const route = ROUTES.ISSUES_LIST.replace(
        ':owner/:name',
        repository.nameWithOwner
      );
      navigate(route);
    },
    [navigate]
  );

  return (
    <PinnedRepositoryContainer>
      <HeaderLabel>Pinned</HeaderLabel>
      <RepositoryListContainer>
        {pinnedItems.map((repository) => (
          <Repository
            key={repository.id}
            repository={repository}
            onClick={onRepositoryClicked}
          />
        ))}
      </RepositoryListContainer>
    </PinnedRepositoryContainer>
  );
};

export default PinnedRepository;

const RepositoryListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const HeaderLabel = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const PinnedRepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${COLORS.FG_DEFAULT};
  margin-left: 20px;
`;
