import React from 'react';
import Header from './header';
import Banner from './banner';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import BrowseListContainer from './browseListContainer';

export function browsePage(props) {

    return (
        <React.Fragment>
            <Banner />

            <Header title="Browse" />
            <div className="browse">

                <BrowseListContainer />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.currentUser,
    };
};

export default requiresLogin()(connect(mapStateToProps)(browsePage));