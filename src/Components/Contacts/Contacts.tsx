import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../Title/Title";
import contact from "../../assets/img/contact.png";

export const Contacts = () => {

    return (
        <div className={s.contacts}>
            <div className={s.contacts__container}>
                <Title img={contact}/>
                <div className={s.content}>
                    <div className={s.data}>
                        <h3>PHONE</h3>
                        <p>+375 29 524 45 78</p>
                        <h3>TELEGRAM</h3>
                        <p>@dmitrykhiliuk</p>
                        <h3>GITHUB</h3>
                        <a href="https://github.com/DmitryKhiliuk"><p>go to GitHub</p></a>
                        <h3>ADDRESS</h3>
                        <p>Brest, Belarus</p>
                    </div>
                    <form className={s.form} action={'khiliukbrest@gmail.com'}>
                        <input type="text" className={s.inputForm} placeholder={'Your name'}/>
                        <input type="text" className={s.inputForm} placeholder={'Email address'}/>
                        <textarea className={s.textareaForm} placeholder={'Your message'}></textarea>
                        <button className={s.button} type={"submit"}>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

