// @flow
import * as React from 'react';

type Props = {
  title: String,
};

const Header = ({ title }: Props): React.Node => (
  <div className="main-header">
    <h1>{title}</h1>
  </div>
);

export default Header;
