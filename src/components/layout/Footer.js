import React, { Component } from 'react';
import logo from '../../images/logo-header.png'
import logoTime from '../../images/icons/time.png'
import logoSearch from '../../images/icons/search.png'
import avatar from '../../images/icons/avatar.png'

class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="container">
          <div className="col-sm-6 col-sm-push-3 col-xs-12 col-xs-push-0">
            <ul className="nav navbar-nav navbar-footer">
              <li><a href>Terms &amp; Conditions</a></li>
              <li><a href>Privacy Policy</a></li>
              <li><a href>Cookie Policy</a></li>
            </ul>
          </div>
          <div className="col-sm-3 col-sm-push-3 col-xs-12 col-xs-push-0">
            <ul className="nav navbar-nav navbar-social">
              <li>
                <a href><img src="images/icons/twitter.png" alt /></a>
              </li>
              <li>
                <a href><img src="images/icons/instagram.png" alt /></a>
              </li>
              <li>
                <a href><img src="images/icons/fb.png" alt /></a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-sm-pull-9 col-xs-12 col-xs-pull-0">
            <div className="copy">© Copyright <a href="#">Wirescores.com</a></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
