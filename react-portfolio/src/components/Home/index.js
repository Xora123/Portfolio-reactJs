import LogoTitle from '../../assets/images/logo-3.png';
import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Bonjour, <br /> Je suis  Kélian 
                <img src={LogoTitle} alt="dev" />
               tuckens
                <br />
                développeur web
                </h1>
                <h2>Junior Frontend Développeur / Junior Backend Développeur / JavaScript </h2>
                <Link to="/contact" classname='flat-button' >CONTACTEZ MOI</Link>
            </div>
        </div>
    )
}

export default Home;