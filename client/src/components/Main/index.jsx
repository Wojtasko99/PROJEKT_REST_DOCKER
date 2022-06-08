import styles from "./styles.module.css"
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>MySite</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <div>
                <h1>MARIO KRÓL</h1>
            </div>
        </div>

    )
}
export default Main