import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCircleXmark, faBars} from '@fortawesome/free-solid-svg-icons' 
import { useContext, useState } from "react";
import './Navbar.css'
import { Blogcontext } from "./blogcontext";
const Navbar = () => {
    const[clicked,setClicked] = useState(false)
    const[hamburger,setHamburger] = useState(false)
    const {input,setInput} = useContext(Blogcontext)

    return (
        <div className="navbar">
            <h2 className="logo">Lumora Blog</h2>
            <div className="links">
                <Link to={"/"} className="link">Home</Link>
                <Link to={"/wholeblog"} className="link">Blogs</Link>
                <Link to={"/contact"} className="link">Contact</Link>
                <Link to={"/about"} className="link">About</Link>
                <div className="search">
                    <input type="text" className={ clicked ? "visible" :''} value={input} onChange={(e)=>setInput(e.target.value)}></input>
                    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} onClick={()=>setClicked(!clicked)} />
                </div>
            </div>
            <div className="formobile">
                <div className="bars">
                    <FontAwesomeIcon icon={!hamburger ? faBars : faCircleXmark} onClick={()=>setHamburger(!hamburger)} style={{transition: "1s all"}}/>
                </div>
                <div className={hamburger ? "mobile-menu-long" : "mobile-menu-short"} >
                    <Link to="/" className="link">Home</Link>
                    <Link to="/wholeblog" className="link">Blogs</Link>
                    <Link to="/about" className="link">About</Link>
                    <Link to="/contact" className="link">Contact</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;

