import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', ' ', 'P', 'r', 'o', 'p', 'o', 's']}
            idx={15}
          />
        </h1>
        <p>
          Je suis un développeur junior front-end et back-end très ambitieux à
          la recherche d'un rôle dans société informatique établie avec la
          possibilité de travailler avec les dernières technologies sur des
          projets ambitieux et variés.
        </p>
        <p align="LEFT">
          J'ai soif d'apprendre, je suis naturellement curieux et je travaille
          perpétuellement pour améliorer mes compétences.
        </p>
        <p>
          Si je dois me définir en une phrase ce serait fanatique de sport,
          passionné d'Apple et obsédé par la technologie !!!
        </p>
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About
