import React, { Component } from "react";
import { Link } from "react-router-dom";
import chelsea from "../../images/icons/clubs/eng1/chelsea.jpg";
import mu from "../../images/icons/clubs/eng1/manchesterunited.jpg";
import goals from "../../images/icons/goals.png";
import cup from "../../images/icons/cup.png";
import assist from "../../images/icons/assist.png";
import time from "../../images/icons/time.png";
//import Match from "./Match/Match";

//import "./MatchList.css";
class MatchSummary extends Component {
  state = {
    matches: [
      {
        id: 1,
        name: ""
      },
      {
        id: 2,
        name: ""
      },
      {
        id: 3,
        name: ""
      },
      {
        id: 4,
        name: ""
      },
      {
        id: 5,
        name: ""
      }
    ]
  };

  render() {
    return (
      <div>
        <div
          className="leagueStandings__header"
          style={{ textTransform: "uppercase" }}
        >
          <span>{this.props.title}</span>
        </div>
        <div className="leagueStandings__table">
          <ul className="matchList" style={{ marginTop: "20px" }}>
            {this.state.matches.map(item => {
              return (
                <li key={item.id} className="matchList__listItem">
                  <div className="match-wrap">
                    <div
                      className="match"
                      data-toggle="collapse"
                      data-target={`#match-id-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`match-id-${item.id}`}
                    >
                      <div className="match-clubs">
                        <div className="match-club-first">sss</div>
                        <div className="match-club-score hidden-xs">
                          <span className="divider">:</span>
                        </div>
                        <div className="match-club-second">dw</div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MatchSummary;
