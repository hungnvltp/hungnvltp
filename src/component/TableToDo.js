import React, { } from 'react';
import { Form as FormValue123, Field } from 'react-final-form'
import 'rsuite/dist/styles/rsuite-default.css';
import {
    Form, Button, Container, Header, Navbar, Nav, Icon, Content, InputGroup, Table, Input,
    Checkbox,
} from 'rsuite';
const { Column, HeaderCell, Cell } = Table;
const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
    <Cell {...props} style={{ padding: 0 }}>
        <div style={{ lineHeight: '46px' }}>
            <Checkbox
                value={rowData[dataKey]}
                inline
                onChange={onChange}
                checked={checkedKeys.some(item => item === rowData[dataKey])}
            />
        </div>
    </Cell>
);
class TableToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // result: props.result ,
            formDangNhap: false,
            submit: false,
            update: false,
            dataTable: props.dataTable || {},
            oneLine: props.dataTable || {},
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.dataTable !== prevState.dataTable) {
            return {
                dataTable: nextProps.dataTable,
            };
        }
        else return null;

    }
    handleAction = (index) => {
        console.log('index :', index)
        this.props.clickEdit(index)
    }
    deleteValue = (index) => {
        this.props.deleteData(index)
    }
    onSubmit = () => {
    }
    fitterData = () => {
        this.props.fitterData()
    }
    handleCheckAll(value, checked) {

    }
    handleCheck = () => {

    }

    render() {
        let checked = false;
        let indeterminate = false;
        let { dataCheckbox } = this.props
        let checkedKeys = [];
        return (
            < FormValue123
                onSubmit={this.onSubmit}
                initialValues={{}
                }
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
                                                    <Input value={this.props.result} name="result" onChange={(value, e) => this.props.chanFilter(value, e)} />
                                                    <InputGroup.Addon>
                                                        <Icon icon="search" onClick={this.fitterData} />
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
                                        <Column width={50} align="center">
                                            <HeaderCell style={{ padding: 0 }}>
                                                <div style={{ lineHeight: '40px' }}>
                                                    <Checkbox
                                                        inline
                                                        checked={checked}
                                                        indeterminate={indeterminate}
                                                        onChange={this.handleCheckAll}
                                                    />
                                                </div>
                                            </HeaderCell>
                                            <CheckCell
                                                dataKey="id"
                                                checkedKeys={checkedKeys}
                                                onChange={this.handleCheck}
                                            />
                                        </Column>

                                        <Column width={200} >
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
                                                {(rowData, index) => {
                                                    this.index = index
                                                    return (
                                                        <span>
                                                            <a onClick={() => this.handleAction(index)}> Edit </a>|
                                                            <a onClick={() => this.deleteValue(index)}> Remove </a>
                                                        </span>
                                                    );
                                                }}
                                            </Cell>
                                        </Column>

                                    </Table>
                                </Content>
                            </Container>
                        </div>
                    </Form>
                )
                }
            />
        );
    }
}
export default TableToDo;;