import React, { Component } from "react";
import PlayerPageHeader from "./PlayerPageHeader/PlayerPageHeader";
import TransferList from "./TransferList";
import MatchList from "../MatchList/MatchList";
import PlayerStatistics from "./PlayerStatistics";
import PlayerList from "./PlayerList";
import CareerList from "./CareerList";
import "./PlayerPage.css";

import { matches, matches2, matches3 } from "../../seeds/MatchesSeed";

export default class PlayerPage extends Component {
  render() {
    return (
      <div className="leaguePage">
        <div className="leaguePage__header">
          <PlayerPageHeader />
        </div>
        <div className="leaguePage__standings">
          <PlayerStatistics title="Statistics" />
        </div>
        <div className="leaguePage__latest">
          <PlayerList title="Latest Matches" matches={matches} />
        </div>
        <br />
        <div className="leaguePage__standings">
          <TransferList />
        </div>
        <br />
        <div className="leaguePage__latest">
          <CareerList title="Career" matches={matches} />
        </div>
      </div>
    );
  }
}
