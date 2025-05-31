import React from 'react'
import style from '../Dashboard/Overview.module.css'
import savingImg from "../../assets/savings.png"
import { Link } from 'react-router-dom'

export default function Overview() {
    const transactionHistory = [{
        fullName: "HY Devinton",
        date: new Date(),
        amount: 5000.00
    }, {
        fullName: "Pharhan",
        date: new Date(),
        amount: 3000.00
    }, {
        fullName: "Nabeel",
        date: new Date(),
        amount: 8000.00
    }]
    console.log(transactionHistory)
    return (
        <>
            <div className={style.Overview}>
                <div className={style.balance}>
                    <div>
                        <h4>₦5000</h4>
                        <p>Account balance</p>

                        <Link>Account details </Link>
                    </div>
                    <i class="ri-eye-off-line"></i>
                </div>
                <div className={style.loan}>
                    <div>
                        <h4>₦10,000</h4>
                        <p>Total outstanding loan</p>

                        <Link>Manage </Link>
                    </div>
                    <i class="ri-eye-off-line"></i>
                </div>
                <div className={style.savings}>
                    <div>
                        <h4>Nothing saved yet</h4>
                        <p>Make your first saving and start earning interest.</p>

                        <Link>Save now! </Link>
                    </div>
                    <img src={savingImg} alt="" />
                </div>
            </div>

            <div className={style.transferHistory}>
                <div className={style.transTop}>
                    <h5>Recent transactions</h5>
                    <Link>view all</Link>
                </div>
                {transactionHistory.map(th => <div className={style.transContent}>
                    <div className={style.transDetails}>
                        <span><i class="ri-bank-line"></i></span>
                        <div>
                            <h5>{th.fullName}</h5>
                            <p>{th.date.getDate()} {th.date.toLocaleString('en-US', {month: 'short'})}, {th.date.getTime()}</p>
                        </div>
                    </div>
                    <div className={style.amount}>{th.amount}</div>
                </div>)}
            </div>
        </>
    )
}
