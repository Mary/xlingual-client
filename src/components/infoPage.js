import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { fetchGlobal, deleteWord } from '../actions/words';
import { Redirect } from 'react-router-dom';
import Banner from './banner';

export class infoPage extends React.Component {
    state = {
        submitted: false
    }
    componentDidMount() {
        return this.props.dispatch(fetchGlobal());
    }
    triggerDelete(id) {
        this.props.dispatch(deleteWord(id))
            .then(() => {
                this.setState({
                    submitted: true
                })
            })
    }
    render() {
        if (this.state.submitted) {
            return <Redirect to="/dashboard" />
        }
        const id = this.props.selectedWord.id;
        let deleteWordButton;
        if (this.props.selectedWord.user_Id === this.props.username.id) {
            deleteWordButton = (
                <button onClick={() => this.triggerDelete(id)}>Delete Word</button>
            );
        }
        return (
            <React.Fragment>
                <Banner />
                <Header title="Info" />
                {this.props.selectedWord &&
                    <div className="info">

                        word: <li>{this.props.selectedWord.name}</li>
                        language: <li>{this.props.selectedWord.language}</li>
                        definition: <li>{this.props.selectedWord.definition}</li>
                        {deleteWordButton}
                    </div>
                }
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, originalProps) => {
    const selectedWord = state.wordReducer.globalList.find(word => word.id === originalProps.match.params.wordId)
        || state.wordReducer.myList.find(word => word.id === originalProps.match.params.wordId)
    return {
        username: state.authReducer.currentUser,
        selectedWord
    };
};

export default connect(mapStateToProps)(infoPage);