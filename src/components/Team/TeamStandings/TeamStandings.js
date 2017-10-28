import React from "react";
import mcity from "../../../images/icons/clubs/eng1/manchestercity.jpg";
import "./LeagueStandings.css";
import goals from "../../../images/icons/goals.png";
import cup from "../../../images/icons/cup.png";

const LeagueStandings = () => {
  return (
    <div className="leagueStandings">
      <div className="leagueStandings__header">
        <span>TOURNAMENTS</span>
      </div>
      <div className="leagueStandings__menu" role="tablist">
        <a href="#overall" aria-controls="overall" role="tab" data-toggle="tab">
          OVERALL
        </a>&nbsp;&nbsp;
        <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
          HOME
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#away" aria-controls="away" role="tab" data-toggle="tab">
          AWAY
        </a>
      </div>
      <div className="tab-content" style={{ paddingTop: "7px" }}>
        <div role="tabpanel" className="tab-pane active" id="overall">
          <div className="leagueStandings__table">
            <table>
              <tbody>
                <tr style={{ color: "#b6b7b7" }}>
                  <th style={{ textAlign: "left", paddingLeft: "10px" }}>
                    TOURNAMENT
                  </th>
                  <th>#</th>
                  <th>P</th>
                  <th style={{ color: "#49aa9e" }}>W</th>
                  <th style={{ color: "#f7c70c" }}>D</th>
                  <th style={{ color: "#49aa9e" }}>L</th>
                  <th>
                    <img width="20" src={goals} alt="BL" />
                  </th>
                  <th>LAST 5</th>
                  <th>Pts</th>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img src={cup} width="25" />&nbsp;
                    <span className="hidden-xs">Premiere League</span>
                    <span className="visible-xs">MNC</span>
                  </td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>1</td>
                  <td>2</td>
                  <td>8:0</td>
                  <td className="last" align="center">
                    <span className="win-w">W</span>
                    <span className="draw-d">D</span>
                    <span className="hidden-xs lose-l">L</span>
                    <span className="hidden-xs draw-d">D</span>
                    <span className="hidden-xs win-w">W</span>
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img width="25" src={cup} />&nbsp;
                    <span className="hidden-xs">ICH Club</span>
                    <span className="visible-xs">MNC</span>
                  </td>
                  <td>3</td>
                  <td>2</td>
                  <td>3</td>
                  <td>1</td>
                  <td>2</td>
                  <td>8:0</td>
                  <td className="last" align="center">
                    <span className="win-w">W</span>
                    <span className="draw-d">D</span>
                    <span className="hidden-xs lose-l">L</span>
                    <span className="hidden-xs draw-d">D</span>
                    <span className="hidden-xs win-w">W</span>
                  </td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="home">
          HOME...
        </div>
        <div role="tabpanel" className="tab-pane" id="away">
          AWAY...
        </div>
      </div>
    </div>
  );
};

export default LeagueStandings;
