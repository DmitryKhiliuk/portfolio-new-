import React from 'react';
import s from './Footer.module.css'
import linkedin from '../../assets/img/linkedin-50.png'
import github from '../../assets/img/github-50.png'
import telegram from '../../assets/img/telega-50.png'
import codewars from '../../assets/img/codewars_logo_icon_145389.png'
import top from '../../assets/img/top.png'
import {Navigation} from "../Navigation/Navigation";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__container}>
                <div className={s.footer__content}>
                    <div className={s.footer__item}>
                        <h5>Address</h5>
                        <ul>
                            <li>East Side,</li>
                            <li>Brest,</li>
                            <li>Belarus</li>
                        </ul>
                    </div>
                    <div className={s.footer__item}>
                        <h5>Contact</h5>
                        <ul>
                            <li>+375 29 524 45 78</li>
                            <li>khiliukbrest@gmail.com</li>
                            <li><a href='/contacts'>Contact form</a></li>
                        </ul>
                    </div>
                    <div className={s.footer__item}>
                        <h5>Social</h5>
                        <div className={s.imgSocial}>
                            <div className={s.imgContainer}><a href="#"><img src={github} alt="github"/></a></div>
                            <div className={s.imgContainer}><a href="#"><img src={linkedin} alt="linkedin"/></a></div>
                            <div className={s.imgContainer}><a href="#"><img src={telegram} alt="telegram"/></a></div>
                            <div className={s.imgContainer}><a href="#"><img src={codewars} alt="codewars"/></a></div>

                        </div>
                    </div>
                    <div className={s.footer__item}>
                        <h5>Resume</h5>
                        <div className={s.download}><a href="#"></a></div>
                    </div>
                </div>
                <div className={s.footer__nav}>
                    <Navigation/>
                    <div className={s.imgTop}>
                        <div><a href="#"><img src={top} alt="top"/></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

