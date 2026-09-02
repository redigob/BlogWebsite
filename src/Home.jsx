import { useContext } from 'react';
import Blogcollection from './Blogcollection';
import './Home.css'
import { Blogcontext } from './blogcontext';
import { useNavigate } from 'react-router-dom';
import TrendingBlogs from './TrendingBlogs';
import Footer from './footer';
import { useEffect } from 'react';
import { useScrollReveal } from './useScrollReveal';

const Home = () => {
    const {sideblogs,blogs,input,twoblogs,setTwoblogs} = useContext(Blogcontext)
    const navigate = useNavigate()
    const  trendingBlogs = (blogs ? [...blogs].sort((a,b)=>b.reactions.views - a.reactions.views).slice(0,5):[])
    const [divref,divshow] = useScrollReveal()
    console.log(trendingBlogs)
    useEffect(()=>{
        if(input!=''){
        navigate("/wholeblog")
        }
    },[input])
    console.log(twoblogs)
    return (
        <div className="home">
            <div className="homecontent">
                <div className="message">
                    <h2>Welcome To <span>Lumora</span> from the feature branch</h2>
                    <p>Stories, ideas & knowledge worth sharing</p>
                    <button onClick={()=>navigate("/wholeblog")}>Explore Articles</button>
                </div>
                <div ref={divref} className={ divshow ? "featuredposts show" : "featuredposts"}>
                    <h2>Featured Posts</h2>
                    <div className="blogposts">
                        <div className="bigones">
                            {twoblogs ? twoblogs.map(blog=>(
                                <div className={"blog" + blog.id}>
                                    <img src={blog.img}></img>
                                    <div className="description">
                                        <p>{blog.title}</p>
                                        <p>{(blog.body.slice(0,300))}</p>
                                        <p>{blog.date} . By {blog.author}</p>
                                        <p className='more' style={{cursor: "pointer"}} onClick={()=>navigate("/showblog/" + blog.id)}>Read More →</p>
                                    </div>
                                </div>
                            )): "Loading..."}
                        </div>
                        
                        <div className="others">
                            {sideblogs ? sideblogs.map((blog)=>(
                                <div className="blogs" id={blog.id} onClick={()=>navigate("/showblog/" + blog.id)}>
                                    <img src={blog.img}></img>
                                    <div className="describe">
                                        <p>{blog.title}</p>
                                        <p>{blog.author} · {blog.date} </p>
                                    </div>
                                </div>
                            )) : "Loading..."}   
                        </div>
                    </div>
                </div>
                <div>
                    <TrendingBlogs trendingBlogs = {trendingBlogs}/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;