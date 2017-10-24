import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Match from './Match';

export default class Routes extends Component {

	render() {
		const { appState } = this.props;
		return (
			<div className="wrapper">
			<Switch>
				<Route exact path={"/"} component={({match}) => <Home />}/>
				<Route exact path={"/match"} component={({match}) => <Match />}/>
			</Switch>
			</div>
		);
	}
}
