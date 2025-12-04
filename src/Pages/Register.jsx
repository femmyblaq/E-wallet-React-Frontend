import {Link} from 'react-router-dom'
import registerImg from "../assets/registerImg.png"
import style from "../Pages/Register.module.css"
import { useState } from 'react'

export default function Register() {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful! You can now log in.");
        console.log("User registered:", data);
      } else {
        setMessage(`❌ Error: ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      setMessage("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
    
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
                {/* {error && <p style={{color: "#f00"}}>Password does not match</p> } */}
                <form onSubmit={submitHandler} >
                    <div className={style.formGroup}>
                        <input 
                            type="text"
                            name='firstName' 
                            placeholder='First name'
                            value={formData.firstName}
                            onChange={handleChange} />
                            
                    </div>
                    <div className={style.formGroup}>
                        <input 
                            type="text"
                            name='lastName' 
                            placeholder='Last name'
                            value={formData.lastName}
                            onChange={handleChange} />
                    </div>
                    <div className={style.formGroup}>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange} />
                    </div>
                    <div className={style.formGroup}>
                        <input 
                            type="password" 
                            name='password'
                            placeholder='Password'
                            // className={error ? style.error : ""}
                            value={formData.password}
                            onChange={handleChange} />
                    </div>
                    <div className={style.formGroup}>
                        <input 
                            type="password" 
                            name='confirmPassword'
                            placeholder='confirmPassword'
                            // className={error ? style.error : ""}
                            value={formData.confirmPassword}
                            onChange={handleChange} />
                    </div>
                    <button>{loading ? "Submiting.." : "Submit"}</button>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
                </div>
            </div>
        </div>
    )
}
