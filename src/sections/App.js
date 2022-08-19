import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'consts/app';

import Overview from './overview/Overview';
import RepositoryIssuesList from './repository-issues/RepositoryIssuesList';
import Issue from './issue/Issue';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path={ROUTES.HOME} element={<Overview />} />
        <Route path={ROUTES.ISSUES_LIST} element={<RepositoryIssuesList />} />
        <Route path={ROUTES.ISSUE} element={<Issue />} />
      </Routes>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 1100px;
  margin: 100px auto;
`;
