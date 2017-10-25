import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="img/logo-header.png" alt="logo" />
      </div>
      <div className="header__slogan">Live football</div>
      <div className="header__date">
        <i className="fa fa-clock-o" aria-hidden="true" />
        <div>
          <span>23.8.2017</span>
          <br />
          <span>GMT +1</span>
        </div>
      </div>
      <div className="header__search">
        <i className="fa fa-search" aria-hidden="true" />
      </div>
      <div className="header__user">
        <i className="fa fa-user-circle" aria-hidden="true" />
        My profile
      </div>
    </div>
  );
};

export default Header;
