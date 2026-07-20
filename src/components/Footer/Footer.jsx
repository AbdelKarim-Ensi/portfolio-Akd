import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by AbdelKarim'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/abdel-karim-douday-552878280/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AbdelKarim-Ensi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/abdelkarim_doudey/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=58009192" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);