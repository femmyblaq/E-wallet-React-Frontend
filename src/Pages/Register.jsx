import {Link} from 'react-router-dom'
import registerImg from "../assets/registerImg.png"
import style from "../Pages/Register.module.css"
import { useState } from 'react'

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false)

    const submitHandler = (e) => {
            e.preventDefault();

            //setErrForPass();
            
        
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")

            
            console.log(firstName)
            console.log(lastName)
            console.log(email)
            console.log(password)
            console.log(confirmPassword)
    }
    
    const setErrForPass = () => {
        if(password !== confirmPassword) {
            setError(true)
            return
        }
    }

    return (
        <div className={style.Register}>
            <div className={style.container}>

                <img src={registerImg} alt="" />
                <div className={style.formDiv}>
                <h2>Register</h2>
                {error && <p style={{color: "#f00"}}>Password does not match</p> }
                <form onSubmit={submitHandler} className={error ? style.error : ""}>
                    <div className={style.formGroup}>
                        <input 
                            type="text" 
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                            
                    </div>
                    <div className={style.formGroup}>
                        <input 
                            type="text" 
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
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
                    <div className={style.formGroup}>
                        <input 
                            type="password" 
                            placeholder='confirmPassword'
                            className={error ? style.error : ""}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button>Submit</button>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
                </div>
            </div>
        </div>
    )
}
