import React, { Component } from "react";
import LeaguePageHeader from "./LeaguePageHeader/LeaguePageHeader";
import LeagueStandings from "./LeagueStandings/LeagueStandings";
import MatchList from "../MatchList/MatchList";
import "./LeaguePage.css";

import { matches, matches2, matches3 } from "../../seeds/MatchesSeed";

export default class LeaguePage extends Component {
  render() {
    return (
      <div className="leaguePage">
        <div className="leaguePage__header">
          <LeaguePageHeader />
        </div>
        <div className="leaguePage__standings">
          <LeagueStandings />
        </div>
        <div className="leaguePage__day">
          <MatchList title="Matches of the day" matches={matches} tabs={true} />
        </div>
        <div className="leaguePage__latest">
          <MatchList title="Latest matches" matches={matches2} />
        </div>
        <div className="leaguePage__scheduled">
          <MatchList title="Scheduled matches" matches={matches3} />
        </div>
      </div>
    );
  }
}
