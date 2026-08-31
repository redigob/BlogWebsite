import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blogcontext } from "./blogcontext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faHeart,faComment } from '@fortawesome/free-solid-svg-icons'
import { useScrollReveal } from "./useScrollReveal";

const Showblog = () => {
    const navigate = useNavigate()
    const {blogs,twoblogs,sideblogs} = useContext(Blogcontext)
    const {id} = useParams()
    const {input,setInput} = useContext(Blogcontext)
    const [oneref,oneshow] = useScrollReveal()
    const [tworef,twoshow] = useScrollReveal()
    const [threeref,threeshow] = useScrollReveal()

    useEffect(()=>{
        if(input!=''){
        navigate("/wholeblog")
        }
    },[input])

    let found;
    console.log(id)
    console.log(sideblogs)

    if( id==31 || id==32 || id==33 || id==34 ){
         found = (sideblogs ? [...sideblogs].find(blog=>blog.id==id) : [])
         console.log(found)
    }
    else if( id==35 || id==36){
         found = (twoblogs ? [...twoblogs].find(blog=>blog.id==id) : [])
    }
    else{
         found =(blogs ? [...blogs].find(blog=>blog.id==id) : [])
    }

    console.log(found)
    
    let random;
    if( id==31 || id==32 || id==33 || id==34 || id==35 || id==36) {
        random = Math.floor(Math.random() * 28) + 1
    }
    else if(id==28 || id==29 || id==30){
        random = 1;
    }
    else{
        random = Number(id)+1
    }

    const recommended = blogs.filter(blog=>blog.id==random || blog.id==random+1 || blog.id==random+2)
    console.log(random,recommended)
    return (
        <div className="showblog">
            {blogs.length!=0 ?
            <div className="blogdetail">
                <img src={found.img}></img>
                <img className="overlay" src={found.img}></img>
                <p ref={oneref} className={oneshow ? "title show" : "title"}>{found.title}</p>
                <p className="author">{found.author} · {found.date}</p>
                <div ref={tworef} className={twoshow ? "content show" : "content"}>
                    <p className="article">Article content</p>
                    <p>{found.body}</p>
                    <div className="reactions">
                        <p><FontAwesomeIcon icon={faEye} /> {found.reactions.views/1000}k</p>
                        <p><FontAwesomeIcon icon={faHeart} style={{color: "#f05353"}}/> {found.reactions.likes/1000}k</p>
                        <p><FontAwesomeIcon icon={faComment} style={{color: "#f4f0f0"}} /> {found.reactions.comments}</p>
                    </div>
                </div>
            </div>
           : "Loading..."}
           <div className="background">
            
           </div>
           <div ref={threeref} className={threeshow ? "youmay show" : "youmay"}>
            <h2>You May Also Like </h2>
            { blogs && 
            <div className="recommended">
                {recommended.map(blog=>(
                    <div>
                        <img src={blog.img}/>
                        <div>
                            <h3>{blog.title}</h3> 
                            <p>{blog.author} · {blog.date} </p>    
                            <p style={{marginTop:"20px"}}>{(blog.body).slice(0,160)}  <span onClick={()=>navigate("/showblog/"+ blog.id)}> . . . Read more →</span></p>                       
                            <p style={{marginTop:"20px"}}>✦{blog.category}</p>
                           
                        </div>
                        
                    </div>
                ))}
            </div>
            } 
           </div>
        </div>
    );
}
 
export default Showblog;