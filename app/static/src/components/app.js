import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './header/header';
import Employees from './employees/employees';
import Modal from './modals/modal';

const getRouteComp = props => (
    <div>
        <Header />
        <Employees filter={props.match.params.filter} />
    </div>
);

export default class App extends Component {
    componentWillUpdate(nextProps) {
        const { location } = this.props;
        if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
            this.lastLocation = this.props.location;
        }
    }

    lastLocation = this.props.location;

    render() {
        const { location } = this.props;
        const isModal = !!(location.state && location.state.modal
            && this.lastLocation !== location);
        return (
            <div>
                <Switch location={isModal ? this.lastLocation : location}>
                    <Route path="/employee/:id" component={Modal} />
                    <Route
                      path="/:filter"
                      render={getRouteComp}
                    />
                    <Redirect from="/" to="/in" />
                </Switch>
                {isModal && <Route path="/employee/:id" component={Modal} />}
            </div>
        );
    }
}
