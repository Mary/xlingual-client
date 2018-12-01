import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { required, nonEmpty } from '../validators';
import Input from './input';
import { connect } from 'react-redux';
import { fetchBrowse, flushBrowse } from '../actions/words';
import { Link } from 'react-router-dom';

export class browseListContainer extends React.Component {
    componentDidMount() {
        return this.props.dispatch(flushBrowse());
    }

    onSubmit(value) {
        const { language } = value;
        return this.props.dispatch(fetchBrowse(language))
    }

    renderResults() {

        const listItems = this.props.words.map((word, i) =>
            <li key={i}><Link to={`/info/${word.id}`}>{word.name}</Link></li>
        );
        return (
            <div className="mylistcontainer">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="browseWordForm">
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

                    <Field
                        component={Input}
                        element="select"
                        name="language"
                        label="Language"
                        validate={[required, nonEmpty]}>
                        <option value="">Select a language...</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Arabic">Arabic</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Italian">Italian</option>
                        <option value="French">French</option>
                        <option value="other">Other Language</option>
                    </Field>

                    <button type="submit">Search</button>
                </form>
                <div className="mylistcontainer">
                    <ul>
                        {this.renderResults()}
                    </ul>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null,
    words: state.wordReducer.globalList
});
export default
    connect(mapStateToProps)
        (reduxForm({
            form: 'browselistcontainer',
            nSubmitFail: (errors, dispatch, err) => {
                console.log(err)
                dispatch(focus('browselistcontainer', Object.keys(errors)[0]))
            }
        })(browseListContainer));