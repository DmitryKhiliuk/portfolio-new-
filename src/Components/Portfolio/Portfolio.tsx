import React from 'react';
import s from './Portfolio.module.css'
import portfolio from '../../assets/img/portfolio.png'
import stripe from '../../assets/img/stripe.png'
import {Project} from "./Project/Project";
import bgTodo from '../../assets/img/todolist-img.png'
import bgBook from '../../assets/img/bookshelf.png'
import bgSocial from '../../assets/img/social.png'
import bgFuture from '../../assets/img/future.png'

export const Portfolio = () => {

    const bgTodoList = {backgroundImage: `url(${bgTodo})`}
    const bgBookshelf = {backgroundImage: `url(${bgBook})`}
    const bgSocialNetwork = {backgroundImage: `url(${bgSocial})`}
    const bgFutureProject = {backgroundImage: `url(${bgFuture})`}

    return (
        <div className={s.portfolio}>
            <div className={s.portfolio__container}>
                <div className={s.text}><img src={portfolio} alt="portfolio"/></div>
                <div className={s.mainImage}><img src={stripe} alt="stripe"/></div>
                <div className={s.projects}>
                    <Project background={bgTodoList} title={'Todolist'} text={'Technologies: TypeScript, Redux, RestAPI, Redux-thunk, Material UI, Unit Tests'}/>
                    <Project background={bgBookshelf} title={'Bookshelf'} text={'Technologies: TypeScript, Redux, RestAPI, Redux-thunk'}/>
                    <Project background={bgSocialNetwork} title={'Social Network'} text={'Technologies: TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS'}/>
                    <Project background={bgFutureProject} title={'Future Project'} text={'In progress...'}/>
                    <Project background={bgFutureProject} title={'Future Project'} text={'In progress...'}/>
                    <Project background={bgFutureProject} title={'Future Project'} text={'In progress...'}/>

                </div>
            </div>

        </div>
    );
};

