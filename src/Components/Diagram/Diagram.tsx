import React from 'react';
import s from './Diagram.module.css'

type DiagramType = {
    percent: string
}

export const Diagram = (props: DiagramType) => {

    return (
        <>
            <div className={s.pie}  data-size={props.percent}>{props.percent}</div>
        </>
    );
};

