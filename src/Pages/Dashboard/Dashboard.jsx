import React from 'react'
import style from "../Dashboard/Dashboard.module.css"
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
// import FundTransfer from './FundTransfer'
// import Overview from './Overview'
export default function Dashboard() {
  return (
    <div>
        <Sidebar />
        <main className={style.Main}>
            <Header />
                <Outlet />
            
            {/* <FundTransfer/> */}
        </main>
    </div>
  )
}
