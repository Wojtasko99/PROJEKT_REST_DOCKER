import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import styles from "./styles.module.css"
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
}
const handleForm = () => {
    window.location = "/form"
}
const handleReset = () => {
    window.location = "/form"
}

const handleExport = () => {
    window.location = "/export"
}

const handleMain = () => {
    window.location = "/"
}
export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/forms/fetchData")
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (


            <div className="wrapper-users">
                <nav className={styles.navbar}>
                    <a href="#" onClick={handleMain}><h1>Projekt</h1></a>
                    <div className={StyleSheet.navbar_buttons}>
                        <button className={styles.white_btn} onClick={handleForm}>
                            Formularz
                        </button>
                        <button className={styles.white_btn} onClick={handleExport}>
                            Export JSON
                        </button>
                        <button className={styles.white_btn} onClick={handleLogout}>
                            Logout
                        </button>

                    </div>
                </nav>
                <div className="container">
                    <form>
                    <select name="select" required>
                        <option value="languages">Most popular languages i regions of world.</option>
                        <option value="languages_age">Most popular languages based on the age.</option>
                        <option value="languages_degree">Most popular languages based on degree.</option>
                    </select>
                    </form>
                    <Table striped bordered hover size="sm">
                        <thead className="thead-dark">
                            <tr>
                                <th>Region</th>
                                <th>Language</th>
                                <th>Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}