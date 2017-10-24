import React, { Component } from 'react';
import ads from '../../images/ads-250x250.jpg'

class LeftMenu extends Component {

  state = {
    countries: [
      {
        country: 'England',
        flag: 'flag flag-england',
        badge: 12,
      },
      {
        country: 'Australia',
        flag: 'flag flag-au',
        badge: 12,
      },
      {
        country: 'Tibet',
        flag: 'flag flag-tibet',
        badge: 12,
      },
      {
        country: 'Wales',
        flag: 'flag flag-wales',
        badge: 12,
      },
      {
        country: 'France',
        flag: 'flag flag-fr',
        badge: 12,
      },
      {
        country: 'Spain',
        flag: 'flag flag-es',
        badge: 12,
      },
    ]
  }

  render() {
    return (
      <div id="menu" className="collapse navbar-collapse"><span className="headline">Top Leagues</span>
        <ul className="nav nav-topliagues">
          <li className="active"><a href="#">Premier League <span className="badge">12 - <span className="color-blue">4</span></span></a></li>
          <li><a href="#">Premier League <span className="badge">12 - <span className="color-blue">4</span></span></a></li>
          <li><a href="#">Premier League <span className="badge">12 - <span className="color-blue">4</span></span></a></li>
        </ul>
        <div className="ads ads-250x250"><img src={ads} alt /></div><span className="headline">Countries</span>
        <ul className="nav nav-countries">
          {this.state.countries.map((item) => (          
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <span className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#col-${item.country}`} aria-expanded="false" aria-controls={`col-${item.country}`}>
                <span className={item.flag} /> {item.country} <span className="caret" /> 
                <span className="badge">{item.badge}</span>
                </a>
                </span>
              </div>
              <div id={`col-${item.country}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <ul className="list-group">
                  <li className="list-group-item league"><a href>Premier League</a></li>
                  <li className="list-group-item league"><a href>Championship</a></li>
                  <li className="list-group-item league"><a href>League One</a></li>
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
