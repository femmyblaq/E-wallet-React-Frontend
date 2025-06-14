import React, { useState } from 'react'
import style from '../Dashboard/Overview.module.css'
import savingImg from "../../assets/savings.png"
import tf from "../../assets/transfer.png"
import topup from "../../assets/topup.png"
import card from "../../assets/card.png"
import loan from "../../assets/loan.png"
import bet from "../../assets/bet.png"
import add from "../../assets/add.png"
import phone from "../../assets/phone.png"
import { Link } from 'react-router-dom'

export default function Overview() {
    const [view, setView] = useState(false)
    const changeView = ()=> {
        setView(prev => !prev)
    }
    const transactionHistory = [{
        id: 1,
        fullName: "HY Devinton",
        date: new Date(),
        amount: 5000.00
    }, {
        id: 2,
        fullName: "Pharhan",
        date: new Date(),
        amount: 3000.00
    }, {
        id: 3,
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
                        {!view ? <h4>****</h4> : <h4>₦5000</h4>}
                        <p>Account balance</p>

                        <Link>Account details </Link>
                    </div>
                    <i onClick={changeView} className={view ? "ri-eye-line" : "ri-eye-off-line"}></i>
                </div>
                <div className={style.loan}>
                    <div>
                        {!view ? <h4>****</h4> : <h4>₦10,000</h4>}
                        
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
            <div className={style.shorthands}>
                <div className={style.tf}>
                    <Link to="fund_transfer">
                    <img src={tf} alt="" />
                    Transfer</Link>
                </div>
                <div className={style.add}>
                    <Link to="add_money">
                    <img src={add} alt="" />
                    Add money</Link>
                </div>
                <div className={style.topup}>
                    <Link to="data">
                    <img src={topup} alt="" />
                    Data</Link>
                </div>
                <div className={style.airtime}>
                    <Link to="airtime">
                    <img src={phone} alt="" />
                    Airtime</Link>
                </div>
                <div className={style.card}>
                    <Link to="airtime">
                    <img src={card} alt="" />
                    Card</Link>
                </div>
                <div className={style.loan}>
                    <Link to="loan">
                    <img src={loan} alt="" />
                    Loan</Link>
                </div>
                <div className={style.bet}>
                    <Link to="bet">
                    <img src={bet} alt="" />
                    Bet</Link>
                </div>
            </div>
            <div className={style.transferHistory}>
                <div className={style.transTop}>
                    <h5>Recent transactions</h5>
                    <Link>view all</Link>
                </div>
                {transactionHistory.map(th => <div key={th.id} className={style.transContent}>
                    <div className={style.transDetails}>
                        <span><i class="ri-bank-line"></i></span>
                        <div>
                            <h5>{th.fullName}</h5>
                            <p>{th.date.getDate()} {th.date.toLocaleString('en-US', {month: 'short'})}, {th.date.toLocaleTimeString('en-US', {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true
                            })}</p>
                        </div>
                    </div>
                    <div className={style.amount}>₦{th.amount}</div>
                </div>)}
            </div>
        </>
    )
}
