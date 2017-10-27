import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-header.png";
import logoTime from "../../images/icons/time.png";
import logoSearch from "../../images/icons/search.png";
import avatar from "../../images/icons/avatar.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar-header">
              <Link to={"/"} className="navbar-brand">
                <img src={logo} alt="logo" />{" "}
                <span className="hidden-xs">Live football</span>
              </Link>
            </div>
            <div className="navbar-subheader">
              <button
                type="button"
                className="navbar-toggle collapsed pull-left"
                data-toggle="collapse"
                data-target="#menu"
                aria-expanded="false"
                id="btn-toggle"
              >
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />
              </button>
              <div
                className="timezone visible-xs visible-sm"
                style={{ float: "left", marginLeft: "25%", marginTop: 10 }}
              >
                <a>
                  <img src={logoTime} alt="logoTime" /> <span>23.8.2017</span>
                  <br />
                  <span>GMT +1</span>
                </a>
              </div>
              <ul className="nav navbar-nav navbar-right pull-right">
                <li className="timezone visible-md visible-lg">
                  <a>
                    <img src={logoTime} alt="logoTime" /> <span>23.8.2017</span>
                    <br />
                    <span>GMT +1</span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={logoSearch} alt="logoSearch" />
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={avatar} alt="avatar" />{" "}
                    <span className="hidden-xs">My profile</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a>Action</a>
                    </li>
                    <li>
                      <a>Another action</a>
                    </li>
                    <li>
                      <a>Something else here</a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a>Separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
