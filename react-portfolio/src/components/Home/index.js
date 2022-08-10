import LogoTitle from '../../assets/images/Le-S.png';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Logo from './Logo';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['t', 'u', 'c', 'k', 'e', 'n', 's'];
    const lastameArray = ['K', 'é', 'l', 'i', 'a', 'n'];
    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p','e', 'u', 'r', ' ', 'w', 'e', 'b'];
    const helloArray = ['B', 'o', 'n', 'j', 'o', 'u', 'r'];
    const imArray = ['J', 'e', ' ', 's','u','i','s']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={helloArray}
                idx={15}
                /> 
                <br /> 
                <AnimatedLetters
                letterClass={letterClass}
                strArray={imArray}
                idx={22}
                /> 
                &nbsp;
                <AnimatedLetters
                letterClass={letterClass}
                strArray={lastameArray}
                idx={30}
                />  
                <img src={LogoTitle} alt="dev" />

                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={37}
                />
                <br />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Junior Frontend Développeur / Junior Backend Développeur / JavaScript </h2>
                <Link to="/contact" className='flat-button' >CONTACTEZ MOI</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;