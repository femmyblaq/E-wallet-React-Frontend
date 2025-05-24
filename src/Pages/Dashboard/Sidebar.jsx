import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from '../Dashboard/Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={style.Sidebar}>
      <div className={style.navbrand}>
                      <h3><i class="ri-wallet-3-fill"></i>Ewallet<span>APP</span></h3>
                  </div>
        <div className={style.navlinks}>
            <ul>
                <li><Link to="">Dashboard</Link></li>
                <li><Link to="">Fund Transfer</Link></li>

                <Outlet />
            </ul>
        </div>
        <div className={style.footer}>
            <i class="ri-logout-circle-line"></i>
            <i class="ri-arrow-left-s-line"></i>
        </div>
    </div>
  )
}
