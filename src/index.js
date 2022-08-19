import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './sections/App';
import apollo from './services/apollo';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyle } from 'utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
