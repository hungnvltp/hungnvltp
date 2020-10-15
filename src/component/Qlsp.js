import React, { } from 'react';
import InputFrorm from './InputForm';
import TitleToDo from './TitleToDo'
import TableToDo from './TableToDo'
import Trashcan from './Trashcan'
class Qlsp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: [
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
            product: {},
            hiddenOpen: true,

        }
    }
    handleSubmit = (product) => {
        this.setState({
            hiddenOpen: true,
            dataTable: [...this.state.dataTable, this.state.product],
            product: {
                name: "", company: "", phoneNumber: "", positon: "", age: ""
            },
            formDangNhap: false
        })
    };
    clickEdit = (index) => {
        this.index1 = index;
        this.setState({
            hiddenOpen: false,
            formDangNhap: true,
            product: this.state.dataTable[index],
        })
    }
    clickUpdate = (product,) => {
        let dataTable = this.state.dataTable
        dataTable[this.index1] = product
        this.setState({
            formDangNhap: false,
            dataTable: this.state.dataTable,
            hiddenOpen: true
        })
    }
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
    doSave = (index1) => {
        let product = this.state.product
        console.log(222222, index1)
        if (index1 || index1 === 0) {
            this.clickUpdate(product)

        } else {
            this.handleSubmit()

        }
    }
    handleFormChange = (e) => {
     
        let { product } = this.state;

        product[e.target.name] = e.target.value;

        this.setState({ product })
    }
    render() {
        console.log(this.state)
        let { product, dataTable, deleteOne, allChackbox, trashCan, dataTrashcan, formDangNhap,
            fitterData, inputUpdate, inputSubmit, dataCheckbox, submitUpdate,
            hiddenOpen, } = this.state;
        return (
            <div className="App">
                <TitleToDo />
                {formDangNhap && <InputFrorm
                    submit={this.handleSubmit}
                    product={product}
                    update={this.clickUpdate}
                    deteleForm={this.deteleForm}
                    inputUpdate={inputUpdate}
                    inputSubmit={inputSubmit}
                    dataTable={dataTable}
                    moForm={this.moForm}
                    clickEdit={this.clickEdit}
                    doSave={this.doSave}
                    submitUpdate={submitUpdate}
                    index1={this.index1}
                    handleFormChange={this.handleFormChange}
                />}
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


