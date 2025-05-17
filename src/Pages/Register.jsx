import React from 'react'
import registerImg from "../assets/registerImg.png"
import style from "../Pages/Register.module.css"

export default function Register() {
    return (
        <div className={style.Register}>
            <div className={style.container}>

                <img src={registerImg} alt="" />
                <div className={style.formDiv}>
                <h2>Register</h2>
                <form>
                    <div className={style.formGroup}>
                        <input type="text" placeholder='First name' />
                    </div>
                    <div className={style.formGroup}>
                        <input type="text" placeholder='Last name' />
                    </div>
                    <div className={style.formGroup}>
                        <input type="email" placeholder='Enail' />
                    </div>
                    <div className={style.formGroup}>
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className={style.formGroup}>
                        <input type="password" placeholder='confirmPassword' />
                    </div>
                    <button>Submit</button>

                    <p>Already have an account? <a href="">Login</a></p>
                </form>
                </div>
            </div>
        </div>
    )
}
