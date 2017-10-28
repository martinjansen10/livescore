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
class PlayerList extends Component {
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
        <div className="leagueStandings__table">
          <table>
            <tbody>
              <tr style={{ color: "#b6b7b7" }}>
                <th style={{ textAlign: "left", paddingLeft: "10px" }}>
                  PLAYER
                </th>
                <th>#</th>
                <th>NAT</th>
                <th style={{ color: "#49aa9e" }}>AGE</th>
                <th style={{ color: "#f7c70c" }} />
                <th>
                  <img width="15" src={time} alt="BL" />
                </th>
                <th>
                  <img width="20" src={goals} alt="BL" />
                </th>
                <th>
                  <img width="20" src={assist} alt="BL" />
                </th>
                <th>
                  <i className="y-card" />
                </th>
                <th>
                  <i className="r-card" />
                </th>
                <th>
                  <img
                    width="15"
                    src={require("../../images/icons/refresh_blue.png")}
                    alt="BL"
                  />
                </th>
                <th>
                  <img
                    width="15"
                    src={require("../../images/icons/refresh_red.png")}
                    alt="BL"
                  />
                </th>
              </tr>
              {this.state.playerList.map(item => (
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img
                      src={require("../../images/icons/player-team.png")}
                      width="40"
                    />&nbsp;
                    <div
                      style={{
                        float: "right",
                        marginLeft: "-20px",
                        marginRight: "10px"
                      }}
                    >
                      <span className="hidden-xs">Hugo Lloris</span>
                      <br />
                      <span className="position-txt">Goalkeeper</span>
                    </div>
                  </td>
                  <td>1</td>
                  <td>
                    <span className="flag flag-fr" />
                  </td>
                  <td>24</td>
                  <td>1</td>
                  <td>2</td>
                  <td>8</td>
                  <td className="last" align="center">
                    2
                  </td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlayerList;
