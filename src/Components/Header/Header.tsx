import React, {useEffect, useState} from 'react';
import s from './Header.module.sass'
import {Navigation} from "../Navigation/Navigation";
import {NavigationMobile} from "../Navigation/NavigationMobile";

type HeaderType = {
    background:{backgroundImage:string}
}


export const Header = (props: HeaderType) => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className={s.header} style={props.background}>
            <div className={s.header__container}>
                <div className={s.title}>
                    <h1>Dmitry Khiliuk</h1>
                    <h3>Front-end developer</h3>
                </div>
                {windowSize[0] > 585 ?
                <Navigation/> :
                <NavigationMobile/>}
            </div>
        </div>
    );
};

