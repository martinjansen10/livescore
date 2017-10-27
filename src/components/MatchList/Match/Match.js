import React, { Component } from "react";
import "./Match.css";
import { Link } from "react-router-dom";
import chelsea from "../../../images/icons/clubs/eng1/chelsea.jpg";
import mu from "../../../images/icons/clubs/eng1/manchesterunited.jpg";

class Match extends Component {
  render() {
    let item = this.props.item;
    let key = this.props.key;
    console.log(item);
    return (
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
            <span className="match-finished visible-xs">Finished</span>
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
            <span className="match-finished hidden-xs">Finished</span>
          </div>
        </div>
        <div className="match-detail collapse" id={`match-id-${item.id}`}>
          ...
        </div>
      </div>
    );
  }
}

export default Match;
