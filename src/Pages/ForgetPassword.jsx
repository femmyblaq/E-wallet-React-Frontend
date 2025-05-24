import { Link } from 'react-router-dom'
import forgetImg from "../assets/forgetImg.jpg"
import style from "../Pages/Register.module.css"
import { useState } from 'react'

export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

        //setErrForPass();


        setEmail("")
        setPassword("")


        console.log(email)
        console.log(password)
    }

    return (
        <div className={style.Register}>
            <div className={style.container}>

                
                <div className={style.formDiv}>
                    <h2>Register</h2>
                    {error && <p style={{ color: "#f00" }}>Password does not match</p>}
                    <form onSubmit={submitHandler} className={error ? style.error : ""}>

                        <div className={style.formGroup}>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button>Submit</button>

                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>
                <img src={forgetImg} alt="" />
            </div>
        </div>
    )
}
