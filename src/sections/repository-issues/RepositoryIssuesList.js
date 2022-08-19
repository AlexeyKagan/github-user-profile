import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useMutation, useQuery, NetworkStatus } from '@apollo/client';

import { useMemo, useState } from 'react';
import { CREATE_AN_ISSUE, GET_REPOSITORY_ISSUES } from 'services/github-schema';
import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { ROUTES } from 'consts/app';
import { dateToView } from 'utils/date';
import CreateIssueModal from './CreateIssueModal';
import { repositoryIssuesResolver } from './utils';

const RepositoryIssuesList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isModal, setIsModal] = useState(false);
  const { loading, error, data, networkStatus } = useQuery(
    GET_REPOSITORY_ISSUES,
    {
      variables: {
        owner: params.owner,
        name: params.name,
      },
    }
  );

  const [createIssue] = useMutation(CREATE_AN_ISSUE, {
    refetchQueries: ['GetRepositoryIssuesByOwnerAndName'],
  });

  const issues = useMemo(() => repositoryIssuesResolver(data), [data]);

  const onIssueClicked = (issue) => {
    const route = `${location.pathname}/${issue.number}`;

    navigate(route);
  };

  const onSubmit = (payload) => {
    createIssue({
      variables: {
        repositoryId: data.repository.id,
        title: payload.title,
        body: payload.body,
      },
    });

    setIsModal(false);
  };

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <RepositoryIssuesListContainer>
      <CreateIssueModal
        onSubmit={onSubmit}
        onClose={() => setIsModal(false)}
        isOpen={isModal}
      />
      <div>
        <h3>Issues</h3>
        <button onClick={() => navigate(ROUTES.HOME)}>Go to home page</button>
        <button onClick={() => setIsModal(true)}>Create an issue</button>
      </div>
      {networkStatus === NetworkStatus.refetch && 'Fetching new items...'}
      {issues.map((issue, index) => (
        <IssueContainer key={issue.id} onClick={() => onIssueClicked(issue)}>
          <IssueTitle>
            {index}-{issue.title}
          </IssueTitle>
          <div>
            <span>#{issue.number} </span>
            <span>
              opened on {dateToView(issue.createdAt)} by {issue.author.login}
            </span>
          </div>
        </IssueContainer>
      ))}
    </RepositoryIssuesListContainer>
  );
};

export default RepositoryIssuesList;

const IssueTitle = styled.div`
  color: ${COLORS.FG_DEFAULT};
  font-weight: 600;
  font-size: 16px;
`;

const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 60px;
  margin-top: 20px;
  &:hover {
    ${IssueTitle} {
      color: ${COLORS.ACCENT_FG};
    }
  }
`;

const RepositoryIssuesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
