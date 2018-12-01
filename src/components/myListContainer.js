import React from 'react';
import { connect } from 'react-redux';
import { fetchMyList } from '../actions/words';
import { Link } from 'react-router-dom';



export class MyListContainer extends React.Component {
    componentDidMount() {
        return this.props.dispatch(fetchMyList());
    }

    render() {
        const listItems = this.props.words.map((word, i) => <li key={i}><Link to={`/info/${word.id}`}>{word.name}</Link></li>);
        return (
            <div className="mylistcontainer">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null,
    words: state.wordReducer.myList
});

export default connect(mapStateToProps)(MyListContainer);