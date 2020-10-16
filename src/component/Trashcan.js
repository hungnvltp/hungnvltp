import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
class Trashcan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTrashcan: props.dataTrashcan,
        }
    }
    // componentWillReceiveProps = (nextProps) => {
    //     this.setState({
    //         dataTrashcan: nextProps.dataTrashcan || {}
    //     })
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.dataTrashcan !== prevState.dataTrashcan) {
            return { dataTrashcan: nextProps.dataTrashcan };
        }
        else return null;
    }
    render() {
        let dataTrashCan = this.state.dataTrashcan
        const listDada = dataTrashCan.map((data, index) => {
            return <tr key={index.toString()} >
                <td>{data.name}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.company}</td>
                <td>{data.positon}</td>
                <td>{data.age}</td>
                <td >
                    <a href="!#" onClick={() => this.props.restoreData(index)}>Restore</a>
                </td>
                <td >
                    <a href="!#" onClick={() => this.props.perDeleted(index)}>Deleted</a>
                </td>
            </tr>
        })
        return (
            <div className="trashCan" >
                <div className="trashCanMenu">
                    <div id="nameMenu">Trashcan</div>
                    <button type="submit" className="hidden" onClick={this.props.hidden}>Hidden</button>
                </div>
                <div className="trashCanList">
                    <table id="tableTrashCan" cellPadding={20} border={0}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>phoneNumber</th>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Age</th>
                                <th width="60px" >restore</th>
                                <th width="60px">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listDada}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Trashcan;