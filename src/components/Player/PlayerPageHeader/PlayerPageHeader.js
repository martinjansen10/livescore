import React from "react";
import "./TeamPageHeader.css";

const PlayerPageHeader = () => {
  return (
    <div className="leaguePageHeader">
      <div className="leaguePageHeader__head">
        <div className="leaguePageHeader__logo">
          <img
            src={require("../../../images/icons/pp.png")}
            alt=""
            width="90"
          />
        </div>
        <div className="leaguePageHeader__title match-league team-page">
          <h2>Oleksandr Zinchenko</h2>
          <span className="flag flag-england" />
          <span className="league">Germany</span>
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

export default PlayerPageHeader;
