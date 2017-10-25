import React, { Component } from "react";
import "./RightSidebar.css";

class RightSidebar extends Component {
  render() {
    return (
      <div className="rightSidebar">
        <img src="/img/ads-right-250-360.png" alt="ads-right" />
        <div className="live_matchcast">
          <div className="live_matchcast_div">
            <div className="match-detail-possession">
              <span className="headline">ATTACKS</span>
              <div className="diargam">
                <span>25%</span>
                <div className="c100 p55">
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <span>75%</span>
              </div>
            </div>
            <div className="match-detail-possession">
              <span className="headline">DANGEROUS ATTACKS</span>
              <div className="diargam">
                <span>35%</span>
                <div className="c100 p55">
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <span>65%</span>
              </div>
            </div>
            <div className="match-detail-total-shoots">
              <span className="headline">ON TARGET</span>
              <div className="progress">
                <div className="first-shoots">11</div>
                <div className="scale">
                  <div style={{ width: "40%" }} />
                  <div style={{ width: "60%" }} />
                </div>
                <div className="second-shoots">18</div>
              </div>
            </div>
            <div className="match-detail-total-shoots">
              <span className="headline">OFF TARGET</span>
              <div className="progress">
                <div className="first-shoots">11</div>
                <div className="scale">
                  <div style={{ width: "20%" }} />
                  <div style={{ width: "80%" }} />
                </div>
                <div className="second-shoots">18</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
