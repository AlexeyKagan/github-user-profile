import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'consts/app';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path={ROUTES.HOME} element={<Overview />} />
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
