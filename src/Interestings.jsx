import { useContext, useEffect, useRef, useState } from "react";
import { Blogcontext } from "./blogcontext";

const Interestigs = () => {
    const {error,world,setWorld} = useContext(Blogcontext)
    const [random,setRandom] =useState(Math.floor(Math.random() * 19 + 1))
    const [show,setShow] = useState(false)
    const randomcountry = (world.length!=0 ? [...world].find(country=>country.id==random):{})
    const imageref = useRef(null)
    useEffect(() => {
    if (world.length === 0) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setShow(true);
            }
        },
        {
            threshold: 0.2
        }
    );

    const image = imageref.current;

    if (image) {
        observer.observe(image);
    }

        return () => observer.disconnect();

    }, [world]);
    

    

    return (
        <div className="interestings">
        <h2 className="header">🌍 AROUND THE WORLD</h2>
        {world.length!=0 && 
            <div className="world">
                <div className="content">
                    <div className="describe">
                        <h3>{randomcountry.title}</h3>
                        <p className="body">{(randomcountry.content).slice(0,400)}...</p>
                        <div className="category">
                            <p>{(randomcountry.category).toUpperCase()}</p>
                            <p style={{cursor:"pointer",color:"blue"}} onClick={()=>(setRandom(Math.floor(Math.random() * 19 + 1)),setLoading(false))}>Explore →</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                        <img ref={imageref} className={show ? "show" : ""} src = {randomcountry.image}></img>    
                        <p className="flag"><span>{randomcountry.flag}</span> {randomcountry.country.toUpperCase()}</p>
              </div>
            </div>
           }
        
        </div>
    );
}
 
export default Interestigs;