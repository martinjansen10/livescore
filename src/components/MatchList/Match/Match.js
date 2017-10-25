import React, { Component } from "react";
import "./Match.css";

class Match extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="match__item">
        <div>
          <div className="match__datetime">{item.datetime}</div>
          <div className="match__status">{item.status}</div>
        </div>
        <div className="match__clubTitle">{item.clubOne}</div>
        <div className="match__clubEmblem">
          <img src={item.emblem1} alt="clubOne emblem" />
        </div>
        <div className="match__score">{item.score}</div>
        <div className="match__clubEmblem">
          <img src={item.emblem2} alt="clubTwo emblem" />
        </div>
        <div className="match__clubTitle">{item.clubTwo}</div>
        <div className="match__digits">{item.digits}</div>
        <div className="match__more">{item.more}</div>
      </div>
    );
  }
}

export default Match;
