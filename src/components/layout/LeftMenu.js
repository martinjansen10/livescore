import React, { Component } from 'react';
import ads from '../../images/ads-250x250.jpg';
import { Link } from 'react-router-dom';

import topLeagues from '../../seeds/topLeagues';

class LeftMenu extends Component {
  state = {
    countries: [
      {
        country: 'England',
        flag: 'flag flag-england',
        badge: 12
      },
      {
        country: 'Australia',
        flag: 'flag flag-au',
        badge: 12
      },
      {
        country: 'Tibet',
        flag: 'flag flag-tibet',
        badge: 12
      },
      {
        country: 'Wales',
        flag: 'flag flag-wales',
        badge: 12
      },
      {
        country: 'France',
        flag: 'flag flag-fr',
        badge: 12
      },
      {
        country: 'Spain',
        flag: 'flag flag-es',
        badge: 12
      }
    ]
  };

  render() {
    return (
      <div id="menu" className="collapse navbar-collapse">
        <span className="headline">Top Leagues</span>
        <ul className="nav nav-topliagues">
          {topLeagues.map((item, id) => {
            return (
              <li key={id}>
                <Link to={'/match/' + id}>
                  {item.title}
                  <span className="badge">
                    {item.counter}
                    <span className="color-blue" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="ads ads-250x250">
          <img src={ads} alt="" />
        </div>
        <span className="headline">Countries</span>
        <ul className="nav nav-countries">
          {this.state.countries.map((item, id) => (
            <div
              key={id}
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <span className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={`#col-${item.country}`}
                      aria-expanded="false"
                      aria-controls={`col-${item.country}`}
                    >
                      <span className={item.flag} /> {item.country}{' '}
                      <span className="caret" />
                      <span className="badge">{item.badge}</span>
                    </a>
                  </span>
                </div>
                <div
                  id={`col-${item.country}`}
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <ul className="list-group">
                    <li className="list-group-item league">
                      <Link to={'/'}>Premier League</Link>
                    </li>
                    <li className="list-group-item league">
                      <Link to={'/'}>Championship</Link>
                    </li>
                    <li className="list-group-item league">
                      <Link to={'/'}>League One</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeftMenu;
