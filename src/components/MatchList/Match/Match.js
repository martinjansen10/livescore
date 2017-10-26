import React, { Component } from "react";
import "./Match.css";
import { Link } from "react-router-dom";
import chelsea from "../../../images/icons/clubs/eng1/chelsea.jpg";
import mu from "../../../images/icons/clubs/eng1/manchesterunited.jpg";

class Match extends Component {
  render() {
    let item = this.props.item;
    let key = this.props.key;
    return (
      <div className="match-wrap">
        <div
          className="match"
          data-toggle="collapse"
          data-target={`#match-id-${key}`}
          aria-expanded="false"
          aria-controls={`match-id-${key}`}
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
                  <img src={chelsea} alt="" className="match-club-logo" />{" "}
                  <span className="match-club-name">Chelsea</span>{" "}
                  <span className="match-club-score visible-xs">0</span>
                </div>
              </div>
            </div>
            <div className="match-club-score hidden-xs">
              1 <span className="divider">:</span> 1
            </div>
            <div className="match-club-second">
              <div className="match-club">
                <div className="match-club-wrap">
                  <img src={mu} alt="" className="match-club-logo" />{" "}
                  <span className="match-club-name">
                    Manchester United
                  </span>{" "}
                  <span className="match-club-score visible-xs">1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="match-detail-button" />
          <div
            className="match-date"
            style={{ marginLeft: "26px", marginTop: "3px" }}
          >
            <span className="match-finished">Finished</span>
          </div>
        </div>
        <div className="match-detail collapse" id={`match-id-${key}`}>
          <Link to={"/match"}>
            <div className="match-detail-odds">
              <div className="first-odds">
                <span className="type-1">1</span>{" "}
                <span className="type-2">2</span>
              </div>
              <span className="total-odds">1 : 1</span>
              <div className="second-odds">
                <span className="type-1">1</span>
              </div>
            </div>
          </Link>
          <div className="match-detail-total-shoots">
            <span className="headline">Total shoots</span>
            <div className="progress">
              <div className="first-shoots">11</div>
              <div className="scale">
                <div style={{ width: "60%" }} />
                <div style={{ width: "40%" }} />
              </div>
              <div className="second-shoots">18</div>
            </div>
          </div>
          <div className="match-detail-possession">
            <span className="headline">Possession</span>
            <div className="diargam">
              <span>45%</span>
              <div className="c100 p55">
                <div className="slice">
                  <div className="bar" />
                  <div className="fill" />
                </div>
              </div>
              <span>55%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
