import React, { Component } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LeftMenu from './components/layout/LeftMenu';
import HomeContent from './components/Home/HomeContent';
import RightMenu from './components/layout/RightMenu';

class Home extends Component {
  render() {
    return (
        <main>
          <Header/>
          <section className="content">
            <div className="container">
              <LeftMenu/>
              <HomeContent/>
              <RightMenu/>
            </div>
          </section>
          <br/><br/><br/><br/>
          <Footer/>
        </main>
    );
  }
}

export default Home;
