import React from 'react';
import {connect} from 'react-redux';
import {clearAuthToken} from '../local-storage';


export class Delete extends React.Component {
    logOut() {
        this.props.dispatch(deleteWord(id));
        clearAuthToken();
            this.props.history.push('/');
        
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}><i className="fas fa-sign-out-alt"></i>Log out</button>
            );
        }
        return (
            <div className="footer">
            <span>footer</span>
            <br />
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null
});

export default connect(mapStateToProps)(Footer);