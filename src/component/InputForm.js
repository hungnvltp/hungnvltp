import React, { Component } from 'react';
import { Form as FormInput, Field } from 'react-final-form'
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, Navbar, ButtonToolbar, Nav, Icon, Input, InputGroup } from 'rsuite';
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
                    <Form onSubmit={handleSubmit} layout="horizontal" id="formLogin">
                        <Navbar >
                            <Navbar.Header>
                                <h3 id="titleForm">Form</h3>
                            </Navbar.Header>
                            <Navbar.Body>
                                <Nav pullRight >
                                    <div className='icon-example-list' >
                                        <Icon icon='close' size="lg" onClick={this.props.deteleForm} />
                                    </div>
                                </Nav>
                            </Navbar.Body>
                        </Navbar>
                        <FormGroup className="textInput">
                            <ControlLabel>First Name :</ControlLabel>
                            <Input placeholder="Name" type="text" value={product.name} onChange={this.props.handleFormChange} />

                            <ControlLabel>Phone Number :</ControlLabel>
                            <Input placeholder="Phone Number" type="text" value={product.phoneNumber} onChange={this.props.handleFormChange} />

                            <ControlLabel>Company :</ControlLabel>
                            <Input placeholder="Company" type="text" value={product.company} onChange={this.props.handleFormChange} />

                            <ControlLabel>Position :</ControlLabel>
                            <Input placeholder="Position" type="text" value={product.positon} onChange={this.props.handleFormChange} />

                            <ControlLabel>Age :</ControlLabel>
                            <Input placeholder="Age" type="text" value={product.age} onChange={this.props.handleFormChange} />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button type="submit" appearance="primary">
                                    {(index1 || index1 === 0) ? "Upadate" : "Submit"}
                                </Button>
                                <Button type="button" appearance="primary" onClick={form.reset}>
                                    Resset
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