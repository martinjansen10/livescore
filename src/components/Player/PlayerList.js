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
        <p className="round-header">
          Season All <span className="caret" />&nbsp;&nbsp;&nbsp;&nbsp;League
          All <span className="caret" />
        </p>
        <div className="leagueStandings__table">
          <table>
            <tbody className="player-table">
              <tr style={{ color: "#b6b7b7" }}>
                <th style={{ textAlign: "left", paddingLeft: "10px" }}>
                  MATCH DETAIL
                </th>
                <th style={{ color: "#f7c70c" }}>
                  <img
                    width="13"
                    src={require("../../images/icons/pitch.png")}
                    alt="BL"
                  />
                </th>
                <th>
                  <img width="15" src={time} alt="BL" />
                </th>
                <th>
                  <img width="18" src={goals} alt="BL" />
                </th>
                <th>
                  <img width="21" src={assist} alt="BL" />
                </th>
                <th>
                  <i className="y-card" />
                </th>
                <th>
                  <i className="r-card" />
                </th>
                <th className="hidden-xs">
                  <img
                    width="14"
                    src={require("../../images/icons/refresh_blue.png")}
                    alt="BL"
                  />
                </th>
                <th className="hidden-xs">
                  <img
                    width="14"
                    src={require("../../images/icons/refresh_red.png")}
                    alt="BL"
                  />
                </th>
              </tr>
              {this.state.playerList.map(item => (
                <tr>
                  <td style={{ textAlign: "left" }}>
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
                      <span className="hidden-xs">Manchester United</span>
                      <span className="visible-xs">MNU</span>
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
                  </td>
                  <td>1</td>
                  <td>2</td>
                  <td>8</td>
                  <td className="last" align="center">
                    2
                  </td>
                  <td>6</td>
                  <td>6</td>
                  <td className="hidden-xs">6</td>
                  <td className="hidden-xs">6</td>
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
