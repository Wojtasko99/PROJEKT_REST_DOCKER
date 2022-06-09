import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';

const Export = () => {
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
    const handleExport = () => {
        window.location = "/export"
    }
    useEffect(() => {
        fetchForm();
    }, []);

    const [items, setItems] = useState([]);
    const fetchForm = async () => {
        console.log("inside handleGetJson");
        const data = await fetch("/fetchData");
        const items = await data.json();
        setItems(items);
    }

    const handleChange = () => {

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/forms"
        } catch (error) {
            console.log(error)
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
                    <input type="text" name="fileName" id="fileName" />
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