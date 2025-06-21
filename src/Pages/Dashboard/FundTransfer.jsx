import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import style from "../Dashboard/FundTransfer.module.css"
import img from "../../assets/OIP.jpg"


export default function FundTransfer() {
  const [account, setAccount] = useState()

  const recentBeneficiary = [
    {
    fname: "Habeeb Olufemi Yusuph",
    acc: "8109090177",
    backLogo: "../../assets/moniepoint.png"
  },
  {
    fname: "Matthew Omolade Amodu",
    acc: "9057025202",
    backLogo: "../../assets/OIP.jpg"
  },
  {
    fname: "Pharhan Olatunbosun Awonuga",
    acc: "7077455677",
    backLogo: "../../assets/palmpay.png"
  },
  {
    fname: "Habeeb Olufemi Yusuph",
    acc: "8109090177",
    backLogo: "../../assets/moniepoint.png"
  },
  {
    fname: "Matthew Omolade Amodu",
    acc: "9057025202",
    backLogo: "../../assets/OIP.jpg"
  },
  {
    fname: "Habeeb Olufemi Yusuph",
    acc: "8109090177",
    backLogo: "../../assets/moniepoint.png"
  },
  {
    fname: "Matthew Omolade Amodu",
    acc: "9057025202",
    backLogo: "../../assets/OIP.jpg"
  },
]

  const accountDetail = (e) => {
    console.log(setAccount(e.target.value))


  }

  return (
    <div className={style.container}>
      <div className={style.group}>
        <form className={style.ft}>
          <h4>Recipient Account</h4>
          <input
            value={account}
            onChange={accountDetail}
            type="number" name=""
            id="account"
            placeholder='Enter 10 digits Account Number'
          />
          <select name="select" id="">
            <option value="">Select Bank</option>
          </select>
          <button disabled className={style.proceed}>Proceed</button>
        </form>

        <div className={style.recent}>
          <div className={style.top}>
            <div className={style.tabs}>
              <NavLink>
                <Link to="recent" className={style.active}>Recent</Link>
              </NavLink>
              <NavLink>
                <Link to="favorite">Favorite</Link>
              </NavLink>
            </div>
            <button><i class="ri-search-2-line"></i></button>
          </div>
          <div className={style.body}>
            <ul>
              {recentBeneficiary.map(r => <li>
                <div className={style.userDetail}>
                  <h5>{r.fname}</h5>
                  <p>{r.acc}</p>
                </div>
                {/* <img src={img} alt="" /> */}
                <img src={r.backLogo} alt="" />
              </li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.ads}>
        <h3>Ads should be placed here.</h3>
      </div>
    </div>
  )
}
