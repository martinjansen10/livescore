import React from "react";
import mcity from "../../images/icons/clubs/eng1/manchestercity.jpg";
import che from "../../images/icons/clubs/eng1/chelsea.jpg";
import goals from "../../images/icons/goals.png";
import cup from "../../images/icons/cup.png";

const TransferList = () => {
  return (
    <div className="leagueStandings">
      <div className="leagueStandings__header">
        <span>TRANSFERS</span>
      </div>
      <br />
      <div className="leagueStandings__table">
        <table>
          <tbody>
            <tr style={{ color: "#b6b7b7" }}>
              <th />
              <th>DATE</th>
              <th>FROM</th>
              <th>TO</th>
              <th>MV</th>
            </tr>
            <tr>
              <td>17/18</td>
              <td>4.5.2017</td>
              <td>
                <img src={mcity} />&nbsp;
                <span className="hidden-xs">Manchester City</span>
                <span className="visible-xs">MNC</span>
              </td>
              <td>
                <img src={che} />&nbsp;
                <span className="hidden-xs">Chelsea</span>
                <span className="visible-xs">CHE</span>
              </td>
              <td style={{ color: "#49aa9e" }}>22,00 Mill &euro;</td>
            </tr>
            <tr>
              <td>17/18</td>
              <td>4.5.2017</td>
              <td>
                <img src={mcity} />&nbsp;
                <span className="hidden-xs">Manchester City</span>
                <span className="visible-xs">MNC</span>
              </td>
              <td>
                <img src={che} />&nbsp;
                <span className="hidden-xs">Chelsea</span>
                <span className="visible-xs">CHE</span>
              </td>
              <td style={{ color: "#49aa9e" }}>22,00 Mill &euro;</td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                Total transfer proceed:
              </td>
              <td style={{ color: "#49aa9e" }}>22,00 Mill &euro;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransferList;
