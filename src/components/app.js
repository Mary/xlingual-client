import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import LandingPage from './landingPage';
import Dashboard from './dashboard';
import SignUpPage from './signUpPage';
import LogInPage from './logInPage';
import AddWordPage from './addWordPage';
import MyListPage from './myListPage';
import BrowsePage from './browsePage';
import InfoPage from './infoPage';


import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {

            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {

            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/sign-up" component={SignUpPage} />
                <Route exact path="/login" component={LogInPage} />
                <Route exact path="/add-word" component={AddWordPage} />
                <Route exact path="/my-list" component={MyListPage} />
                <Route exact path="/browse" component={BrowsePage} />
                <Route exact path="/info/:wordId" component={InfoPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.authToken !== null,
    loggedIn: state.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));