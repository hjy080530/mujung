import MainPage from '../src/pages/MainPage';

/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import VotePage from './pages/VotePage';
import Header from './components/Header';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <VotePage />
      </MainContent>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default App;
