// @flow
/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { MdAdd } from 'react-icons/md';

import Modal from '../Modal';

const Container = (): React.Node => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleShow = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        fontSize: '40px',
        color: '#278911',
      }}
    >
      <button type="button" onClick={handleShow}>
        <MdAdd />
      </button>
      <Modal title="SelectBeer" open={openModal} onClose={handleClose} />
    </div>
  );
};

export default Container;
