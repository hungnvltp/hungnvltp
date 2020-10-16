import React, { } from 'react';
import { Form, Field } from 'react-final-form'
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
class TableToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            formDangNhap: false,
            submit: false,
            update: false,
            dataTable: props.dataTable || {},
            oneLine: props.dataTable || {},
        }
    }
    // componentWillReceiveProps = (nextProps) => {
    //     console.log("nexpops", nextProps)
    //     this.setState({
    //         dataTable: nextProps.dataTable || {}
    //     })

    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.dataTable !== prevState.dataTable) {
            return { dataTable: nextProps.dataTable };
        }
        else return null;

    }

    render() {

        let dataTable = this.state.dataTable;
        let { dataCheckbox, hiddenOpen } = this.props
        const aa = dataTable.map((products, index) => {
            return <tr className="dataLists" key={index.toString()}>
                <td>
                    {hiddenOpen && <input type="checkbox" checked={dataCheckbox.indexOf(index) !== -1} id="oneLine" name="oneLine" value={this.props.deleteOne} onClick={(e) => this.props.handleOneChecked(index, e)}></input>}
                </td>
                <td>{products.name}</td>
                <td>{products.phoneNumber}</td>
                <td>{products.company}</td>
                <td>{products.positon}</td>
                <td>{products.age}</td>
                <td >
                    {hiddenOpen && <a href="!#" onClick={() => this.props.deleteData(index)}>Delete</a>}
                </td>
                <td >
                    {hiddenOpen && <a href="!#" onClick={() => this.props.clickEdit(index)}>Edit</a>}
                </td>
            </tr>
        }
        )
        return (

            <Form
                onSubmit={this.props.fitterData}
                initialValues={{}}
                render={({ handleSubmit, form, values }) => (
                    <form onSubmit={handleSubmit} id="formTable">


                        <div id="menu">
                            <div id="tieuDe">Data List</div>
                            <button type="submit" className="add" onClick={this.props.moForm}>Add  New</button>
                            {hiddenOpen && <button type="submit" className="open" onClick={this.props.openTrashCan}>Open TrashCan</button>}
                            {hiddenOpen && <Field
                                id="timkiem"
                                name="search"
                                component="input"
                                type="text"
                                placeholder="search"
                            />}

                            {hiddenOpen && <button type="submit" className="buttonTimkiem" >
                                Search
                            </button>}
                        </div>
                        <div id="thongtin">
                            <table id="idTable" cellPadding={20} border={0}>
                                <thead>
                                    <tr>
                                        <th>
                                            {hiddenOpen && <input type="checkbox" onClick={this.props.handleAllChecked} id="all" name="all" value={this.props.allChackbox}></input>}
                                            {hiddenOpen && <label > All</label>}
                                        </th>
                                        <th>Name</th>
                                        <th>phoneNumber</th>
                                        <th>Company</th>
                                        <th>Position</th>
                                        <th>Age</th>
                                        {hiddenOpen && <th width="60px">Delete</th>}
                                        {hiddenOpen && <th width="60px" >Edit</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {aa}
                                    {hiddenOpen && <button type="submit" className="deleteAll" onClick={this.props.deleteAll}>Delete All</button>}


                                </tbody>
                            </table>
                        </div>

                    </form>
                )}
            />
        );
    }
}
export default TableToDo;;