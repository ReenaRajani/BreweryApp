// @flow
/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';

import Header from '../Header';
import Beer from '../Beer';

type Props = {
  title: string,
  open: boolean,
  onClose: Function,
};

const Modal = ({ title, open, onClose }: Props): React.Node => {
  const [beers, setBeers] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/beers').then(async (res) => {
      if (res.ok) {
        const jsonData = await res.json();
        setBeers(jsonData.beers);
      }
    });
  }, [open]);

  if (!open) {
    return null;
  }
  return (
    <div
      className="overlay"
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px 0',
        boxSizing: 'border-box',
        zIndex: 999,
      }}
    >
      <div
        css={{
          margin: '15% auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          borderRadius: '4px',
          backgroundColor: 'white',
          color: 'black',
          width: 'auto',
          maxHeight: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Header title={title} />
        {beers.map((beer) => (
          <Beer key={beer.id} title={beer.name} />
        ))}
        <button
          type="button"
          css={{
            margin: '24px auto',
            padding: '12px',
            backgroundColor: '#a4d8e7',
            color: 'black',
            borderRadius: '99px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          Clear Container
        </button>
      </div>
    </div>
  );
};

export default Modal;
