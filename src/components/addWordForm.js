import React from 'react';
import { reduxForm, Field, focus, reset } from 'redux-form';
import { required, nonEmpty, isTrimmed } from '../validators';
import Input from './input';
import {addWord} from '../actions/words';

export class addWordForm extends React.Component {
    onSubmit(values) {
        const {name, language, definition, global} = values;
     console.log(values)
        return this.props.dispatch(addWord(name, language, definition, global))
        .then(()=>this.props.dispatch(reset('addWord')))
    }

        render() {
            return (
                <div className="addWordForm">
                    <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        <Field
                            component={Input}
                            name="name"
                            label="Word"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
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
                            <option value="other">Other (Please include below)</option>
                        </Field>

                        <Field
                            component={Input}
                            element="textarea"
                            name="definition"
                            label="Definition (optional)"
                        />

                        <Field
                            component={Input}
                            type="checkbox"
                            name="global"
                            label="Make Global"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        }
    }


export default reduxForm({
    form: 'addWord',
    onSubmitFail: (errors, dispatch, err) =>{
        console.log(err)
        dispatch(focus('addword', Object.keys(errors)[0]))
    }
})(addWordForm);