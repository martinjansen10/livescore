import React, { Component } from "react";
import "./RightSidebar.css";
import ads from "../../images/ads-250x250.jpg";
import player from "../../images/icons/player.png";
import { Link } from "react-router-dom";

import topLeagues from "../../seeds/topLeagues";

class RightSidebar extends Component {
  state = {
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
      <div className="rightSidebar">
        <div id="menu" className="collapse navbar-collapse">
          <span className="headline">Fantasy Scores</span>
          <ul className="nav nav-topliagues">
            <li>
              <input
                type="text"
                className="r-search"
                placeHolder="Player search..."
              />
            </li>
            <li>
              <input
                type="text"
                className="r-search"
                placeHolder="Player search..."
              />
            </li>
          </ul>
          <span className="headline">
            # PLAYER <span style={{ float: "right" }}>Pts</span>
          </span>
          <ul className="nav nav-countries">
            <div
              key="1"
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <span className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={`#col-1`}
                      aria-expanded="false"
                      aria-controls={`col-1`}
                    >
                      <span style={{ marginRight: "10px" }}>1</span>
                      <img
                        src={player}
                        width="40"
                        style={{ marginRight: "10px" }}
                      />
                      <span>Anthony Pilars</span>
                      <div className="r-pts">
                        <span className="badge">122</span>
                        <span className="caret" />
                      </div>
                    </a>
                  </span>
                </div>
                <div
                  id={`col-1`}
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <ul className="list-group">
                    <li className="list-group-item league">
                      <Link to={"/"}>
                        GOALS<span className="badge">12</span>
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
                        ASSISTS<span className="badge">3</span>
                      </Link>
                    </li>
                    <li className="list-group-item league">
                      <Link to={"/"}>
                        TOTAL MINUTES<span className="badge">345`</span>
                      </Link>
                    </li>
                    <li className="list-group-item league">
                      <Link to={"/"}>
                        CARDS<span className="badge">
                          <span style={{ float: "left" }}>23</span>
                          <i className="y-card" />
                          <span style={{ float: "left", marginLeft: "5px" }}>
                            23
                          </span>
                          <i className="r-card" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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

export default RightSidebar;
