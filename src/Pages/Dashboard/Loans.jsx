import React from 'react'
import bell from "../../assets/bell.png"
import transfer from "../../assets/transfer.png"
import add from "../../assets/add.png"
import extend from "../../assets/extend.png"
import { Link } from 'react-router-dom'

import style from "../Dashboard/Loans.module.css"
export default function Loans() {
  return (
    <div>
      <h2>Loans</h2>
      <div className={style.card}>
        <h5>Upcoming repayment</h5>
        <div className={style.cardBody}>
            <img src={bell} alt="" />
            <div><h2>₦10,256.25</h2> 
            <small>23 June</small></div>
        </div>

        <div className={style.cardFooter}>
            <h5>Repay today to avoid late fees!</h5>
        </div>
      </div>

    <div className={style.loanSub}>
        <div className={style.loanRepay}>
            <div>
                <Link to="repay">
                <img src={transfer} alt="" />
                Repay
                </Link>
            </div>
            <div>
                <Link to="repay">
                <img src={add} alt="" />
                Top up loan
                </Link>
            </div>
            <div>
                <Link to="repay">
                <img src={extend} alt="" />
                Extend loan
                </Link>
            </div>
        </div>
        <div className={style.loanOffer}>

        </div>
    </div>
    </div>
  )
}
