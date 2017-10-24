import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LeftMenu from '../components/layout/LeftMenu';
import HomeContent from '../components/Home/HomeContent';
import RightMenu from '../components/layout/RightMenu';
import Match from './Match';

class Home extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="content">
          <div className="container">
            <LeftMenu />
            <Route
              exact
              path={this.props.match.url}
              render={() => {
                return (
                  <div>
                    <HomeContent />
                    <RightMenu />
                  </div>
                );
              }}
            />
            <Route
              path={`${this.props.match.url}match/:id`}
              render={() => {
                return <Match />;
              }}
            />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    );
  }
}

export default Home;
