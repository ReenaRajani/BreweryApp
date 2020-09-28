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
      color: 'red',
      textAlign: 'center',
    }}
  >
    <h1>{title}</h1>
  </div>
);

export default Header;
