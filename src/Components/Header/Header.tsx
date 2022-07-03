import React from 'react';
import s from './Header.module.css'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.title}>
                    <h1>Dmitry Khiliuk</h1>
                    <h3>Front-end developer</h3>
                </div>
                <Navigation/>
            </div>
        </div>
    );
};

