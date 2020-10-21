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
                }, {
                    name: "55", phoneNumber: "55", company: "555", positon: "55", age: "55"
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
            product: "",
        }
    }

    clickEdit = (index) => {
        console.log("index", index)
        this.index = index
        this.setState({
            hiddenOpen: false,
            formDangNhap: true,
            product: this.state.dataTable[index],
        })
    }

    deleteData = (index) => {
        let dataTrashcan = this.state;
        const dataTable = this.state.dataTable;
        dataTrashcan = [...this.state.dataTrashcan, dataTable[index]];
        dataTable.splice(index, 1)
        this.index = index;
        this.setState({
            dataTrashcan,
            dataTable,
            trashCan: true,
        })
    }
    deleteForm = () => {

        this.setState({
            formDangNhap: false
        })
    }
    moForm = () => {

        this.index = ""
        this.setState({
            formDangNhap: true,
            product: {
                name: "", company: "", phoneNumber: "", positon: "", age: ""
            },
            hiddenOpen: false,


        })
    }
    restoreData = (index) => {
        console.log(index)
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
    handleAllChecked = ( e) => {
        let { checkCheckbox, dataTable, dataCheckbox } = this.state;
        console.log("e.target.checked", e.target.checked)
        console.log("dataCheckbox", dataCheckbox)
        
        if (e.target.checked) {
            dataTable.forEach(element => {
                dataCheckbox.push(dataCheckbox.length)
                console.log("element", element)

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
        console.log("index", this.index)
        // checkCheckbox = e.target.checked;
        // if (checkCheckbox === true) {
        //     dataCheckbox.push(index);
        // } else {
        //     var a = dataCheckbox.findIndex((element) => this.checkCheckbox_2(element, index));
        //     dataCheckbox.splice(a, 1);
        // }
        // this.setState({
        //     dataCheckbox,
        //     checkCheckbox,
        // })
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
    onSubmit = e => {
        let { dataTable, product } = this.state
        console.log(product)
        if ((this.index || this.index === 0)) {
            dataTable[this.index] = product
            this.setState({
                formDangNhap: false,
                dataTable,
                hiddenOpen: true,
                product: {
                    name: "", company: "", phoneNumber: "", positon: "", age: ""
                },
            })
        }
        else {
            this.setState({
                hiddenOpen: true,
                dataTable: [...this.state.dataTable, product],
                formDangNhap: false,
                product: {
                    name: "", company: "", phoneNumber: "", positon: "", age: ""
                },
            })
        }
    }

    fitterData = () => {
        let result = this.state.result
        let { dataTable } = this.state;
        let sourceArray = dataTable;
        let newArray = [];
        console.log("giá trị", result.length)
        console.log("sourceArray", sourceArray)

        if (result.length == 0) {
            console.log("result bằng 0")
            newArray = sourceArray;
            console.log("sourceArray", sourceArray)
            console.log("newArray", newArray)
            dataTable = newArray
        }
        else {
            console.log("result có giá trị ")
            result.toLowerCase();
            for (let item of sourceArray) {
                item.name = item.name;
                item.phoneNumber = item.phoneNumber;
                item.positon = item.positon;
                item.company = item.company;
                item.age = item.age;
                if ((item.name.toLowerCase().indexOf(result) > -1)
                    || (item.phoneNumber.toLowerCase().indexOf(result) > -1)
                    || (item.positon.toLowerCase().indexOf(result) > -1)
                    || (item.company.toLowerCase().indexOf(result) > -1)
                    || (item.age.toLowerCase().indexOf(result) > -1)) {
                    newArray.push(item);
                    dataTable = newArray
                }
            }
        }
        if (newArray = []) {
            console.log("không có dữ liệu nào")
        }
        this.setState({
            dataTable
        });
    }
    handleFormChange = (value, e) => {
        let product = this.state.product;

        product[e.target.name] = e.target.value;
        this.setState({ product })
    }
    chanFilter = (value, e) => {
        let result = this.state.result

        this.setState(
            {
                result: e.target.value
            }
        )
    }
    render() {

        let { product, dataTable, deleteOne, allChackbox, trashCan, dataTrashcan, formDangNhap,
            dataCheckbox, hiddenOpen, result } = this.state;
        return (
            <div className="App">
                { formDangNhap && <InputFrorm
                    onSubmit={this.onSubmit}
                    index={this.index}
                    clickEdit={this.clickEdit}
                    clickUpdate={this.clickUpdate}
                    handleSubmit={this.handleSubmit}
                    product={product}
                    deteleForm={this.deleteForm}
                    handleFormChange={this.handleFormChange}
                    valueId={this.valueId}
                />}
                <TableToDo
                    clickEdit={this.clickEdit}
                    fitterData={this.fitterData}
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
                    fitterData={this.fitterData}
                    result={result}
                    chanFilter={this.chanFilter}
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