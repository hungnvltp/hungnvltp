import React, { } from 'react';
import { Form, Field } from 'react-final-form'
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

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("nextProps.dataTable", nextProps.dataTable)
        console.log("prevState.dataTable", prevState.dataTable)

        if (nextProps.dataTable !== prevState.dataTable) {
            return { dataTable: nextProps.dataTable };
        }
        else return null;

    }
    search = (e) => {
        this.setState(
            {
                result: e.target.value
            }
        )
    }
    fitterData = () => {
        const dataTable = this.state.dataTable;
        const result = this.state.result;
        let sourceArray = dataTable;
        let newArray = [];
        if (result.length <= 0) {
            newArray = sourceArray;
        } else {
            result.toLowerCase();
            for (let item of sourceArray) {
                item.name = item.name || "";
                item.phoneNumber = item.phoneNumber || "";
                item.positon = item.positon || "";
                item.company = item.company || "";
                item.age = item.age || "";
                if ((item.name.toLowerCase().indexOf(result) > -1) || (item.phoneNumber.toLowerCase().indexOf(result) > -1)
                    || (item.positon.toLowerCase().indexOf(result) > -1) || (item.company.toLowerCase().indexOf(result) > -1)
                    || (item.age.toLowerCase().indexOf(result) > -1)) {
                    newArray.push(item);
                }
            }
        }
        this.setState({
            dataTable: newArray,
            result: result
        });
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
            <div className="App">
                <div className="table">
                    <div id="menu">
                        <div id="tieuDe">Data List</div>
                        <button type="submit" className="add" onClick={this.props.moForm}>Add  New</button>
                        {hiddenOpen && <button type="submit" className="open" onClick={this.props.openTrashCan}>Open TrashCan</button>}
                        {hiddenOpen && <input type="text" className="timkiem" placeholder="Search...." value={this.state.result} onChange={this.search} />}
                        {hiddenOpen && <input type="button" className="buttonTimkiem" onClick={this.fitterData} value="Search"></input>}
                        {/* <Form
                            onSubmit={this.props.onSubmit}
                        /> */}


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

                                {/* <p >
                                    Bạn đang xem đến trang
                                    </p> */}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div >

        );
    }
}
export default TableToDo;;