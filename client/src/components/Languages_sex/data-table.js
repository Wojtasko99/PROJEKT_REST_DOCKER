import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id.Q1}
                </td>
                <td>
                    {this.props.obj.Q8}
                </td>
                <td>
                    {this.props.obj.count}
                </td>
            </tr>
        );
    }
}

export default DataTable;