import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.Q1}
                </td>
                <td>
                    {this.props.obj.Q2}
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