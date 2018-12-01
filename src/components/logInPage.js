import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './header';
import Banner from './banner';
import LogInForm from './logInForm';

export function LogInPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <React.Fragment>
            <Banner/>
            <Header title="Log In"/>
            <div className="loginpage">
                <LogInForm />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return ({
    loggedIn: state.authReducer.currentUser !== null
});}

export default connect(mapStateToProps)(LogInPage);
