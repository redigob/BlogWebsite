import { useContext, useEffect, useState } from "react";
import { Blogcontext } from "./blogcontext";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "./useScrollReveal";

const Blogcollection = () => {
    const {blogs,selected,setSelected,searchedBlogs} = useContext(Blogcontext)
    const navigate = useNavigate()
    const [filteredBlogs,setFilteredBlogs] = useState(searchedBlogs)
    const [divref,divshow] = useScrollReveal()
    useEffect(()=>{
      if(selected==null){
        setFilteredBlogs(searchedBlogs)
      }
      else{
        const newfilteredBlogs = searchedBlogs.filter((blog)=>blog.category==selected)
        setFilteredBlogs(newfilteredBlogs)
      }
    },[selected,searchedBlogs])
    return (
        <div className="blogcollection">
            <div className="header">
                <h2 onClick={()=>setSelected(null)}>Blogs</h2>
                <div className="categories">
                        <label className={selected=="Design" ?"selected" :""}>
                            <p>Design</p>
                            <input type="radio" name="category" value="Design" onChange={(e)=>setSelected(e.target.value)}></input>
                        </label>
                        <label className={selected=="Lifestyle" ?"selected" :""}>
                            <p>Life Style</p>
                            <input type="radio" name="category" value="Lifestyle" onChange={(e)=>setSelected(e.target.value)}></input>
                        </label>
                        <label className={selected=="Technology" ?"selected" :""}>
                            <p>Technology</p>
                            <input type="radio" name="category" value="Technology" onChange={(e)=>setSelected(e.target.value)}></input>
                        </label>
                        <label className={selected=="Beauty" ?"selected" :""}>
                            <p>Beauty</p>
                            <input type="radio" name="category" value="Beauty" onChange={(e)=>setSelected(e.target.value)}></input>
                        </label>
                        <label className={selected=="Fashion" ?"selected" :""}>
                            <p>Fashion</p>
                            <input type="radio" name="category" value="Fashion" onChange={(e)=>setSelected(e.target.value)}></input>
                        </label>
                </div>
            </div>

            <div ref={divref}  className={divshow ? "differentblogs show" : "differentblogs"}>
                {filteredBlogs.map(blog=>(
                    <div  className="blog-item">
                        <p className="date">{blog.date}</p>
                        <p className="category">{blog.category}</p>
                        <img src={blog.img}></img>
                        <p className="title">{blog.title}</p>
                        <div className="content">
                            <p>{blog.body.slice(0,120)} . . . <span onClick={()=>navigate("/showblog/"  +blog.id)}>Read More →</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Blogcollection;