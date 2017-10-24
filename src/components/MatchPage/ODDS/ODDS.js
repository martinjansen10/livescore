import React, { Component } from 'react';
import './ODDS.css';

class ODDS extends Component {
  render() {
    return (
      <div>
        <div className="odds__table">
          <table>
            <tr style={{ color: '#b6b7b7' }}>
              <th>#</th>
              <th>TEAM</th>
              <th>MP</th>
              <th style={{ color: '#49aa9e' }}>W</th>
              <th style={{ color: '#f7c70c' }}>D</th>
              <th style={{ color: '#49aa9e' }}>L</th>
              <th>
                <img src="img/ball.png" alt="BL" />
              </th>
              <th>LAST 5</th>
              <th>Pts</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Manchester City</td>
              <td>2</td>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>8:0</td>
              <td className="last" align="center">
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>D</span>
                <span>W</span>
              </td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Manchester City</td>
              <td>2</td>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>8:0</td>
              <td className="last" align="center">
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>D</span>
                <span>W</span>
              </td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Manchester City</td>
              <td>2</td>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>8:0</td>
              <td className="last" align="center">
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>D</span>
                <span>W</span>
              </td>
              <td>6</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ODDS;
