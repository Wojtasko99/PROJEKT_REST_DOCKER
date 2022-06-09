import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    const handleFormularz = () => {
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
        const data = await fetch("http://localhost:8080/api/forms/fetchData");
        console.log(data);
        JSON.parse(data);
        console.log(data);
        const items = await data.json();
        setItems(items);
    }

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <a href="#" onClick={handleMain}><h1>Projekt</h1></a>
                <div style={styles.nabar_buttons}>
                    <button className={styles.white_btn} onClick={handleFormularz}>
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

            <section>
                {
                    items.map(item => {
                        <div>
                            {item.forms.Q1}
                        </div>
                    })
                }
            </section>

        </div>

    )
}
export default Main