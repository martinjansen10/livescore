import React, { Component } from "react";
import TeamPageHeader from "./TeamPageHeader/TeamPageHeader";
import TeamStandings from "./TeamStandings/TeamStandings";
import MatchList from "../MatchList/MatchList";
import ScheduleList from "./ScheduleList";
import PlayerList from "./PlayerList";
import "./TeamPage.css";

import { matches, matches2, matches3 } from "../../seeds/MatchesSeed";

export default class TeamPage extends Component {
  render() {
    return (
      <div className="leaguePage">
        <div className="leaguePage__header">
          <TeamPageHeader />
        </div>
        <div className="leaguePage__standings">
          <TeamStandings />
        </div>
        <div className="leaguePage__latest">
          <MatchList
            title="Latest matches"
            tabs={true}
            team={true}
            matches={matches2}
          />
        </div>
        <div className="leaguePage__latest">
          <ScheduleList title="Scheduled matches" matches={matches} />
        </div>
        <div className="leaguePage__latest">
          <PlayerList title="Players" matches={matches} />
        </div>
      </div>
    );
  }
}
