import React, { Component } from "react";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import PlayerRightSidebar from "../components/Player/PlayerRightSidebar";
import Footer from "../components/Footer/Footer";

import PlayerPage from "../components/Player/PlayerPage";

class Team extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <PlayerPage />
        </div>
        <PlayerRightSidebar />
      </div>
    );
  }
}

export default Team;
