import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';
import axios from "axios"

const Export = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("")

    const handleMain = () => {
        window.location = "/main"
    }

    const handleForm = () => {
        window.location = "/form"
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    const handleExport = () => {
        window.location = "/export"
    }

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/saveFile"
            const { data: res } = await axios.post(url, data)
            localStorage.setItem("fileName", res.data)
            window.location = "/"
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className={styles.con}>
            <nav className={styles.navbar}>
                <a href="#" onClick={handleMain}><h1>Projekt</h1></a>
                <div className={StyleSheet.navbar_buttons}>
                    <button className={styles.white_btn} onClick={handleForm}>
                        Formularz
                    </button>
                    <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                    </button>
                    <button className={styles.white_btn} onClick={handleExport}>
                        Export JSON
                    </button>
                </div>
            </nav>
            <div className={styles.main_container}>
                <form id="form" className={styles.form_container} onSubmit={handleSubmit}>
                    <label htmlFor="fileName">File name: </label>
                    <input type="text" name="fileName" id="fileName" onChange={handleChange} />
                    <button type="submit"
                        className={styles.green_btn}>
                        Save
                    </button>
                </form>
            </div>
        </div>

    )
}
export default Export