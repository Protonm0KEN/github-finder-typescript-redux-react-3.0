import React, { FunctionComponent } from 'react';
import "../../styles/header-styles/Header.scss"
interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
      <header className="Header">
          <h1 className="Header__title">GITHUB FINDER</h1>
      </header>
  );
};

export default Header;
