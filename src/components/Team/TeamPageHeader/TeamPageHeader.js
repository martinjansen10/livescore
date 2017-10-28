import React from "react";
import "./LeaguePageHeader.css";

const LeaguePageHeader = () => {
  return (
    <div className="leaguePageHeader">
      <div className="leaguePageHeader__head">
        <div className="leaguePageHeader__logo">
          <img src="/img/manchester-big-club-emblem.png" alt="" />
        </div>
        <div className="leaguePageHeader__title match-league">
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
            </select>
            <div className="last" style={{ display: "inline-block" }}>
              <span className="hidden-xs lose-l">L</span>
              <span className="hidden-xs draw-d">D</span>
              <span className="hidden-xs win-w">W</span>
            </div>
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
    </div>
  );
};

export default LeaguePageHeader;
