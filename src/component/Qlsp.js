import React, { } from 'react';
import InputFrorm from './InputForm';
import TableToDo from './TableToDo'
import Trashcan from './Trashcan'
class Qlsp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: [
                {
                    name: "333", phoneNumber: "333", company: "333", positon: "333", age: "333"
                }
            ],
            dataTrashcan: [],
            dataCheckbox: [],
            submit: false,
            update: false,
            result: "",
            trashCan: false,
            deleteAll: false,
            allChackbox: true,
            checkCheckbox: false,
            formDangNhap: false,
            submitUpdate: true,
            hiddenOpen: true,

        }
    }
    // handleSubmit = (values) => {
    //     this.setState({
    //         hiddenOpen: true,
    //         dataTable: [...this.state.dataTable, values],
    //         formDangNhap: false,
    //         product: {
    //             name: "", company: "", phoneNumber: "", positon: "", age: ""
    //         },
    //     })

    // };
    clickEdit = (index,) => {

        this.index1 = index;
        this.setState({
            hiddenOpen: false,
            formDangNhap: true,
            product: this.state.dataTable[index],
        })
    }
    // clickUpdate = (values,) => {

    //     let dataTable = this.state.dataTable
    //     dataTable[this.index1] = values
    //     this.setState({
    //         formDangNhap: false,
    //         dataTable: this.state.dataTable,
    //         hiddenOpen: true,
    //         product: {
    //             name: "", company: "", phoneNumber: "", positon: "", age: ""
    //         },
    //     })
    // }
    deleteData = (index) => {
        let dataTrashcan = this.state;
        const dataTable = this.state.dataTable;
        dataTrashcan = [...this.state.dataTrashcan, dataTable[index]];
        dataTable.splice(index, 1)
        this.index1 = index;
        this.setState({
            dataTrashcan,
            dataTable,
            trashCan: true,
        })
    }
    deteleForm = (e) => {
        this.setState({
            formDangNhap: false
        })
    }
    moForm = () => {
        this.index1 = ""
        this.setState({
            formDangNhap: true,
            product: {
                name: "", company: "", phoneNumber: "", positon: "", age: ""
            },
            hiddenOpen: false
        })
    }
    restoreData = (index) => {
        let dataTable = this.state.dataTable
        let dataTrashcan = this.state.dataTrashcan;
        dataTable.splice(this.index1, 0, this.state.dataTrashcan[index])
        dataTrashcan.splice(index, 1)
        this.setState({
            dataTable,
        })
    }
    perDeleted = (index) => {
        const dataTrashcan = this.state.dataTrashcan;
        dataTrashcan.splice(index, 1)
        this.setState({
            dataTrashcan,
        })
    }
    hidden = () => {
        this.setState({
            trashCan: false,
        })
    }
    openTrashCan = () => {
        this.setState({
            trashCan: true
        })
    }
    handleAllChecked = (e) => {
        let { checkCheckbox, dataTable, dataCheckbox } = this.state;
        if (e.target.checked) {
            dataTable.forEach(element => {
                dataCheckbox.push(dataCheckbox.length)
            });
        } else {
            dataCheckbox = []
        }
        this.setState({
            dataCheckbox,
        })
    }
    checkCheckbox_2 = (el, index) => {
        return el === index;
    }
    handleOneChecked = (index, e) => {
        let { dataCheckbox, checkCheckbox } = this.state
        this.index = index;
        checkCheckbox = e.target.checked;
        if (checkCheckbox === true) {
            dataCheckbox.push(index);
        } else {
            var a = dataCheckbox.findIndex((element) => this.checkCheckbox_2(element, index));
            dataCheckbox.splice(a, 1);
        }
        this.setState({
            dataCheckbox,
            checkCheckbox,
        })
    }
    deleteAll = () => {
        let { dataTable, dataCheckbox, allChackbox, dataTrashcan } = this.state;
        if (this.state.checkCheckbox === true) {
            dataCheckbox = dataCheckbox.sort((a, b) => b - a);
            dataCheckbox.forEach(element => {
                dataTrashcan.push(dataTable[element]);
                dataTable.splice(element, 1);
            })
        }
        else if (allChackbox) {
            dataCheckbox.forEach(element => {
                dataTrashcan.push(dataTable[element]);
            })
            dataTable = [];
        }
        else {
            return;
        }
        this.setState({
            checkCheckbox: false,
            dataCheckbox: [],
            dataTable,
            trashCan: true,
            dataTrashcan

        })
    }
    onSubmit = values => {
        let dataTable = this.state.dataTable
        if ((this.index1 || this.index1 === 0)) {
            dataTable[this.index1] = values
            this.setState({
                formDangNhap: false,
                dataTable: this.state.dataTable,
                hiddenOpen: true,
                product: {
                    name: "", company: "", phoneNumber: "", positon: "", age: ""
                },
            })
        }
        else {
            this.setState({
                hiddenOpen: true,
                dataTable: [...this.state.dataTable, values],
                formDangNhap: false,
                product: {
                    name: "", company: "", phoneNumber: "", positon: "", age: ""
                },
            })
        }
    }
    render() {
        let { product, dataTable, deleteOne, allChackbox, trashCan, dataTrashcan, formDangNhap,
            fitterData, dataCheckbox, hiddenOpen, } = this.state;
        return (
            <div className="App">


                <InputFrorm
                    onSubmit={this.onSubmit}
                    index1={this.index1}
                    clickEdit={this.clickEdit}
                    clickUpdate={this.clickUpdate}
                    handleSubmit={this.handleSubmit}
                    product={product}
                />
                <TableToDo
                    clickEdit={this.clickEdit}
                    fitterData={fitterData}
                    dataTable={dataTable}
                    moForm={this.moForm}
                    deleteData={this.deleteData}
                    deleteAll={this.deleteAll}
                    openTrashCan={this.openTrashCan}
                    handleAllChecked={this.handleAllChecked}
                    deleteOne={deleteOne}
                    allChackbox={allChackbox}
                    handleOneChecked={this.handleOneChecked}
                    checkCheckbox_2={this.checkCheckbox_2}
                    dataCheckbox={dataCheckbox}
                    hiddenOpen={hiddenOpen}

                />
                {trashCan && <Trashcan
                    dataTrashcan={dataTrashcan}
                    restoreData={this.restoreData}
                    perDeleted={this.perDeleted}
                    hidden={this.hidden}
                />}
            </div>
        );
    }
}
export default Qlsp;