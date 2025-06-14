import React, { useState } from 'react'
import style from "../Dashboard/FundTransfer.module.css"
export default function FundTransfer() {
  const [account, setAccount] = useState()

  const accountDetail = (e) => {
    console.log(setAccount(e.target.value))
    
    
  }

  return (
    <form className={style.ft}>
      <h4>Account details</h4>
      <input value={account} onChange={accountDetail} type="number" name="" id="account" />
    </form>
  )
}
