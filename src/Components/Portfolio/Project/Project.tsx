import React from 'react';
import s from '../Project/Progect.module.css'

type ProjectType = {
    background: {backgroundImage: string}
    text: string
    title: string
}

export const Project = (props:ProjectType) => {

    return (
        <div className={s.project__item} style={props.background}>
            <div className={s.content}>
                <div className={s.textBlock}>
                    <div className={s.text}>
                        {props.text}
                    </div>
                </div>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.buttonBlock}>
                    <button className={s.button}>VIEW PROJECT</button>
                    <button className={s.button}>VIEW CODE</button>
                </div>
            </div>
        </div>

    );
};

