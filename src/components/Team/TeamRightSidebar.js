import React, { Component } from "react";
//import "./RightSidebar.css";
import ads from "../../images/ads-250x250.jpg";
import player from "../../images/icons/player.png";
import star from "../../images/icons/star.png";
import goals from "../../images/icons/goals.png";
import assist from "../../images/icons/assist.png";
import time from "../../images/icons/time.png";
import isearch from "../../images/icons/i-search.png";
import team from "../../images/icons/team.png";
import { Link } from "react-router-dom";

import topLeagues from "../../seeds/topLeagues";

class TeamRightSidebar extends Component {
  state = {
    players: [
      {
        id: 1,
        name: "Anthony Pilars"
      },
      {
        id: 2,
        name: "Ernest Wickens"
      },
      {
        id: 3,
        name: "Witary Monrow"
      }
    ],
    countries: [
      {
        country: "England",
        flag: "flag flag-england",
        badge: 12
      },
      {
        country: "Australia",
        flag: "flag flag-au",
        badge: 12
      },
      {
        country: "Tibet",
        flag: "flag flag-tibet",
        badge: 12
      },
      {
        country: "Wales",
        flag: "flag flag-wales",
        badge: 12
      },
      {
        country: "France",
        flag: "flag flag-fr",
        badge: 12
      },
      {
        country: "Spain",
        flag: "flag flag-es",
        badge: 12
      }
    ]
  };

