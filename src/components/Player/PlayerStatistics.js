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
class PlayerStatistics extends Component {
  state = {
    playerList: [
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
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
        <div className="leagueStandings__table player-stats">
          <ul className="list-group">
            <li className="list-group-item league">
              <Link to={"/"}>
                TOTAL PLAYED MATCHES&nbsp;<img
                  width="11"
                  src={require("../../images/icons/pitch.png")}
                />
                <span>12</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                GOALS&nbsp;<img width="17" src={goals} />
                <span>12</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                ASSISTS&nbsp;<img width="17" src={assist} />
                <span>3</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                TOTAL MINUTES&nbsp;&nbsp;<img width="13" src={time} />
                <span>345`</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                CARDS<span>
                  <span style={{ float: "left" }}>23</span>
                  <i className="y-card" />
                  <span style={{ float: "left", marginLeft: "5px" }}>23</span>
                  <i className="r-card" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayerStatistics;
