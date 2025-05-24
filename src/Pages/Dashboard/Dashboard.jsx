import React from 'react'
import style from "../Dashboard/Dashboard.module.css"
import Sidebar from './Sidebar'
import Header from './Header'
export default function Dashboard() {
  return (
    <div>
        <Sidebar />
        <main className={style.Main}>
            <Header />
            <h2>Welcome to Dashboard</h2>
        </main>
    </div>
  )
}
