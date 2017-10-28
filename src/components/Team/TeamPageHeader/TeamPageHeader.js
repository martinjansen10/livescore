import React from "react";
import "./TeamPageHeader.css";

const LeaguePageHeader = () => {
  return (
    <div className="leaguePageHeader">
      <div className="leaguePageHeader__head">
        <div className="leaguePageHeader__logo">
          <img src="/img/manchester-big-club-emblem.png" alt="" />
        </div>
        <div className="leaguePageHeader__title match-league team-page">
          <h2>Manchester City</h2>
          <div
            className="leaguePageHeader__dropdown"
            style={{ position: "relative" }}
          >
            <select
              className="select-league-date"
              style={{ marginTop: "10px" }}
            >
              <option>17/18</option>
            </select>&nbsp;&nbsp;
            <div className="top-stats" style={{ display: "inline-block" }}>
              <img src={require("../../../images/icons/W.png")} />
              <span>12</span>
              <img src={require("../../../images/icons/L.png")} />
              <span>8</span>
              <img src={require("../../../images/icons/D.png")} />
              <span>4</span>
            </div>
            <span
              className="caret team-caret"
              style={{
                left: "100px",
                position: "absolute",
                left: "46px",
                bottom: "15px"
              }}
            />
          </div>
        </div>
        <div className="leaguePageHeader__follow">
          <span>FOLLOW</span>
        </div>
      </div>
    </div>
  );
};

export default LeaguePageHeader;
