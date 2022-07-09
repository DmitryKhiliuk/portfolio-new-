import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../Title/Title";
import contact from "../../assets/img/contact.png";
import {SubmitHandler, useForm} from "react-hook-form";

export type ContactsType = {
    name: string,
    email: string,
    message: string
};

export const Contacts = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ContactsType>()
    
    const onSubmit:SubmitHandler<ContactsType> = (data) => {
        console.log(data)
        reset()
    }

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
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <input {...(register('name', {
                            required: true,
                        }))} type="text" className={s.inputForm} style={errors.name && {border: '3px solid red'}} placeholder={'Your name'}/>

                        {errors.name && <div style={{color: 'red'}}>Name is require field!</div>}

                        <input {...register('email', {
                            required: 'Name is require field!',
                            pattern: {
                                value: /@/,
                                message: 'Please enter valid email!'
                            }
                        })} type="text" className={s.inputForm} style={errors.name && {border: '3px solid red'}} placeholder={'Email address'}/>

                        {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}

                        <textarea {...register('message', {
                            required: true,
                        })} className={s.textareaForm} style={errors.name && {border: '3px solid red'}} placeholder={'Your message'}></textarea>

                        {errors.email && <div style={{color: 'red'}}>Please enter message!</div>}

                        <button className={s.button} type={"submit"}>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

