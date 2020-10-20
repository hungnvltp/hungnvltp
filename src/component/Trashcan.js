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
    phucHoi = (index) => {
        this.props.restoreData(index)
    }
    xoaDuLieu = (index) => {

        this.props.perDeleted(index)
    }
    render() {

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
                                        data={this.props.dataTrashcan}
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
                                                {(rowData, index) => {
                                                    return (
                                                        <span>
                                                            <a onClick={() => this.phucHoi(index)}> Restore </a> |{' '}
                                                            <a onClick={() => this.xoaDuLieu(index)}> Delete </a>
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
        )
    }
}
export default Trashcan;