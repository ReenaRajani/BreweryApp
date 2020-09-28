/** @jsx jsx */

import { jsx } from '@emotion/core';

import Header from './components/Header';
import Container from './components/Container';

const App = () => (
  <div
    css={{
      margin: 'auto',
      width: '768px',
      height: '1024px',
    }}
  >
    <Header title="Welcome to Brewery App" />
    <Container />
  </div>
);

export default App;
