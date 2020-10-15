import React, { Component } from 'react';

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
        let { index1 } = this.props
        let product = this.state.product;
        console.log(333333, product)
        return (
            <form id="FormLogin" >
                <h1 className="aa">Form</h1>
                <a href="!#" id="deleteForm" onClick={this.props.deteleForm}>X</a>
                <label className="aa" for="fname">First name:</label><br></br>
                <input className="aa" type="text" name="name" value={product.name} onChange={this.props.handleFormChange} /><br></br>
                <label className="aa">Phone number</label>:<br></br>
                <input className="aa" type="number" name="phoneNumber" value={product.phoneNumber} onChange={this.props.handleFormChange} /><br></br>
                <label className="aa">Company</label><br></br>
                <input className="aa" type="text" name="company" value={product.company} onChange={this.props.handleFormChange} /><br></br>
                <label className="aa"> Position</label><br></br>
                <input className="aa" type="text" name="positon" value={product.positon} onChange={this.props.handleFormChange} /><br></br>
                <label className="aa">Age</label><br></br>
                <input className="aa" type="number" name="age" value={product.age} onChange={this.props.handleFormChange} /><br></br><br></br>
                <input className="aa" type="submit" value={(index1 || index1 === 0) ? "Upadate" : "Submit"} onClick={() => this.props.doSave(index1)} />
            </form>);
    }
}

export default InputForm;