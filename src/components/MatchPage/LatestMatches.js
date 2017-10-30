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
class LatestMatches extends Component {
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
        <div className="leagueStandings__table match-table">
          <ul className="matchList" style={{ marginTop: "20px" }}>
            {this.state.matches.map(item => {
              return (
                <li key={item.id} className="matchList__listItem clearfix">
                  <div style={{ float: "left" }}>
                    <div
                      style={{
                        float: "left"
                      }}
                      className="pl-list-table"
                    >
                      <span
                        style={{
                          color: "rgb(182, 183, 183)",
                          fontSize: "10px"
                        }}
                      >
                        23.8.17
                      </span>
                      <br />
                      <img
                        style={{ marginTop: "3px" }}
                        src={require("../../images/icons/W.png")}
                      />
                    </div>
                    <div
                      style={{
                        float: "left",
                        marginTop: "5px"
                      }}
                      className="pl-list-table"
                    >
                      <i className="flag flag-england" />
                      <br />
                      <span>EN</span>
                    </div>
                    <div
                      style={{
                        float: "left"
                      }}
                      className="pl-list-table"
                    >
                      <img src={mu} />&nbsp;
                      <span className="hidden-xs" style={{ fontSize: "11px" }}>
                        Manchester United
                      </span>
                      <span className="visible-xs">MNU</span>
                      <br />
                      <img src={chelsea} />&nbsp;
                      <span className="hidden-xs" style={{ fontSize: "11px" }}>
                        Chelsea
                      </span>
                      <span className="visible-xs">CHE</span>
                    </div>
                    <div
                      style={{
                        float: "left"
                      }}
                      className="pl-list-table"
                    >
                      <span style={{ display: "block", marginTop: "5px" }}>
                        1
                      </span>
                      <span style={{ display: "block", marginTop: "6px" }}>
                        1
                      </span>
                    </div>
                  </div>
                  <div style={{ float: "right" }}>
                    <div
                      style={{
                        float: "left"
                      }}
                      className="pl-list-table"
                    >
                      <span
                        style={{
                          color: "rgb(182, 183, 183)",
                          fontSize: "10px"
                        }}
                      >
                        23.8.17
                      </span>
                      <br />
                      <img
                        style={{ marginTop: "3px" }}
                        src={require("../../images/icons/W.png")}
                      />
                    </div>
                    <div
                      style={{
                        float: "left",
                        marginTop: "5px"
                      }}
                      className="pl-list-table"
                    >
                      <i className="flag flag-england" />
                      <br />
                      <span>EN</span>
                    </div>
                    <div
                      style={{
                        float: "left"
                      }}
                      className="pl-list-table"
                    >
                      <img src={mu} />&nbsp;
                      <span className="hidden-xs" style={{ fontSize: "11px" }}>
                        Manchester United
                      </span>
                      <span className="visible-xs" style={{ fontSize: "11px" }}>
                        MNU
                      </span>
                      <br />
                      <img src={chelsea} />&nbsp;
                      <span className="hidden-xs">Chelsea</span>
                      <span className="visible-xs">CHE</span>
                    </div>
                    <div
                      style={{
                        float: "left"
                      }}
                      className="pl-list-table"
                    >
                      <span style={{ display: "block", marginTop: "5px" }}>
                        1
                      </span>
                      <span style={{ display: "block", marginTop: "6px" }}>
                        1
                      </span>
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

export default LatestMatches;
