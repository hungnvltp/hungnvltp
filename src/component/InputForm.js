import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product || {},
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.product !== prevState.product) {
            return { product: nextProps.product };
        }
        else return null;
    }

    render() {

        let { index1 } = this.props;
        let product = this.state.product
      
        return (
            <Form
                onSubmit={this.props.onSubmit}
                initialValues={product}
                render={({ handleSubmit, form, }) => (
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
                            <button type="submit"  >
                                {(index1 || index1 === 0) ? "Upadate" : "Submit"}
                            </button>
                            <button id="ddd"
                                type="button"
                                onClick={form.reset}
                            >
                                Reset
                       </button>
                        </div>
                    </form>
                )}
            />
        );
    }
}

export default InputForm;