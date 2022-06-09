import { useRef, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const Form = () => {
    const [data, setData] = useState({
        Q1: "Male",
        Q2: "18-21",
        Q3: "",
        Q4: "",
        Q5: "",
        Q6: "",
        Q7: "",
        Q8: ""
    })
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

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
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/forms"
            const { data: res } = await axios.post(url, data)
            handleReset()
            console.log(res.message)
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
                    <button className={styles.white_btn} onClick={handleExport}>
                        Export JSON
                    </button>
                    <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                    </button>
                    
                </div>
            </nav>
            <div className={styles.main_container}>
                <form id="form" className={styles.form_container}
                    onSubmit={handleSubmit}>
                    <h1>Wypełnij formularz</h1>
                    <div className={styles.text}>What is your gender?</div>
                    <select name="Q1" className={styles.select} onChange={handleChange} required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className={styles.text}>What is your age?</div>
                    <select name="Q2" className={styles.select} onChange={handleChange} required>
                        <option value="18-21">18-21</option>
                        <option value="22-24">22-24</option>
                        <option value="25-29">25-29</option>
                        <option value="30-34">30-34</option>
                        <option value="35-39">35-39</option>
                        <option value="40-44">40-44</option>
                        <option value="45-49">45-49</option>
                        <option value="50-54">50-54</option>
                        <option value="55-59">55-59</option>
                        <option value="60-69">60-69</option>
                        <option value="70-79">70-79</option>
                        <option value="80+">80+</option>
                    </select>
                    <div className={styles.text}>In which country do you currently reside?</div>
                    <input
                        type="text"
                        placeholder="Country"
                        name="Q3"
                        onChange={handleChange}
                        value={data.Q3}
                        required
                        className={styles.input}
                    />
                    <div className={styles.text}>What is the highest level of formal education that you have attained or plan to attain within the next 2 years?</div>
                    <input
                        type="text"
                        placeholder="Education"
                        name="Q4"
                        onChange={handleChange}
                        value={data.Q4}
                        required
                        className={styles.input}
                    />
                    <div className={styles.text}>What is your undergraduate major?</div>
                    <input
                        type="text"
                        placeholder="Major"
                        name="Q5"
                        onChange={handleChange}
                        value={data.Q5}
                        required
                        className={styles.input}
                    />
                    <div className={styles.text}>What is your current role at your work?</div>
                    <input
                        type="text"
                        placeholder="Current role"
                        name="Q6"
                        onChange={handleChange}
                        value={data.Q6}
                        required
                        className={styles.input}
                    />
                    <div className={styles.text}>In what industry is your current employer/contract?</div>
                    <input
                        type="text"
                        placeholder="Industry"
                        name="Q7"
                        onChange={handleChange}
                        value={data.Q7}
                        required
                        className={styles.input}
                    />
                    <div className={styles.text}>What specific programming language do you use most often?</div>
                    <input
                        type="text"
                        placeholder="Programming language"
                        name="Q8"
                        onChange={handleChange}
                        value={data.Q8}
                        required
                        className={styles.input}
                    />

                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    <div>
                        <button type="submit"
                            className={styles.green_btn}>
                            Send
                        </button>
                        <button type="reset"
                            className={styles.red_btn
                            }
                            onClick={handleReset}>
                            Reset
                        </button>

                    </div>
                </form>

            </div>
        </div>

    )
}
export default Form