// @flow
/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';

type Props = {
  title: string,
};

const Beer = ({ title }: Props): React.Node => {
  const handleSubmit = () => {
    console.log(`${title}selected`);
  };
  return (
    <button
      type="button"
      onClick={handleSubmit}
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        margin: '4px',
        color: 'black',
        fontSize: '20px',
      }}
    >
      {title}
    </button>
  );
};

export default Beer;
