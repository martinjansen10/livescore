import React, { Component } from 'react';
import Header from '../components/Header/Header';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Footer from '../components/Footer/Footer';

import LeaguePage from '../components/LeaguePage/LeaguePage';
import MatchPage from '../components/MatchPage/MatchPage';

class Match extends Component {
  render() {
    return (
      <div>
        <div id="content">
          <MatchPage />
          <LeaguePage />
        </div>
        <RightSidebar />
      </div>
    );
  }
}

export default Match;
