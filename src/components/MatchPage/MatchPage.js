import React, { Component } from 'react';
import ODDS from './ODDS/ODDS';
import './MatchPage.css';

class MatchPage extends Component {
  render() {
    return (
      <div className="matchPage">
        <div className="matchPage__header">
          <div className="matchPage__Emblem">
            <img
              src="/img/manchester-big-club-emblem.png"
              alt="club1 embleme"
            />
            <br />
            <span>Manchester City</span>
          </div>
          <div className="matchPage__score_block">
            <div className="matchPage__status">FINISHED</div>
            <div className="matchPage__score">3:2</div>
            <div className="matchPage__half">1ST HALF</div>
            <div className="matchPage__half_score">2:1</div>
            <div className="matchPage__datetime">23.8.2017 20:45</div>
          </div>
          <div className="matchPage__Emblem">
            <img
              src="/img/leicestercity-big-club-emblem.png"
              alt="club2 embleme"
            />
            <br />
            <span>Leicester City</span>
          </div>
        </div>
        <div className="matchPage__league">
          <span className="matchPage__league_title">Premiere League</span>
          <span>++</span>
          <span>England</span>
        </div>
        <div className="matchPage__odds">
          <ODDS />
        </div>
      </div>
    );
  }
}

export default MatchPage;
