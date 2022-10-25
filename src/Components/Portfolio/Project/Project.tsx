import React from 'react';
import s from './Progect.module.sass'

type ProjectType = {
    background: {backgroundImage: string}
    text: string
    title: string
    addressProject: string
    addressCode: string
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
                    <a href={props.addressProject} target='_blank' className={s.button}>VIEW PROJECT</a>
                    <a href={props.addressCode} target='_blank' className={s.button}>VIEW CODE</a>
                </div>
            </div>
        </div>

    );
};

