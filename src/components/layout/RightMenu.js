import React, { Component } from "react";
import ads from "../../images/ads-250x360.jpg";

class RightMenu extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="ads ads-250x360">
          <img src={ads} alt="" className="img-responsive" />
        </div>
      </div>
    );
  }
}

export default RightMenu;
