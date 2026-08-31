import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper">
                <Link className='links' to={"/"}>Home</Link>
                <Link className='links'  to={"/about"}>About</Link>
                <Link className='links'  to={"/wholeblog"}>Blog</Link>
                <Link className='links' to={"/contact"}>Contact</Link>
                <input type="email" /><button>Subscribe</button>
            </div>
            <div className="bottom">
                <div className="content">
                     <p><FontAwesomeIcon icon={faFacebookF} /></p>
                    <p><FontAwesomeIcon icon={faTwitter} /></p>
                    <p><FontAwesomeIcon icon={faInstagram} /></p>
                    <p><FontAwesomeIcon icon={faLinkedinIn} /></p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;