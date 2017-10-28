import React, { Component } from "react";
import { Link } from "react-router-dom";
import chelsea from "../../images/icons/clubs/eng1/chelsea.jpg";
import mu from "../../images/icons/clubs/eng1/manchesterunited.jpg";
//import Match from "./Match/Match";

//import "./MatchList.css";

class ScheduleList extends Component {
  render() {
    return (
      <div>
        <div
          className="leagueStandings__header"
          style={{ textTransform: "uppercase" }}
        >
          <span>{this.props.title}</span>
        </div>
        <ul className="matchList" style={{ marginTop: "20px" }}>
          {this.props.matches.map(item => {
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
                      <span className="match-finished visible-xs">
                        Finished
                      </span>
                    </div>
                    <div className="match-clubs teampage-match">
                      <div className="match-club-first">
                        <div className="match-club ">
                          <div className="match-club-wrap">
                            <img
                              src={chelsea}
                              alt=""
                              className="match-club-logo"
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="match-club-score hidden-xs">
                        <span className="divider">:</span>
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
                    >
                      <span className="match-finished hidden-xs">Finished</span>
                    </div>
                  </div>
                  <div
                    className="match-detail collapse"
                    id={`match-id-${item.id}`}
                  >
                    ...
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ScheduleList;
