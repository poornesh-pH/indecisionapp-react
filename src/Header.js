import React from 'react';

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h3 className="header__subtitle">{props.subtitle}</h3>
    </div>
  </div>
);
Header.defaultProps = {
  subtitle: 'Confused!?..Let me try for you!'
};
export default Header;
