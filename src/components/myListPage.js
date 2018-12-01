import React from 'react';
import Header from './header';
import Banner from './banner';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';
import MyListContainer from './myListContainer';

export function MyListPage(props) {

    return (
        <React.Fragment>
            <Banner />
            <Header title="My-List" />
            <div className="mylist">
                <Link className="black-button" to="/add-word"><i className="fas fa-plus-square"></i>Add Word</Link>
                <MyListContainer {...props} />
                <Link className="black-button" to="/browse"><i className="fas fa-search"></i>Browse</Link>
            </div>

        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.currentUser,
    };
};

export default requiresLogin()(connect(mapStateToProps)(MyListPage));