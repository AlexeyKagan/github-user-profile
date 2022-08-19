import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { useCallback } from 'react';
import { ROUTES } from 'consts/app';
import { useNavigate } from 'react-router-dom';
import Repository from './Repository';

const RepositoryList = (props) => {
  const { repositories } = props;

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
    <RepositoriesContainer>
      <HeaderLabel>Repository list</HeaderLabel>
      <RepositoryListContainer>
        {repositories.map((repository) => (
          <Repository
            key={repository.id}
            repository={repository}
            onClick={onRepositoryClicked}
          />
        ))}
      </RepositoryListContainer>
    </RepositoriesContainer>
  );
};

export default RepositoryList;

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

const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${COLORS.FG_DEFAULT};
  margin-left: 20px;
  height: 100%;
  margin-bottom: 20px;
`;
