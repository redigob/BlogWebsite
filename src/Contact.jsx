import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faMapPin, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './contact.css'
import { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

const Contact = () => {
    const [clicked,setClicked] = useState(false)
    const [clicked2,setClicked2] = useState(false)
    const [clicked3,setClicked3] = useState(false)
    const [firstref,firstshow] = useScrollReveal()
    const [secondref,secondshow] = useScrollReveal()
    const [thirdref,thirdshow] = useScrollReveal()
    const [fourthref,fourthshow] = useScrollReveal()

    return (
        <div className="contact">
            <div>
                <h2 className='header'>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus, officiis quae dolor ipsa dolores dolorem alias excepturi eius fugit aut? A nulla provident sit, repudiandae animi ducimus dolore tempore!</p>

            </div>
            <div>
                <div ref={firstref} className={firstshow ? 'messagebox show' : "messagebox"}>
                    <h2>Send us a message</h2>
                    <label >
                        <p>Email</p>
                        <input type="email" />
                    </label>
                    <label >
                        <p>Phone</p>
                        <input type="email" />
                    </label>
                    <label >
                        <p>Name</p>
                        <input type="email" />
                    </label>
                    <label >
                        <p>Message</p>
                        <textarea type="" />
                    </label>
                    <button>Submit</button>
                </div>
                <div ref={secondref} className={secondshow ? 'news show' : "news"}>
                    <h2>Our Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, quasi reprehenderit commodi dolorem ducimus quam consectetur nostrum voluptatum vitae laborum perferendis, aliquam distinctio in. Porro sunt repudiandae reiciendis. Optio, quam?</p>
                    <label>
                        <p>Email</p>
                        <input></input>
                    </label>
                    <button>Submit</button>
                </div>
            </div>
            <div ref={thirdref} className={thirdshow ? "show" : ""}>
                <h2>Contact Details</h2>
                <div>
                    <div>
                        <p><FontAwesomeIcon icon={faPhone} /> +251-912-345-678</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quidem quam, at tempora repellat.</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faEnvelope} /> abebe@gmail.com</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quidem quam, at tempora repellat.</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Addis Ababa, Ethiopia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, quidem quam, at tempora repellat.</p>
                    </div>
                </div>
            </div>
            <div ref={fourthref} className={fourthshow ? "show" : ""}>
                <h2>Frequently Asked Questions</h2>
                <div onClick={()=>(setClicked(!clicked),setClicked2(false),setClicked3(false))} className={clicked ? "display" : ""}>
                    <p>Can i submit an article?<span >{clicked ? "-" : "+"}</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam ducimus tenetur. Dolores magnam ea expedita laborum, ipsa maiores architecto maxime sequi impedit. Labore, perspiciatis totam maxime odio blanditiis nisi?</p>
                </div>
                <div onClick={()=>(setClicked2(!clicked2),setClicked(false),setClicked3(false))} className={clicked2 ? "display" : ""}>
                    <p>How can I collaborate with Lumora?<span >{clicked2 ? "-" : "+"}</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam ducimus tenetur. Dolores magnam ea expedita laborum, ipsa maiores architecto maxime sequi impedit. Labore, perspiciatis totam maxime odio blanditiis nisi?</p>
                </div>
                <div onClick={()=>(setClicked3(!clicked3),setClicked2(false),setClicked(false))} className={clicked3 ? "display" : ""}>
                    <p>Can I suggest a topic?<span >{clicked3 ? "-" : "+"}</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam ducimus tenetur. Dolores magnam ea expedita laborum, ipsa maiores architecto maxime sequi impedit. Labore, perspiciatis totam maxime odio blanditiis nisi?</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;