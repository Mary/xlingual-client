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

            <img class="logo" src={Logo} />
            <div className="landing-page">
                <h2>Welcome xlingual</h2>
                <i>The Global Dictionary</i><br>
                </br>
                <div className="desc">
                    How to use:<br></br>

                    1. Add words to your private list. <br></br>
                    2. Make words Global so others can access them. <br></br>
                    3. Browse other's Global words
        </div>
                <br></br>
                <div>
                    <Link className="black-button" to="/sign-up">Sign Up</Link>
                </div>
                <div>
                    <Link className="black-button" to="/login">Login</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);