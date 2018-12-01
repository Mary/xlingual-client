import React from 'react';
import Header from './header';
import Banner from './banner';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

import AddWordForm from './addWordForm';

export function addWordPage(props) {

    return (
        <React.Fragment>
                        <Banner/>
            <Header title="Add Word +" />
            <div className="addword">
                <AddWordForm />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.currentUser,
    };
};

export default requiresLogin()(connect(mapStateToProps)(addWordPage));


