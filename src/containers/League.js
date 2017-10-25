import React, { Component } from "react";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import Footer from "../components/Footer/Footer";

import LeaguePage from "../components/LeaguePage/LeaguePage";

class League extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <LeaguePage />
        </div>
        <RightSidebar />
      </div>
    );
  }
}

export default League;
