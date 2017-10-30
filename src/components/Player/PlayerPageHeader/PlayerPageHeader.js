import React from "react";

const PlayerPageHeader = () => {
  return (
    <div className="leaguePageHeader">
      <div className="leaguePageHeader__head" style={{ position: "relative" }}>
        <div className="leaguePageHeader__logo">
          <img
            src={require("../../../images/icons/pp.png")}
            alt=""
            width="90"
          />
          <span className="badge badge-player">42</span>
          <select
            className="select-league-date"
            style={{ marginTop: "10px", width: "72px" }}
          >
            <option>17/18</option>
          </select>
          <span
            className="caret team-caret"
            style={{
              left: "100px",
              position: "absolute",
              left: "47px",
              bottom: "26px"
            }}
          />
        </div>
        <div className="leaguePageHeader__title match-league team-page">
          <h2>Oleksandr Zinchenko</h2>
          <span className="flag flag-england" />
          <span className="league">England</span>
          <br />
          <span style={{ color: "rgb(182, 183, 183)" }}>Forward</span>
          <br />
          <p className="info-pl">Age: 34 (15 Dec 1996)</p>
          <p className="info-pl">Height: 175 cm</p>
          <p className="info-pl">Weight: 67 kg</p>
          <div
            className="leaguePageHeader__dropdown"
            style={{ position: "relative" }}
          />
        </div>
        <div style={{ position: "absolute", right: "0px", top: "12px" }}>
          <span>PL</span>&nbsp;
          <img
            src={require("../../../images/icons/clubs/eng1/manchesterunited.jpg")}
            alt=""
            width="30"
          />
        </div>
        <div className="hidden-xs leaguePageHeader__follow">
          <span>FOLLOW</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerPageHeader;
