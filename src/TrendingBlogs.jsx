import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faHeart,faComment } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { Blogcontext } from './blogcontext'
import Interestigs from './Interestings'
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from './useScrollReveal'

const TrendingBlogs = ({trendingBlogs}) => {
    const navigate = useNavigate()
    const {blogs,quotes,error,animation,setAnimation,quotefetch} = useContext(Blogcontext)
    const [random,setRandom] = useState( Math.floor(Math.random() * 29) + 1)
    const editorpick =(blogs && blogs.filter((blog)=>blog.id==random))
    const [leftref,leftshow] = useScrollReveal()
    const [rightref,rightshow] = useScrollReveal()
    const [quoteref,quoteshow] = useScrollReveal()
    console.log(error)
    const handleclick = ()=>{
        setAnimation(true);
        quotefetch()
    }

    return (
        <div className="trendingblogs">
            <h2 className='h2'>Trending Blogs</h2>
            <div className="trendingposts">
                <div ref={leftref}  className={leftshow ? "left show" : "left"}>
                    {trendingBlogs.map((blog)=>(
                        <div className="trending">
                            <img src={blog.img}></img>
                            <div className="content">
                                <p className='title'>{blog.title}</p>
                                <div className="likenview">
                                    <p><FontAwesomeIcon icon={faEye} /> {blog.reactions.views/1000}k</p>
                                    <p><FontAwesomeIcon icon={faHeart} style={{color: "#f05353"}}/> {blog.reactions.likes/1000}k</p>
                                    <p><FontAwesomeIcon icon={faComment} style={{color: "#f0ecec"}} /> {blog.reactions.comments}</p>
                                </div>
                            </div>
                            <button onClick={()=>navigate("/showblog/" + blog.id)}>View Blog</button>
                        </div>
                    ))}
                    <button className='explore' onClick={()=>navigate("/wholeblog")}>Explore All Articles →</button>

                    <div ref={quoteref} className={quoteshow ? "quotes show" : "quotes"}>
                        <h2>Quotes of the day<span onClick={handleclick}> → </span></h2>
                        {error ? error : quotes && quotes.map(quote=>(
                            <div className={animation ? "quote quote-animation" : "quote"}>
                                <p>{quote.quote}</p>
                                <p className="author">—{quote.author}</p>
                            </div>
                        ))}
                    </div> 
                </div>
                <div ref={rightref} className={rightshow ? "right show" : "right"}>
                     <div className="editorpick">
                        {editorpick.map((blog)=>(
                            <div className="editorpickblog">
                                <div>
                                    <p className='category'>{blog.category}</p>
                                    <img src={blog.img}/>
                                    <div className="authorndate">
                                        <p >{blog.author}</p>
                                        <p>{blog.date}</p>
                                    </div>
                                </div>
                                <div className='descriptions'>
                                    <p className='title'>{blog.title}</p>
                                    <div className="content">
                                        <p>{blog.body}</p>
                                        <button onClick={()=>setRandom( Math.floor(Math.random() * 29) + 1)} className='another'> Explore Another →</button>
                                    </div>
                                    
                                </div> 
                            </div>
                        ))}
                     </div>
                     <div>
                        <Interestigs/>
                     </div>
                </div>
            </div>
        </div>
    );
}
 
export default TrendingBlogs;