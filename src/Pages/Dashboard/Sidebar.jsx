import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../Dashboard/Sidebar.module.css'

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);
  const SidebarCollapse = () => {
    setCollapse(prev => !prev)
  }
  return (
    <div className={`${style.Sidebar} ${collapse ? `${style.collapse}` : ''}`} >
      <div className={style.navbrand}>
        <h3><i className="ri-wallet-3-fill"></i>Ewallet<span>APP</span></h3>
      </div>
      <div className={style.navlinks}>
        <ul className={`${collapse ? `${style.remove}` : ''}`}>
          <NavLink to="/dashboard" end>
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-dashboard-2-line"></i> Dashboard</li>}
          </NavLink>
          
          <NavLink to="/dashboard/fund_transfer">
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-send-plane-fill"></i> Fund Transfer</li>}
            </NavLink>
          <NavLink to="/dashboard/loans">
            {({isActive}) =><li className={isActive ? style.active: ""}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M349-144q-85 0-145-60t-60-145q0-35 11.5-68t32.5-60l130-165-72-174h468l-73 174 131 165q21 27 32.5 60t11.5 68q0 85-60 145t-145 60H349Zm131-180q-35 0-59.5-24.5T396-408q0-35 24.5-59.5T480-492q35 0 59.5 24.5T564-408q0 35-24.5 59.5T480-324Zm-96-348h192l30-72H354l30 72Zm-35 456h262q55 0 94-39t39-94q0-23-7.5-44T715-432L583-600H377L245-432q-14 18-21.5 39t-7.5 44q0 55 39 94t94 39Z" /></svg> Loans</li>}
            </NavLink>
           <NavLink to="/dashboard/setpin">
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-hand-coin-line"></i> Set pin</li>}
            </NavLink>
           <NavLink to="/dashboard/need_help">
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-question-line"></i> Need Help?</li>}
            </NavLink>
        </ul>
      </div>
      <div className={style.footer}>
        <i className="ri-logout-circle-line"></i>
        <i onClick={SidebarCollapse} className="ri-arrow-left-s-line"></i>
      </div>
    </div>
  )
}
