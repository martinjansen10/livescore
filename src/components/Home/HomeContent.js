import React, { Component } from 'react';
import ads from '../../images/ads-468x60.jpg';
import lester from '../../images/icons/clubs/eng1/lester.jpg'
import mcity from '../../images/icons/clubs/eng1/manchestercity.jpg'
import chelsea from '../../images/icons/clubs/eng1/chelsea.jpg'
import mu from '../../images/icons/clubs/eng1/manchesterunited.jpg'

class HomeContent extends Component {

  state = {
    leagues: [
      {
        name: 'Premiere League',
        country: 'England',
        flag: 'flag flag-england',
      },
      {
        name: 'Serie A',
        country: 'Italy',
        flag: 'flag flag-it',
      },
      {
        name: 'Ligue 1',
        country: 'France',
        flag: 'flag flag-fr',
      },
      {
        name: 'Primera Division',
        country: 'Spain',
        flag: 'flag flag-es',
      },
    ]
  }

  render() {
    return (
      <div id="content">
        <ul className="nav nav-tabs nav-justify" role="tablist">
          <li role="presentation" className="active"><a href="#all" aria-controls="home" role="tab" data-toggle="tab">All</a></li>
          <li role="presentation"><a href="#live" aria-controls="profile" role="tab" data-toggle="tab"><span className="color-blue">Live</span> <span className="badge">8</span></a></li>
          <li role="presentation"><a href="#finished" aria-controls="messages" role="tab" data-toggle="tab">Finished</a></li>
          <li role="presentation"><a href="#scheduled" aria-controls="settings" role="tab" data-toggle="tab">Scheduled <span className="color-gray hidden-xs">matches</span></a></li>
          <button type="button" className="calendar pull-right"><span className="hidden-xs">23.08</span></button>
        </ul>
        <div className="tab-content">
          <div className="ads ads-486x60"><img src={ads} alt /></div>
          <div role="tabpanel" className="tab-pane active" id="all">
            {this.state.leagues.map((item) => ( 
            <section>
            <div className="match-league">{item.name} 
            <span className={item.flag} /> 
            <span className="league">{item.country}</span>
              <div className="hdp">
                <div className="h">H
                  <br />1</div>
                <div className="d">D
                  <br />X</div>
                <div className="p">P
                  <br />2</div>
              </div>
            </div>
            
            <div className="match-wrap">
              <div className="match" data-toggle="collapse" data-target={`#match-id-01-${item.country}`} aria-expanded="false" aria-controls={`match-id-01-${item.country}`}>
                <div className="match-date">23.08 20:45 <span className="match-finished">Finished</span></div>
                <div className="match-clubs">
                  <div className="match-club-first">
                    <div className="match-club">
                      <div className="match-club-wrap"><img src={lester} alt className="match-club-logo" /> <span className="match-club-name">Lester City</span> <span className="match-club-score visible-xs">2</span></div>
                    </div>
                  </div>
                  <div className="match-club-score hidden-xs">2 <span className="divider">:</span> <span className="match-win">3</span></div>
                  <div className="match-club-second match-win">
                    <div className="match-club">
                      <div className="match-club-wrap"><img src={mcity} alt className="match-club-logo" /> <span className="match-club-name">Manchester City</span> <span className="match-club-score visible-xs">3</span></div>
                    </div>
                  </div>
                </div>
                <div className="match-detail-button" />
                <div className="match-hdp">
                  <div className="match-h"><span>0.88</span> <span>6.40</span></div>
                  <div className="match-d"><span>-0.5/-1</span> <span>4.70</span></div>
                  <div className="match-p"><span>0.96</span> <span>1.33</span></div>
                </div>
              </div>
              <div className="match-detail collapse" id={`match-id-01-${item.country}`}>
                <div className="match-detail-odds">
                  <div className="first-odds"><span className="type-1">1</span> <span className="type-2">2</span></div><span className="total-odds">1 : 1</span>
                  <div className="second-odds"><span className="type-1">1</span></div>
                </div>
                <div className="match-detail-total-shoots"><span className="headline">Total shoots</span>
                  <div className="progress">
                    <div className="first-shoots">11</div>
                    <div className="scale">
                      <div style={{width: '60%'}} />
                      <div style={{width: '40%'}} />
                    </div>
                    <div className="second-shoots">18</div>
                  </div>
                </div>
                <div className="match-detail-possession"><span className="headline">Possession</span>
                  <div className="diargam"><span>45%</span>
                    <div className="c100 p55">
                      <div className="slice">
                        <div className="bar" />
                        <div className="fill" />
                      </div>
                    </div><span>55%</span></div>
                </div>
              </div>
            </div>
            
            <div className="match-wrap">
              <div className="match" data-toggle="collapse" data-target={`#match-id-02-${item.country}`} aria-expanded="false" aria-controls={`match-id-01-${item.country}`}>
                <div className="match-date">23.08 20:45 <span className="match-live">Live</span></div>
                <div className="match-clubs">
                  <div className="match-club-first">
                    <div className="match-club">
                      <div className="match-club-wrap"><img src={chelsea} alt className="match-club-logo" /> <span className="match-club-name">Chelsea</span> <span className="match-club-score visible-xs">0</span></div>
                    </div>
                  </div>
                  <div className="match-club-score hidden-xs">1 <span className="divider">:</span> 1</div>
                  <div className="match-club-second">
                    <div className="match-club">
                      <div className="match-club-wrap"><img src={mu} alt className="match-club-logo" /> <span className="match-club-name">Manchester United</span> <span className="match-club-score visible-xs">1</span></div>
                    </div>
                  </div>
                </div>
                <div className="match-detail-button" />
                <div className="match-hdp">
                  <div className="match-h"><span>0.88</span> <span>6.40</span></div>
                  <div className="match-d"><span>-0.5/-1</span> <span>4.70</span></div>
                  <div className="match-p"><span>0.96</span> <span>1.33</span></div>
                </div>
              </div>
              <div className="match-detail collapse" id={`match-id-02-${item.country}`}>
                <div className="match-detail-odds">
                  <div className="first-odds"><span className="type-1">1</span> <span className="type-2">2</span></div><span className="total-odds">1 : 1</span>
                  <div className="second-odds"><span className="type-1">1</span></div>
                </div>
                <div className="match-detail-total-shoots"><span className="headline">Total shoots</span>
                  <div className="progress">
                    <div className="first-shoots">11</div>
                    <div className="scale">
                      <div style={{width: '60%'}} />
                      <div style={{width: '40%'}} />
                    </div>
                    <div className="second-shoots">18</div>
                  </div>
                </div>
                <div className="match-detail-possession"><span className="headline">Possession</span>
                  <div className="diargam"><span>45%</span>
                    <div className="c100 p55">
                      <div className="slice">
                        <div className="bar" />
                        <div className="fill" />
                      </div>
                    </div><span>55%</span></div>
                </div>
              </div>
            </div>
            <div className="match-wrap">
              <div className="match" data-toggle="collapse" data-target={`#match-id-03-${item.country}`} aria-expanded="false" aria-controls={`#match-id-03-${item.country}`}>
                <div className="match-date">23.08 20:45 <span className="match-expected">1d 2h 34m</span></div>
                <div className="match-clubs">
                  <div className="match-club-first">
                    <div className="match-club">
                      <div className="match-club-wrap"><img src={lester} alt className="match-club-logo" /> <span className="match-club-name">Lester City</span> <span className="match-club-score visible-xs" /></div>
                    </div>
                  </div>
                  <div className="match-club-score hidden-xs"><span className="divider">:</span></div>
                  <div className="match-club-second">
                    <div className="match-club">
                      <div className="match-club-wrap"><img src={mcity} alt className="match-club-logo" /> <span className="match-club-name">Manchester City</span> <span className="match-club-score visible-xs" /></div>
                    </div>
                  </div>
                </div>
                <div className="match-detail-button" />
                <div className="match-hdp">
                  <div className="match-h"><span>0.88</span> <span>6.40</span></div>
                  <div className="match-d"><span>-0.5/-1</span> <span>4.70</span></div>
                  <div className="match-p"><span>0.96</span> <span>1.33</span></div>
                </div>
              </div>
              <div className="match-detail collapse" id={`match-id-03-${item.country}`}>
                <div className="match-detail-odds">
                  <div className="first-odds"><span className="type-1">1</span> <span className="type-2">2</span></div><span className="total-odds">1 : 1</span>
                  <div className="second-odds"><span className="type-1">1</span></div>
                </div>
                <div className="match-detail-total-shoots"><span className="headline">Total shoots</span>
                  <div className="progress">
                    <div className="first-shoots">11</div>
                    <div className="scale">
                      <div style={{width: '60%'}} />
                      <div style={{width: '40%'}} />
                    </div>
                    <div className="second-shoots">18</div>
                  </div>
                </div>
                <div className="match-detail-possession"><span className="headline">Possession</span>
                  <div className="diargam"><span>45%</span>
                    <div className="c100 p55">
                      <div className="slice">
                        <div className="bar" />
                        <div className="fill" />
                      </div>
                    </div><span>55%</span></div>
                </div>
              </div>
            </div>
            </section>
            ))}
          </div>
          <div role="tabpanel" className="tab-pane" id="live">...</div>
          <div role="tabpanel" className="tab-pane" id="finished">...</div>
          <div role="tabpanel" className="tab-pane" id="scheduled">...</div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
