import React from 'react';
import s from "./Title.module.sass";
import stripe from "../../assets/img/stripe.png";

type TitleType = {
    img: string
}

export const Title = (props: TitleType) => {
    return (
        <div>
            <div className={s.text}><img src={props.img} alt="portfolio"/></div>
            <div className={s.mainImage}><img src={stripe} alt="stripe"/></div>
        </div>
    );
};

