import { Link } from 'react-router-dom'
import loginImg from "../assets/loginImg.jpg"
import style from "../Pages/Register.module.css"
import { useState } from 'react'

export default function Login() {
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
                    <h2>Forget Password</h2>
                    {error && <p style={{ color: "#f00" }}>Password does not match</p>}
                    <form onSubmit={submitHandler} className={error ? style.error : ""}>

                        <div className={style.formGroup}>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={style.formGroup}>
                            <input
                                type="password"
                                placeholder='Password'
                                className={error ? style.error : ""}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button>Submit</button>

                        <Link to="/forgetpassword">Forgot your password? </Link>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>
                <img src={loginImg} alt="" />
            </div>
        </div>
    )
}
