import React, { Component } from "react";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import TeamRightSidebar from "../components/Team/TeamRightSidebar";
import Footer from "../components/Footer/Footer";

import TeamPage from "../components/Team/TeamPage";

class Team extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <TeamPage />
        </div>
        <TeamRightSidebar />
      </div>
    );
  }
}

export default Team;
