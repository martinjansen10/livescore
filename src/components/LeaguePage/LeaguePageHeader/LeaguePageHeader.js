import React from "react";
import "./LeaguePageHeader.css";

const LeaguePageHeader = () => {
  return (
    <div className="leaguePageHeader">
      <div className="leaguePageHeader__head">
        <div className="leaguePageHeader__logo">
          <img src="/img/league-emblem.png" alt="" />
        </div>
        <div className="leaguePageHeader__title">
          <div>Premiere League</div>
          <span>++</span>
          <span>England</span>
          <div className="leaguePageHeader__dropdown">17/18</div>
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
