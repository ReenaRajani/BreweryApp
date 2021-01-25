// @flow
/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';

type Props = {
  title: string,
};

const Header = ({ title }: Props): React.Node => (
  <div
    css={{
      fontSize: '15px',
      color: 'black',
    }}
  >
    <h1>{title}</h1>
  </div>
);

export default Header;
