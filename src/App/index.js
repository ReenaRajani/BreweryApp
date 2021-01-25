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
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Header title="The Brewery Transport" />
    <Container />
  </div>
);

export default App;