  render() {
    return (
      <div id="sidebar" className="rightSidebar">
        <div id="menu" className="rightMenu">
          <span className="headline">Fantasy Scores</span>
          <ul className="nav nav-topliagues">
            <li>
              <select className="r-select">
                <option>Provider: EPL</option>
              </select>
            </li>
            <li style={{ position: "relative" }}>
              <select className="r-select">
                <option>Team: My Fantasy Team</option>
              </select>
            </li>
          </ul>
          <div
            className="panel-heading clearfix"
            style={{ textAlign: "left", background: "#e8efed" }}
            role="tab"
            id="headingOne"
          >
            <span className="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion">
                <img
                  src={player}
                  width="40"
                  style={{ marginRight: "10px", float: "left" }}
                />
                <div
                  style={{
                    float: "left",
                    marginRight: "10px"
                  }}
                >
                  <span className="hidden-xs">Player Name</span>
                  <br />
                  <i className="flag flag-england" />&nbsp;&nbsp;
                  <span className="position-txt" style={{ fontSize: "13px" }}>
                    EN
                  </span>&nbsp;&nbsp;
                  <span
                    className="position-txt"
                    style={{ fontSize: "14px", color: "#000" }}
                  >
                    112
                  </span>&nbsp;<span
                    style={{ fontSize: "13px" }}
                    className="position-txt"
                  >
                    pts
                  </span>
                </div>
                <div className="r-pts">
                  <img
                    src="/img/manchester-big-club-emblem.png"
                    width="32"
                    alt=""
                  />
                </div>
              </a>
            </span>
          </div>
          <br />
          <span className="headline-top">SQUAD</span>
          <span className="headline">
            GOALKEEPERS <span style={{ float: "right" }}>Pts</span>
          </span>
          <ul className="nav nav-countries">
            {this.state.players.map((item, idx) => (
              <div key={idx} id="accordion">
                <div>
                  <div
                    className="clearfix"
                    role="tab"
                    style={{ border: "none" }}
                  >
                    <span className="panel-title">
                      <a role="button" href={`#col-${item.id}`}>
                        <img
                          src={require("../../images/icons/uniform1.png")}
                          width="40"
                          style={{ marginRight: "10px", float: "left" }}
                        />
                        <div
                          style={{
                            float: "left",
                            marginRight: "10px"
                          }}
                        >
                          <span className="hidden-xs">Hugo Lloris</span>
                          <br />
                          <span className="position-txt">Goalkeeper</span>
                        </div>
                        <div className="r-pts">
                          <span className="badge">122</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <span className="headline">
            DEFENDERS <span style={{ float: "right" }}>Pts</span>
          </span>
          <ul className="nav nav-countries">
            {this.state.players.map((item, idx) => (
              <div key={idx} id="accordion">
                <div>
                  <div
                    className="clearfix"
                    role="tab"
                    style={{ border: "none" }}
                  >
                    <span className="panel-title">
                      <a role="button" href={`#col-${item.id}`}>
                        <img
                          src={require("../../images/icons/uniform2.png")}
                          width="40"
                          style={{ marginRight: "10px", float: "left" }}
                        />
                        <div
                          style={{
                            float: "left",
                            marginRight: "10px"
                          }}
                        >
                          <span className="hidden-xs">Hugo Lloris</span>
                          <br />
                          <span className="position-txt">Goalkeeper</span>
                        </div>
                        <div className="r-pts">
                          <span className="badge">122</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <span className="headline">
            MIDFIELDERS <span style={{ float: "right" }}>Pts</span>
          </span>
          <ul className="nav nav-countries">
            {this.state.players.map((item, idx) => (
              <div key={idx} id="accordion">
                <div>
                  <div
                    className="clearfix"
                    role="tab"
                    style={{ border: "none" }}
                  >
                    <span className="panel-title">
                      <a role="button" href={`#col-${item.id}`}>
                        <img
                          src={require("../../images/icons/uniform2.png")}
                          width="40"
                          style={{ marginRight: "10px", float: "left" }}
                        />
                        <div
                          style={{
                            float: "left",
                            marginRight: "10px"
                          }}
                        >
                          <span className="hidden-xs">Hugo Lloris</span>
                          <br />
                          <span className="position-txt">Goalkeeper</span>
                        </div>
                        <div className="r-pts">
                          <span className="badge">122</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <span className="headline">
            FORWARDS <span style={{ float: "right" }}>Pts</span>
          </span>
          <ul className="nav nav-countries">
            {this.state.players.map((item, idx) => (
              <div key={idx} id="accordion">
                <div>
                  <div
                    className="clearfix"
                    role="tab"
                    style={{ border: "none" }}
                  >
                    <span className="panel-title">
                      <a role="button" href={`#col-${item.id}`}>
                        <img
                          src={require("../../images/icons/uniform2.png")}
                          width="40"
                          style={{ marginRight: "10px", float: "left" }}
                        />
                        <div
                          style={{
                            float: "left",
                            marginRight: "10px"
                          }}
                        >
                          <span className="hidden-xs">Hugo Lloris</span>
                          <br />
                          <span className="position-txt">Goalkeeper</span>
                        </div>
                        <div className="r-pts">
                          <span className="badge">122</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        {/* <img src="/img/ads-right-250-360.png" alt="ads-right" />
        <div className="live_matchcast">
          <div className="live_matchcast_div">
            <div className="match-detail-possession">
              <span className="headline">ATTACKS</span>
              <div className="diargam">
                <span>25%</span>
                <div className="c100 p55">
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <span>75%</span>
              </div>
            </div>
            <div className="match-detail-possession">
              <span className="headline">DANGEROUS ATTACKS</span>
              <div className="diargam">
                <span>35%</span>
                <div className="c100 p55">
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <span>65%</span>
              </div>
            </div>
            <div className="match-detail-total-shoots">
              <span className="headline">ON TARGET</span>
              <div className="progress">
                <div className="first-shoots">11</div>
                <div className="scale">
                  <div style={{ width: "40%" }} />
                  <div style={{ width: "60%" }} />
                </div>
                <div className="second-shoots">18</div>
              </div>
            </div>
            <div className="match-detail-total-shoots">
              <span className="headline">OFF TARGET</span>
              <div className="progress">
                <div className="first-shoots">11</div>
                <div className="scale">
                  <div style={{ width: "20%" }} />
                  <div style={{ width: "80%" }} />
                </div>
                <div className="second-shoots">18</div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default TeamRightSidebar;
