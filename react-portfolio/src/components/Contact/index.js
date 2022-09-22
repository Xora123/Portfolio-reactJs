import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const sendEmail =(e)=>{
        e.preventDefault()

        emailjs
            .sendForm(
                'service_lrarfkd',
                'template_il9ayi7',
                refForm.current,
                'dfIyr8iWVzOW8lOx7'
            )
            .then(
                ()=>{
                    alert("L'email a bien été envoyé")
                    window.location.reload(false)
                },
                () => { 
                    alert("Erreur l'email n'as pas été envoyé , merci d'essayer a nouveau")
                }
            )
    }

    return(
        <>
        <div className="container contact-page">
            <div className='text-zone'>
            <h1>
                
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['M','e', ' ', 'C', 'o', 'n', 't', 'a','c','t','e','r']}
                idx={15}
                />
            </h1>
            <p>Je suis intéressé par les opportunités de freelance ou alors CDI en entreprise. Toutefois, si vous avez d'autres demandes ou questions,
             n'hésitez pas non plus à me contacter en utilisant le formulaire ci-dessous.
             </p>
             <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder="Nom" requiered/>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder="Email" requiered/>
                        </li>
                        <li>
                            <input placeholder='Sujet' type='text' name='sujet' requiered/>
                        </li>
                        <li>
                           <textarea placeholder='Message' name="message" requiered>
                           </textarea>
                        </li>
                        <li>
                           <input type='submit' className='flat-button' name='Envoyer'></input>
                        </li>
                    </ul>
                </form>

             </div>
            </div>
            <div className="info-map">
        Stuckens Kélian,
        <br />
        France,
        <br />
        Alès, 30100
        <br />
        <span>stuckenskelian@gmail.com</span>
      </div>
        </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact