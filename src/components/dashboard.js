import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import Footer from './footer';
import Logo from '../logo.png';


export function Dashboard(props) {

    return (
        <React.Fragment>
            <img class="logo" src={Logo}/>
            <div className="dashboard">
            
                
                <Link className="black-button" to="/add-word"><i className="fas fa-plus-square"></i>  Add Word</Link>
                <Link className="black-button" to="/my-list"><i className="fas fa-list-alt"></i>My List</Link>
                <Link className="black-button" to="/browse"><i className="fas fa-search"></i>Browse</Link>
            </div>
            <Footer { ...props}/>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.currentUser,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));