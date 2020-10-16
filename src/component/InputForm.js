import React, { Component } from 'react';
import { Form as FormInput, Field } from 'react-final-form'
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, TextField } from 'rsuite';
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
            <FormInput
                onSubmit={this.props.onSubmit}
                initialValues={product}
                render={({ handleSubmit, form, }) => (
                    <Form onSubmit={handleSubmit} ayout="horizontal">
                        <ControlLabel id="formTitle">Form</ControlLabel>
                        <FormGroup className="textInput">
                            <ControlLabel>First Name :</ControlLabel>
                            <FormControl name="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup className="textInput">
                            <ControlLabel>Phone Number :</ControlLabel>
                            <FormControl name="phoneNumber" placeholder="Phone Number" />
                        </FormGroup>
                        <FormGroup className="textInput">
                            <ControlLabel>Company :</ControlLabel>
                            <FormControl name="company" placeholder="Company" />
                        </FormGroup>
                        <FormGroup className="textInput">
                            <ControlLabel>Position :</ControlLabel>
                            <FormControl name="positon" placeholder="Position" />
                        </FormGroup>
                        <FormGroup className="textInput">
                            <ControlLabel>Age :</ControlLabel>
                            <FormControl name="age" placeholder="Age" />
                        </FormGroup>
                        <FormGroup className="textInput">
                            <ButtonToolbar>
                                <Button type="submit" appearance="primary">
                                    {(index1 || index1 === 0) ? "Upadate" : "Submit"}
                                </Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                )}

            />

            // <Form
            //     onSubmit={this.props.onSubmit}
            //     initialValues={product}
            //     render={({ handleSubmit, form, }) => (
            //         <form onSubmit={handleSubmit}>
            //             <label id="formTitle">Form</label><br></br>
            //             <a href="!#" id="deleteForm" onClick={this.props.deteleForm}>X</a>
            //             <div id="firstName">
            //                 <label className="textInput">First Name :</label><br></br>
            //                 <Field
            //                     className="textInput"
            //                     name="name"
            //                     component="input"
            //                     type="text"
            //                 />
            //             </div>
            //             <div>
            //                 <label className="textInput">Phone Number :</label><br></br>
            //                 <Field
            //                     className="textInput"
            //                     name="phoneNumber"
            //                     component="input"
            //                     type="text"
            //                 />
            //             </div>
            //             <div>
            //                 <label className="textInput">Company :</label><br></br>
            //                 <Field
            //                     className="textInput"
            //                     name="company"
            //                     component="input"
            //                     type="text"
            //                 />
            //             </div>
            //             <div>
            //                 <label className="textInput">Position :</label><br></br>
            //                 <Field
            //                     className="textInput"
            //                     name="positon"
            //                     component="input"
            //                     type="text"
            //                 />
            //             </div>
            //             <div>
            //                 <label className="textInput">Age :</label><br></br>
            //                 <Field
            //                     className="textInput"
            //                     name="age"
            //                     component="input"
            //                     type="text"
            //                 />
            //             </div>
            //             <div className="buttons">
            //                 <button type="submit"  >
            //                     {(index1 || index1 === 0) ? "Upadate" : "Submit"}
            //                 </button>
            //                 <button id="ddd"
            //                     type="button"
            //                     onClick={form.reset}
            //                 >
            //                     Reset
            //            </button>
            //             </div>
            //         </form>
            //     )}
            // />


        );
    }
}

export default InputForm;