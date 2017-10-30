import React, { Component } from "react";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import MatchRightSidebar from "../components/MatchPage/MatchRightSidebar";
import Footer from "../components/Footer/Footer";

import LeaguePage from "../components/LeaguePage/LeaguePage";
import MatchPage from "../components/MatchPage/MatchPage";

class Match extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <MatchPage />
        </div>
        <MatchRightSidebar />
      </div>
    );
  }
}

export default Match;
