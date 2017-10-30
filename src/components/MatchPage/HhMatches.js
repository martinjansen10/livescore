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
class HhMatches extends Component {
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
                      <div
                        className="match-date"
                        style={{ width: "59px", marginTop: "3px" }}
                      >
                        23.08 20:45
                      </div>
                      <div className="match-clubs">
                        <div className="match-club-first">
                          <div className="match-club">
                            <div className="match-club-wrap">
                              <img
                                src={chelsea}
                                alt=""
                                className="match-club-logo"
                              />{" "}
                              <span className="match-club-name">
                                Chelsea
                              </span>{" "}
                              <span className="match-club-score visible-xs">
                                0
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="match-club-score hidden-xs">
                          1 <span className="divider">:</span> 1
                        </div>
                        <div className="match-club-second">
                          <div className="match-club">
                            <div className="match-club-wrap">
                              <img
                                src={mu}
                                alt=""
                                className="match-club-logo"
                              />{" "}
                              <span className="match-club-name">
                                Manchester United
                              </span>{" "}
                              <span className="match-club-score visible-xs">
                                1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="match-detail-button" />
                      <div
                        className="match-date"
                        style={{ marginLeft: "26px", marginTop: "3px" }}
                      />
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

export default HhMatches;
