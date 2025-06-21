import React, { useContext, useState } from 'react'
import style from "../Components/Header.module.css"
import { ThemeContext } from '../contexts/ThemeContext'

export default function Header() {
    const { changeBgColor } = useContext(ThemeContext)
    
    return (
        <div className={style.Header}>
            <div className={style.navbrand}>
                <h3><i class="ri-wallet-3-fill"></i>Ewallet<span>APP</span></h3>
            </div>
            <ul className={style.navlinks}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><i onClick={changeBgColor} class="ri-sun-line"></i></li>
                <li><a href="" className={style.btn}>Login</a></li>
            </ul>
        </div>
    )
}
