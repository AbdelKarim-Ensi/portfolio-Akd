import React, { useContext } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const Header = () => {
    // Buttom language
    const idioma = useContext(langContext);
    const letterColors = ['#00e5fe', '#ff4d4d', '#ffd93d', '#6bff6b', '#ff8c42', '#c77dff', '#ff5ecb', '#4dd0e1'];
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

           <NavLink className="logo" to="/">
    <p className="animated-name">
        {"AbdelKarim Doduey".split("").map((letter, index) => (
            <span
                key={index}
                style={{
                    animationDelay: `${index * 0.08}s`,
                    '--hover-color': letterColors[index % letterColors.length]
                }}
            >
                {letter === " " ? "\u00A0" : letter}
            </span>
        ))}
    </p>
</NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="servicios" spy={true} offset={-150} href="#servicios">
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
               <div id="buttons">
    <img onClick={() => idioma.selectLanguage('en-US')} src="https://flagcdn.com/w40/us.png" alt="USA" />
    <img onClick={() => idioma.selectLanguage('fr-FR')} src="https://flagcdn.com/w40/fr.png" alt="France" />
</div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);