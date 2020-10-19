import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Form as FormTran } from 'react-final-form'
import { Form, Button, Container, Header, Navbar, Nav, Icon, Dropdown, Content, FormControl, Table } from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;
class Trashcan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTrashcan: props.dataTrashcan,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.dataTrashcan !== prevState.dataTrashcan) {
            return { dataTrashcan: nextProps.dataTrashcan };
        }
        else return null;
    }
    onSubmit = () => {

    }
    render() {
        // let dataTrashCan = this.state.dataTrashcan
        // const listDada = dataTrashCan.map((data, index) => {
        //     return <tr key={index.toString()} >
        //         <td>{data.name}</td>
        //         <td>{data.phoneNumber}</td>
        //         <td>{data.company}</td>
        //         <td>{data.positon}</td>
        //         <td>{data.age}</td>
        //         <td >
        //             <a href="!#" onClick={() => this.props.restoreData(index)}>Restore</a>
        //         </td>
        //         <td >
        //             <a href="!#" onClick={() => this.props.perDeleted(index)}>Deleted</a>
        //         </td>
        //     </tr>
        // })
        return (
            <FormTran
                onSubmit={this.onSubmit}
                initialValues={{}}
                render={({ handleSubmit, form, values }) => (
                    <Form onSubmit={handleSubmit} >
                        <div className="show-fake-browser navbar-page">
                            <Container className="container_s">
                                <Header>
                                    <Navbar appearance="inverse">
                                        <Navbar.Header>

                                        </Navbar.Header>
                                        <Navbar.Body>
                                            <Nav>

                                                <Nav.Item icon={<Icon icon="trash2" />} >
                                                    Trash
                                                </Nav.Item>

                                            </Nav>
                                            <Nav pullRight>

                                                <div className='icon-example-list' >
                                                    <Icon icon='close' size="lg" onClick={this.props.hidden} />
                                                </div>
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
                                                    function handleAction() {
                                                        alert(`name :${rowData.name}`);
                                                    }
                                                    return (
                                                        <span>
                                                            <a onClick={handleAction}> Restore </a> |{' '}
                                                            <a onClick={handleAction}> Delete </a>
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
            // <div className="trashCan" >
            //     <div className="trashCanMenu">
            //         <div id="nameMenu">Trashcan</div>
            //         <button type="submit" className="hidden" onClick={this.props.hidden}>Hidden</button>
            //     </div>
            //     <div className="trashCanList">
            //         <table id="tableTrashCan" cellPadding={20} border={0}>
            //             <thead>
            //                 <tr>
            //                     <th>Name</th>
            //                     <th>phoneNumber</th>
            //                     <th>Company</th>
            //                     <th>Position</th>
            //                     <th>Age</th>
            //                     <th width="60px" >restore</th>
            //                     <th width="60px">Delete</th>
            //                 </tr>
            //             </thead>
            //             <tbody>
            //                 {listDada}
            //             </tbody>
            //         </table>
            //     </div>
            // </div>
        )
    }
}
export default Trashcan;