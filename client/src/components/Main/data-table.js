import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id.Q3}
                </td>
                <td>
                    {this.props.obj.count}
                </td>
                <td>
                    {this.props.obj.Q3}
                </td>
                <td>
                    {this.props.obj.Q4}
                </td>
                <td>
                    {this.props.obj.Q5}
                </td>
                <td>
                    {this.props.obj.Q6}
                </td>
                <td>
                    {this.props.obj.Q7}
                </td>
                <td>
                    {this.props.obj.Q8}
                </td>
            </tr>
        );
    }
}

export default DataTable;