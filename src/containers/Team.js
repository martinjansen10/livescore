import React, { Component } from "react";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import Footer from "../components/Footer/Footer";

import TeamPage from "../components/Team/TeamPage";

class Team extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <TeamPage />
        </div>
        <RightSidebar />
      </div>
    );
  }
}

export default Team;
