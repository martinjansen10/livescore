import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Footer from './components/Footer/Footer';

// import Home from './components/Home/Home';
import LeaguePage from './components/LeaguePage/LeaguePage'
import MatchPage from './components/MatchPage/MatchPage'

import topLeagues from './seeds/topLeagues';
import counteries from './seeds/counteries';

class Match extends Component {
  render() {
    return (
        <div className="App">
          <div className="App__Header">       <Header /></div>
          <div className="App__Content">
            <div className="App__LeftSidebar">  <LeftSidebar topLeagues={topLeagues} counteries={counteries}/></div>
            <div className="App__Home">         <MatchPage /></div>
            {/*<div className="App__Home">         <LeaguePage /></div>*/}
            {/*<div className="App__Home">         <Home /></div>*/}
            <div className="App__RightSidebar"> <RightSidebar /></div>
            <div className="App__Footer">       <Footer /></div>
          </div>
        </div>
    );
  }
}

export default Match;
