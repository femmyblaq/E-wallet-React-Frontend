import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import style from "../Pages/Home.module.css"
import HeroeImg from "../assets/EwalletHeroeImg.png"
export default function Home() {

  return (
    <div>
        <Header />
      <div className={style.Heroe}>
        <div className={style.heroeContent}>
            <h2>Make payment to anyone around the world with just one click!</h2>
            <p>E-wallet App is a system integrated with banking responsibility, e.g making of Transfers, Recharging your network provider, pay bills e.t.c</p>

            <div className={style.callToAction}>
                <button className={style.ftBtn}>Get Started</button>
                <button className={style.scBtn}>Learn More</button>
            </div>
        </div>
        <img src={HeroeImg} alt="" />
      </div>
      <Footer />
    </div>
  )
}
