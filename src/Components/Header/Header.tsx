import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.title}>
                    <h1>Dmitry Khiliuk</h1>
                    <h3>Front-end developer</h3>
                </div>
                <nav className={s.nav}>
                    <NavLink to={'/portfolio-new-'} className={(navData) => navData.isActive ? `${s.nav__item} ${s.active}` : s.nav__item}>PORTFOLIO</NavLink>
                    <NavLink to={'/aboutMe'} className={(navData) => navData.isActive ? `${s.nav__item} ${s.active}` : s.nav__item}>ABOUT ME</NavLink>
                    <NavLink to={'/contacts'} className={(navData) => navData.isActive ? `${s.nav__item} ${s.active}` : s.nav__item}>CONTACTS</NavLink>
                </nav>
            </div>
        </div>
    );
};

