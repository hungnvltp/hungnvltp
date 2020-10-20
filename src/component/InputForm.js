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
        let { index } = this.props;
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
                            <Input placeholder="Name" name="name" type="text" value={product.name} onChange={(value, e) => this.props.handleFormChange(value, e)} />
                            <ControlLabel>Phone Number :</ControlLabel>
                            <Input placeholder="Phone Number" name="phoneNumber" type="text" value={product.phoneNumber} onChange={(value, e) => this.props.handleFormChange(value, e)} />
                            <ControlLabel>Company :</ControlLabel>
                            <Input placeholder="Company" name="company" type="text" value={product.company} onChange={(value, e) => this.props.handleFormChange(value, e)} />
                            <ControlLabel>Position :</ControlLabel>
                            <Input placeholder="Position" name="positon" type="text" value={product.positon} onChange={(value, e) => this.props.handleFormChange(value, e)} />
                            <ControlLabel>Age :</ControlLabel>
                            <Input placeholder="Age" name="age" type="text" value={product.age} onChange={(value, e) => this.props.handleFormChange(value, e)} />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button type="submit" appearance="primary">
                                    {(index || index === 0) ? "Upadate" : "Submit"}
                                </Button>
                                <Button type="button" appearance="primary" onClick={form.reset}>
                                    Resset
                                </Button>
                            </ButtonToolbar>
                        </FormGroup>

                    </Form>
                )}

            />




        );
    }
}

export default InputForm;