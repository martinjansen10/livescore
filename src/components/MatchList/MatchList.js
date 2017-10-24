import React, { Component } from 'react';
import Match from './Match/Match';

import './MatchList.css';

class MatchList extends Component {
    render(){
        return( 
            <ul className="matchList">
                {
                    this.props.matches.map( (item) => { return <li key={item.id} className="matchList__listItem"><Match item={item}/></li>} )
                }
            </ul>
        )
    };
}

export default MatchList;