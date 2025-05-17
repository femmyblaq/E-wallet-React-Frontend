import React from 'react'
import style from "../Components/Footer.module.css"


export default function Footer() {
    return (
        <div className={style.Footer}>
            <div className={style.container}>
                <div className={style.navbrand}>
                    <h3><i class="ri-wallet-3-fill"></i>Ewallet<span>APP</span></h3>
                    <p>E-wallet App is a system integrated with banking responsibility, e.g making of Transfers, Recharging your network provider, pay bills e.t.c</p>
                </div>

                <div className={style.usefulLinks}>
                    <h3>Useful Link</h3>
                    <ul>
                        <li><a href="">Fund Account</a></li>
                        <li><a href="">Make Transfer</a></li>
                        <li><a href="">Pay Bills</a></li>
                        <li><a href="">Airtime Top-up</a></li>
                    </ul>
                </div>
                <div className={style.contact}>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            Phone contact
                            <br />
                            <p><i class="ri-phone-fill"></i> +23 014 502 000 / +234 810 9090 177</p>
                            <br />
                            Mail contact
                            <p><i class="ri-mail-fill"></i> ewallet@pro.com / hydevinton@gmail.com</p>
                        </li><br />
                        <li className={style.social}>
                            Social links 
                            <ul>
                                <li className={style.facebook}><i class="ri-facebook-line"></i></li>
                                <li className={style.insta}><i class="ri-instagram-line"></i></li>
                                <li className={style.twitter}><i class="ri-twitter-x-line"></i></li>
                                <li className={style.tiktok}><i class="ri-tiktok-fill"></i></li>
                                <li className={style.linkedin}><i class="ri-linkedin-line"></i></li>
                                <li className={style.youtube}><i class="ri-youtube-line"></i></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p>HY Devinton &copy; All right reserved</p>
                <p>2025</p>
            </div>
        </div>
    )
}
