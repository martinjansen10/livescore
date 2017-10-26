import React from "react";
import "./LeaguePageHeader.css";

const LeaguePageHeader = () => {
  return (
    <div className="leaguePageHeader">
      <div className="leaguePageHeader__head">
        <div className="leaguePageHeader__logo">
          <img src="/img/league-emblem.png" alt="" />
        </div>
        <div className="leaguePageHeader__title match-league">
          <h2>Premiere League</h2>
          <span className="flag flag-england" />
          <span className="league">England</span>
          <div
            className="leaguePageHeader__dropdown"
            style={{ position: "relative" }}
          >
            <select className="select-league-date">
              <option>17/18</option>
            </select>
            <span
              className="caret"
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
      <div className="leaguePageHeader__progess">
        <span>11 AUG</span>
        <div className="leaguePageHeader__bar">
          <div className="leaguePageHeader__bar-bg" />
        </div>
        <span>27 MAY</span>
      </div>
    </div>
  );
};

export default LeaguePageHeader;
