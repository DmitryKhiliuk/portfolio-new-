import React from 'react';
import s from "../Navigation/Navigation.module.css";
import {NavLink} from "react-router-dom";



export const Navigation = () => {

    const setActive = (navData:{isActive: boolean}) => navData.isActive ? `${s.nav__item} ${s.active}` : s.nav__item

    return (
        <nav className={s.nav}>
            <NavLink to={'/portfolio-new-'} className={setActive}>PORTFOLIO</NavLink>
            <NavLink to={'/aboutMe'} className={setActive}>ABOUT ME</NavLink>
            <NavLink to={'/contacts'} className={setActive}>CONTACTS</NavLink>
        </nav>
    );
};

