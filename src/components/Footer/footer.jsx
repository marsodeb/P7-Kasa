import './footer.scss'
import kasaLogoFooter from '../../assets/logo_footer.svg'


function Footer() {

    return (
        <footer className='footer-container'>
            <img className='footer-logo' src={kasaLogoFooter} alt='Logo de Kasa'></img>
            <h3 className="footer-txt">© 2020 Kasa. All rights reserved</h3>
        </footer>
    )

}

export default Footer;