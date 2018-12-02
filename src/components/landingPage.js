import React from 'react';
import { connect } from 'react-redux';
import {
    Link,
    Redirect
} from 'react-router-dom';
import Logo from '../logo.png';


export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <React.Fragment>
       
            <div className="landing-page">
            <img className="logo" src={Logo} />
               
                <i>The Global Dictionary</i><br>
                </br>
                <div className="desc">
                    How to use:<br></br>

                    1. Add words to your private list. <br></br>
                    2. Make words Global so others can access them. <br></br>
                    3. Browse other's Global words
                 </div>
                <br></br>
                <Link className="black-button" to="/sign-up">Sign Up</Link>
                <Link className="black-button" to="/login">Login</Link>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);