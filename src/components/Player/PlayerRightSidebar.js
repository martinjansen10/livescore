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
import chelsea from "../../images/icons/clubs/eng1/chelsea.jpg";
import mu from "../../images/icons/clubs/eng1/manchesterunited.jpg";
import { Link } from "react-router-dom";

import topLeagues from "../../seeds/topLeagues";

class PlayerRightSidebar extends Component {
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
    playersGk: [
      {
        id: 1,
        name: "Anthony Pilars",
        captain: true
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
                  <span>Player Name</span>
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
          <ul className="list-group pl-list">
            <li className="list-group-item league">
              <Link to={"/"}>
                GOALS&nbsp;<img width="17" src={goals} />
                <span className="badge">12</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                PENALTY GOALS<span className="badge">3</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                FREEKICK GOALS<span className="badge">3</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                ASSISTS&nbsp;<img width="17" src={assist} />
                <span className="badge">3</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                TOTAL MINUTES&nbsp;&nbsp;<img width="13" src={time} />
                <span className="badge">345`</span>
              </Link>
            </li>
            <li className="list-group-item league">
              <Link to={"/"}>
                CARDS<span className="badge">
                  <span style={{ float: "left" }}>23</span>
                  <i className="y-card" />
                  <span style={{ float: "left", marginLeft: "5px" }}>23</span>
                  <i className="r-card" />
                </span>
              </Link>
            </li>
          </ul>
          <span className="headline-top">LATEST MATCHES</span>
          <span className="headline" style={{ textAlign: "center" }}>
            Gameweek 2 <span className="caret" />
          </span>
          <ul className="nav nav-countries">
            {this.state.playersGk.map((item, idx) => (
              <section>
                <div key={idx} id="accordion" className="clearfix hidden-xs">
                  <div
                    style={{
                      float: "left"
                    }}
                    className="pl-list-table"
                  >
                    <span
                      style={{ color: "rgb(182, 183, 183)", fontSize: "10px" }}
                    >
                      23.8.17
                    </span>
                    <br />
                    <img
                      style={{
                        marginTop: "3px",
                        marginRight: "3px",
                        fontSize: "10px"
                      }}
                      src={require("../../images/icons/W.png")}
                    />
                    <span style={{ fontSize: "11px" }}>
                      42{" "}
                      <strong style={{ color: "rgb(182, 183, 183)" }}>
                        pts
                      </strong>
                    </span>
                  </div>
                  <div
                    style={{
                      float: "left"
                    }}
                    className="pl-list-table"
                  >
                    <img src={mu} />&nbsp;
                    <span>Manchester United</span>
                    <br />
                    <img src={chelsea} />&nbsp;
                    <span>Chelsea</span>
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
                    <span style={{ display: "block", marginTop: "5px" }}>
                      1
                    </span>
                  </div>
                </div>
                <div key={idx} className="clearfix visible-xs">
                  <div>
                    <p style={{ textAlign: "left", padding: "0 10px" }}>
                      <span style={{ color: "rgb(182, 183, 183)" }}>
                        12/12
                      </span>&nbsp;<span className="flag flag-england" />
                      <span className="league">EN</span>
                      <span style={{ float: "right" }}>
                        42 pts&nbsp;<img
                          src={require("../../images/icons/W.png")}
                        />
                      </span>
                    </p>
                    <p style={{ textAlign: "left", padding: "0 10px" }}>
                      <img src={mu} />&nbsp;
                      <span>Manchester United</span>
                      <span style={{ float: "right" }}>3</span>
                    </p>
                    <p style={{ textAlign: "left", padding: "0 10px" }}>
                      <img src={chelsea} />&nbsp;
                      <span>Chelsea</span>
                      <span style={{ float: "right" }}>3</span>
                    </p>
                  </div>
                </div>
              </section>
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

export default PlayerRightSidebar;
