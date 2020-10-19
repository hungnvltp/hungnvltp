import React, { } from 'react';
import { Form as FormValue123, Field } from 'react-final-form'
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, Button, Container, Header, Navbar, Nav, Icon, Content, InputGroup, Table, Input } from 'rsuite';
const { Column, HeaderCell, Cell, } = Table;
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
        if (nextProps.dataTable !== prevState.dataTable) {
            return { dataTable: nextProps.dataTable };
        }
        else return null;

    }

    render() {

        let dataTable = this.state.dataTable;
        let { dataCheckbox, hiddenOpen } = this.props
        // const aa = dataTable.map((products, index) => {
        //     return <tr className="dataLists" key={index.toString()}>
        //         <td>
        //             {hiddenOpen && <input type="checkbox" checked={dataCheckbox.indexOf(index) !== -1} id="oneLine" name="oneLine" value={this.props.deleteOne} onClick={(e) => this.props.handleOneChecked(index, e)}></input>}
        //         </td>
        //         <td>{products.name}</td>
        //         <td>{products.phoneNumber}</td>
        //         <td>{products.company}</td>
        //         <td>{products.positon}</td>
        //         <td>{products.age}</td>
        //         <td >
        //             {hiddenOpen && <a href="!#" onClick={() => this.props.deleteData(index)}>Delete</a>}
        //         </td>
        //         <td >
        //             {hiddenOpen && <a href="!#" onClick={() => this.props.clickEdit(index)}>Edit</a>}
        //         </td>
        //     </tr>
        // }
        // )
        return (

            <FormValue123
                onSubmit={this.props.clickEdit}
                initialValues={{}}
                render={({ handleSubmit, form, values }) => (
                    <Form onSubmit={handleSubmit} >
                        <div className="show-fake-browser navbar-page">
                            <Container className="container">
                                <Header>
                                    <Navbar appearance="inverse">
                                        <Navbar.Header>

                                        </Navbar.Header>
                                        <Navbar.Body>
                                            <Nav>

                                                <Nav.Item icon={<Icon icon="paint-brush" />} onClick={this.props.moForm}>
                                                    Add New
                                                </Nav.Item>
                                                <Nav.Item icon={<Icon icon="trash2" />} onClick={this.props.openTrashCan} >
                                                    Trashcan
                                                </Nav.Item>

                                            </Nav>
                                            <Nav pullRight >
                                                <InputGroup id="searchData" >
                                                    <Input />
                                                    <InputGroup.Addon>
                                                        <Icon icon="search" onClick={this.props.fitterData} />
                                                    </InputGroup.Addon>
                                                </InputGroup>
                                            </Nav>
                                        </Navbar.Body>
                                    </Navbar>
                                </Header>
                                <Content>
                                    <Table
                                        height={400}
                                        data={this.state.dataTable}
                                    >
                                        <Column width={200} fixed>
                                            <HeaderCell>Name </HeaderCell>
                                            <Cell dataKey="name" />
                                        </Column>
                                        <Column width={200}>
                                            <HeaderCell>company</HeaderCell>
                                            <Cell dataKey="company" />
                                        </Column>
                                        <Column width={200}>
                                            <HeaderCell>Phone Number</HeaderCell>
                                            <Cell dataKey="phoneNumber" />
                                        </Column>
                                        <Column width={200}>
                                            <HeaderCell>Position </HeaderCell>
                                            <Cell dataKey="positon" />
                                        </Column>
                                        <Column width={200}>
                                            <HeaderCell>age</HeaderCell>
                                            <Cell dataKey="age" />
                                        </Column>
                                        <Column width={120} fixed="right">
                                            <HeaderCell>Action</HeaderCell>
                                            <Cell>
                                                {rowData => {
                                                    return (
                                                        <span>
                                                            <a onClick={this.props.clickEdit}> Edit </a>|
                                                            <a onClick={this.props.deleteData}> Remove </a>
                                                        </span>
                                                    );
                                                }}
                                            </Cell>
                                        </Column>
                                    </Table>
                                </Content>
                            </Container>
                        </div>

                        {/* <div id="menu">
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
                        </div> */}

                    </Form>
                )
                }
            />
        );
    }
}
export default TableToDo;;