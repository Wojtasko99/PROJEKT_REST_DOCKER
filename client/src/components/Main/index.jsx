import styles from "./styles.module.css"
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    const handleFormularz = () => {
        window.location = "/form"
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>MySite</h1>
                <div style={styles.nabar_buttons}>
                    <button className={styles.white_btn} onClick={handleFormularz}>
                        Formularz
                    </button>
                    <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>

            </nav>

        </div>

    )
}
export default Main