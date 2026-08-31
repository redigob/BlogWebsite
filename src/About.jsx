import { useContext, useEffect, useRef, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { Blogcontext } from "./blogcontext";
import { useNavigate } from "react-router-dom";

const About = () => {
    const [secondref,secondshow] = useScrollReveal()
    const [fourthref,fourthshow] = useScrollReveal()
    const [fifthref,fifthshow] = useScrollReveal()
    const {input} = useContext(Blogcontext)
    const navigate = useNavigate()

    useEffect(()=>{
       if(input!=''){
        navigate("/wholeblog")
       }
    },[input])

    return (
        <div className="about">
            <div className="first">
                <div>
                    <h1>About <span>Lumora</span></h1>
                    <p>Ideas worth discovering.</p>
                    <p>Stories worth remembering.</p>
                    <p>A space for creativity, knowledge,inspiration, and everyday ideas.</p>
                </div> 
            </div>
            <div ref={secondref} className={secondshow ? "second show" : "second"}>
                <h2>What is <span>Lumora?</span></h2>
                <p>Lumora is a place for curious minds.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nobis, adipisci officiis ex reiciendis in quidem ratione nam sunt. Est itaque magnam velit, ea recusandae ut veritatis id explicabo sunt?</p>
            </div>
            <div>

            </div>
            <div className={fourthshow ? "fourth show" : "fourth"} ref={fourthref}>
                <h2>Why Lumora?</h2>
                <div>
                    <div>
                        <p>✦ Discover</p>
                        <p>Find stories and ideas that spark your curiosity.</p>
                    </div>
                    <div>
                    <p>◇ Explore</p>
                    <p>Dive into different perspectives across our categories.</p>
                </div>
                <div>
                    <p>♡  Inspire</p>
                    <p>Take something from every story and make it your own.</p>
                </div>
                </div>
            </div>
            <div className={fifthshow ? "fifth show" : "fifth"} ref={fifthref}>
                <h3>What you will find here </h3>
                <div>
                    <div>
                        <img src="/images/fashion.jpg"></img>
                        <p>Fashion</p>
                    </div>
                    <div>
                        <img src="/images/design.jpg"></img>
                        <p>Design</p>
                    </div>
                    <div>
                        <img src="/images/technology.jpg"></img>
                        <p>Technology</p>
                    </div>
                    <div>
                        <img src="/images/lifestyle.jpg"></img>
                        <p>Life Style</p>
                    </div>
                    <div>
                        <img src="/images/beauty.jpg"></img>
                        <p>Beauty</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;