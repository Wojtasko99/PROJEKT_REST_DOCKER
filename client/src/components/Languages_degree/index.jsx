import React, { Component, useState } from 'react';
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

const handleMain = () => {
    window.location = "/"
}

const handleExportAll = async (e) => {
    console.log("export data")
    e.preventDefault()
    try {
        const url = "http://localhost:8080/api/saveFile"
        await axios.post(url)

    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            console.log(error.response.data.message)
        }
    }
}

const handleExportCurrent = async (e) => {
    console.log("export data")
    e.preventDefault()
    try {
        const url = "http://localhost:8080/api/saveFile/languages_degree"
        await axios.post(url)

    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            console.log(error.response.data.message)
        }
    }
}

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }
    getData() {
        const url = "http://localhost:8080/api/forms/fetchData/language_degree"
        axios.get(url)
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount() {
        this.getData()
    }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    handleChange = e => {
        const sort = e.target.value;
        if (sort === "languages") {
            window.location = "/"
        } else if (sort === "languages_age") {
            window.location = "/languages_age"
        } else if (sort === "languages_sex") {
            window.location = "/languages_sex"
        } else if (sort === "languages_regions-age") {
            window.location = "/languages_regions-age"
        }
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
                        <button className={styles.white_btn} onClick={handleLogout}>
                            Logout
                        </button>

                    </div>
                </nav>
                <div className="container">
                    <form>
                        <select name="select" className={styles.select} onChange={this.handleChange} required>
                            <option value="languages_degree">Most popular languages based on degree.</option>
                            <option value="languages">Most popular languages based on region of the world.</option>
                            <option value="languages_age">Most popular languages based on the age.</option>
                            <option value="languages_sex">Most popular languages based on sex.</option>
                            <option value="languages_regions-age">Most popular languages based on age in regions of the world.</option>
                        </select>
                    </form>
                    <form id="form" className={styles.form_container} onSubmit={handleExportAll}>
                        <button type="submit" className={styles.green_btn}>
                            Export all
                        </button>
                    </form>
                    <form id="form" className={styles.form_container} onSubmit={handleExportCurrent}>
                        <button type="submit" className={styles.blue_btn}>
                            Export current
                        </button>
                    </form>
                    <Table striped bordered hover size="sm">
                        <thead className="thead-dark">
                            <tr>
                                <th>Degree</th>
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