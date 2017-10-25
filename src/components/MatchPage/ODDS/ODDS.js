import React, { Component } from "react";
import "./ODDS.css";

class ODDS extends Component {
  render() {
    return (
      <div className="odds">
        <div className="odds__header">ODDS</div>
        <div className="odds__menu">
          OVERALL <span style={{ textDecoration: "underline" }}>HOME</span> AWAY
        </div>
        <div className="odds__table">
          <table>
            <thead>
              <tr style={{ color: "#b6b7b7" }}>
                <th rowSpan="2">BOOKMARKER</th>
                <th colSpan="2">ASIAN HANDICAP</th>
                <th colSpan="3">1X2</th>
              </tr>
              <tr style={{ color: "#b6b7b7" }}>
                <th>HOME</th>
                <th>AWAY</th>
                <th>HOME</th>
                <th>DRAW</th>
                <th>AWAY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/img/1xbet-logo.png"
                    alt="BL"
                    style={{ maxWidth: "90px" }}
                  />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  3 <span className="arrow_up" />
                </td>
                <td>
                  1 <span className="arrow_up" />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  8 <span className="arrow_down" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/img/1xbet-logo.png"
                    alt="BL"
                    style={{ maxWidth: "90px" }}
                  />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  3 <span className="arrow_up" />
                </td>
                <td>
                  1 <span className="arrow_up" />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  8 <span className="arrow_down" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/img/1xbet-logo.png"
                    alt="BL"
                    style={{ maxWidth: "90px" }}
                  />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  3 <span className="arrow_up" />
                </td>
                <td>
                  1 <span className="arrow_up" />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  8 <span className="arrow_down" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/img/1xbet-logo.png"
                    alt="BL"
                    style={{ maxWidth: "90px" }}
                  />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  3 <span className="arrow_up" />
                </td>
                <td>
                  1 <span className="arrow_up" />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  8 <span className="arrow_down" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/img/1xbet-logo.png"
                    alt="BL"
                    style={{ maxWidth: "90px" }}
                  />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  3 <span className="arrow_up" />
                </td>
                <td>
                  1 <span className="arrow_up" />
                </td>
                <td>
                  2 <span className="arrow_down" />
                </td>
                <td>
                  8 <span className="arrow_down" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ODDS;
