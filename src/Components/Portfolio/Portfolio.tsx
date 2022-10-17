import React from 'react';
import s from './Portfolio.module.sass'
import portfolio from '../../assets/img/portfolio.png'
import {Project} from "./Project/Project";
import bgTodo from '../../assets/img/todolist-img.png'
import bgBook from '../../assets/img/bookshelf.png'
import bgSocial from '../../assets/img/social.png'
import bgCards from '../../assets/img/cards.png'
import bgShop from '../../assets/img/mobile.jpg'
import bgCurrency from '../../assets/img/currency.jpg'
import {Title} from "../Title/Title";

export const Portfolio = () => {

    const bgTodoList = {backgroundImage: `url(${bgTodo})`}
    const bgBookshelf = {backgroundImage: `url(${bgBook})`}
    const bgSocialNetwork = {backgroundImage: `url(${bgSocial})`}
    const bgTrainingCards = {backgroundImage: `url(${bgCards})`}
    const bgMobileShop = {backgroundImage: `url(${bgShop})`}
    const bgCurrencyConverter = {backgroundImage: `url(${bgCurrency})`}


    return (
        <div className={s.portfolio}>
            <div className={s.portfolio__container}>
                <Title img={portfolio}/>
                <div className={s.projects}>
                    <Project background={bgTodoList}  addressProject={'https://DmitryKhiliuk.github.io/ToDo/'} addressCode={'https://github.com/DmitryKhiliuk/ToDo'}  title={'Todolist'} text={'Technologies: TypeScript, Redux Toolkit, RestAPI, Redux-thunk, Material UI, Unit Tests, Storybook'}/>
                    <Project background={bgBookshelf} addressProject={'https://DmitryKhiliuk.github.io/Bookshelf'} addressCode={'https://github.com/DmitryKhiliuk/Bookshelf.git'} title={'Bookshelf'} text={'Technologies: TypeScript, Redux, RestAPI, Redux-thunk'}/>
                    <Project background={bgSocialNetwork} addressProject={'https://dmitrykhiliuk.github.io/social-network-port'} addressCode={'https://github.com/DmitryKhiliuk/social-network-port.git'} title={'Social Network'} text={'Technologies: TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS. Use common test account credentials: Email: free@samuraijs.com Password: free'}/>
                    <Project background={bgTrainingCards} addressProject={'https://DmitryKhiliuk.github.io/cards'} addressCode={'https://github.com/DmitryKhiliuk/cards.git'} title={'Training Cards'} text={'Technologies: TypeScript, Redux, RestAPI, Redux-thunk, Material UI'}/>
                    <Project background={bgMobileShop} addressProject={'https://DmitryKhiliuk.github.io/shop'} addressCode={'https://github.com/DmitryKhiliuk/shop.git'} title={'Mobile Shop'} text={'Technologies: TypeScript, Redux Toolkit, RestAPI, Redux-thunk, Material UI, Unit Tests, Storybook'}/>
                    <Project background={bgCurrencyConverter} addressProject={'https://DmitryKhiliuk.github.io/currency-converter'} addressCode={'https://github.com/DmitryKhiliuk/currency-converter.git'} title={'Currency Converter'} text={'Technologies: TypeScript, Redux Toolkit, RestAPI, Redux-thunk, Ant Design, Unit Tests'}/>

                </div>
            </div>

        </div>
    );
};

