import React from 'react';
import s from './Portfolio.module.sass'
import portfolio from '../../assets/img/portfolio.png'
import {Project} from "./Project/Project";
import bgTodo from '../../assets/img/todolist-img.png'
import bgBook from '../../assets/img/bookshelf.png'
import bgSocial from '../../assets/img/social.png'
import bgFuture from '../../assets/img/future.png'
import {Title} from "../Title/Title";

export const Portfolio = () => {

    const bgTodoList = {backgroundImage: `url(${bgTodo})`}
    const bgBookshelf = {backgroundImage: `url(${bgBook})`}
    const bgSocialNetwork = {backgroundImage: `url(${bgSocial})`}
    const bgFutureProject = {backgroundImage: `url(${bgFuture})`}

    return (
        <div className={s.portfolio}>
            <div className={s.portfolio__container}>
                <Title img={portfolio}/>
                <div className={s.projects}>
                    <Project background={bgTodoList} addressCode={'#'} addressProject={'#'}  title={'Todolist'} text={'Technologies: TypeScript, Redux, RestAPI, Redux-thunk, Material UI, Unit Tests'}/>
                    <Project background={bgBookshelf} addressProject={'https://DmitryKhiliuk.github.io/Bookshelf'} addressCode={'https://github.com/DmitryKhiliuk/Bookshelf.git'} title={'Bookshelf'} text={'Technologies: TypeScript, Redux, RestAPI, Redux-thunk'}/>
                    <Project background={bgSocialNetwork} addressProject={'#'} addressCode={'#'} title={'Social Network'} text={'Technologies: TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS'}/>
                    <Project background={bgFutureProject} addressProject={'#'} addressCode={'#'} title={'Future Project'} text={'In progress...'}/>
                    <Project background={bgFutureProject} addressProject={'#'} addressCode={'#'} title={'Future Project'} text={'In progress...'}/>
                    <Project background={bgFutureProject} addressProject={'#'} addressCode={'#'} title={'Future Project'} text={'In progress...'}/>

                </div>
            </div>

        </div>
    );
};

