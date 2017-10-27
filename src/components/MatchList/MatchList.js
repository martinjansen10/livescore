import React, { Component } from "react";
import Match from "./Match/Match";

import "./MatchList.css";

class MatchList extends Component {
  render() {
    return (
      <div>
        <div
          className="leagueStandings__header"
          style={{ textTransform: "uppercase" }}
        >
          <span>{this.props.title}</span>
        </div>
        {this.props.tabs && (
          <div
            className="leagueStandings__menu"
            role="tablist"
            style={{ marginBottom: "12px" }}
          >
            <a href="#all" aria-controls="all" role="tab" data-toggle="tab">
              ALL
            </a>&nbsp;&nbsp;
            <a href="#live" aria-controls="live" role="tab" data-toggle="tab">
              LIVE
            </a>{" "}
            &nbsp;&nbsp;
            <a
              href="#finished"
              aria-controls="finished"
              role="tab"
              data-toggle="tab"
            >
              FINISHED
            </a>
          </div>
        )}
        {!this.props.tabs && (
          <p className="round-header">
            Round 2<span className="caret" />
          </p>
        )}
        <ul className="matchList">
          {this.props.matches.map(item => {
            return (
              <li key={item.id} className="matchList__listItem">
                <Match key={item.id} item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MatchList;
