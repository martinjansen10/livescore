import React, { Component } from "react";
import "./LeftSidebar.css";

class LeftSidebar extends Component {
  render() {
    return (
      <div className="leftSidebar">
        <div className="topLeagues">
          <span>Top leagues</span>
          <ul className="topLeagues__list">
            {this.props.topLeagues.map(item => {
              return (
                <li key={item.id} className="topLeagues__listItem">
                  <span className="topLeagues__title">{item.title}</span>
                  <span className="topLeagues__counter">{item.counter}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="leftSidebar__ads">
          <img src="img/ads-250x250.jpg" alt="ads-250x250" />
        </div>
        <div className="counteries">
          <span>counteries</span>
          <ul className="counteries__list">
            {this.props.counteries.map(item => {
              var a;
              if (item.counter) {
                a = <div className="counteries__counter">{item.counter}</div>;
              } else a = null;

              item.flag = "flag-icon flag-icon-de";
              var cls = "counteries__flag " + item.flag;

              return (
                <li key={item.id} className="counteries__listItem">
                  <div className={cls} />
                  <div className="counteries__title">
                    <div className="counteries__title_text">{item.title}</div>
                    {a}
                  </div>
                  <div className="counteries__caret">
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftSidebar;
