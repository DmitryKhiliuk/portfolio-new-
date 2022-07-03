import React from 'react';
import s from './AboutMe.module.css'
import aboutMe from "../../assets/img/aboutme.png";
import {Title} from "../Title/Title";
import {Diagram} from "../Diagram/Diagram";
import photo from "../../assets/img/photo.jpg"

export const AboutMe = () => {

    const photoMe = {
        backgroundImage: `url(${photo})`
    }

    return (
        <div className={s.aboutMe}>
            <div className={s.aboutMe__container}>
                <Title img={aboutMe}/>
                <div className={s.personBlock}>
                    <div className={s.photo} style={photoMe}>

                    </div>
                    <div className={s.text}>
                        <h2 className={s.aboutTitle}>A few words about me</h2>
                        <p>
                            I'm frontend developer with experience in creating SPA using React, Redux, TypeScript, SCSS. I'm planning to study Node.js, because in the future i see myself as a Full-stack developer. You can view my code
                            samples, study projects and test assignments on my github. Usualy i prefer to spend my leisure time on improving my English, studying new technologies and solve tasks on Codewars.
                        </p>
                    </div>
                </div>
                <div className={s.skillsBlock}>
                    <h2 className={s.aboutTitle}>My skills</h2>
                    <div className={s.diagramBlock}>
                        <div className={s.diagramBlockItem}>
                            <h3>FOUNDATION</h3>
                            <Diagram percent={'90%'}/>
                            <p className={s.description}>JavaScript, TypeScript, HTML5, CSS3</p>
                        </div>
                        <div className={s.diagramBlockItem}>
                            <h3>DEVELOPMENT</h3>
                            <Diagram percent={'90%'}/>
                            <p className={s.description}>React, Redux, Redux Toolkit, REST API etc</p>
                        </div>
                        <div className={s.diagramBlockItem}>
                            <h3>TESTING</h3>
                            <Diagram percent={'70%'}/>
                            <p className={s.description}>Unit Tests, SnapShot, Storybook, Jest</p>
                        </div>
                        <div className={s.diagramBlockItem}>
                            <h3>DESIGN</h3>
                            <Diagram percent={'60%'}/>
                            <p className={s.description}>Material UI, Bootstrap, Ant-Design etc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

