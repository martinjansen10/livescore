import React, { Component } from "react";
import Header from "../components/Header/Header";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import Footer from "../components/Footer/Footer";
import MatchDetailPage from "../components/MatchDetailPage/MatchDetailPage";

class MatchDetail extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <MatchDetailPage />
        </div>
        <RightSidebar />
      </div>
    );
  }
}

export default MatchDetail;
