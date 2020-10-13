import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product || {},
            result: "",
        }
    }
    onSubmit = values => {
        let { submitUpdate, index1 } = this.props;
        console.log(index1)
        
    }
    render() {
        let { submitUpdate, index1 } = this.props;
        return (
            <Form
                onSubmit={this.onSubmit}
                initialValues={{}}
                render={({ handleSubmit, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <label id="formTitle">Form</label><br></br>
                        <a href="!#" id="deleteForm" onClick={this.props.deteleForm}>X</a>

                        <div id="firstName">
                            <label className="textInput">First Name :</label><br></br>
                            <Field
                                className="textInput"
                                name="name"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="textInput">Phone Number :</label><br></br>
                            <Field
                                className="textInput"
                                name="phoneNumber"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="textInput">Company :</label><br></br>
                            <Field
                                className="textInput"
                                name="company"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="textInput">Position :</label><br></br>
                            <Field
                                className="textInput"
                                name="positon"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="textInput">Age :</label><br></br>
                            <Field
                                className="textInput"
                                name="age"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            />
        );
    }
}

export default InputForm;