import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Blogcontext = createContext()

export function Blogprovider({children}){
    const [blogs,setBlogs] = useState([])
    const [sideblogs,setSideblogs] = useState([])
    const [quotes,setQuotes] = useState([])
    const [world,setWorld] = useState([])
    const [animation,setAnimation] = useState(false)
    const [error,setError] = useState('')
    const[loading,setLoading] = useState(false)
    const [selected,setSelected] = useState(null)
    const [input,setInput] = useState('')
    const [twoblogs,setTwoblogs] = useState([])
    const searchedBlogs = (blogs && blogs.filter(blog=>blog.title.toLowerCase().includes(input.toLowerCase())))
    console.log(error)
    useEffect(()=>{
       fetch('http://localhost:3000/twoblogs')
        .then(res=>{
            if(!res.ok){
                throw new Error ("Failed to fetch")
            }
                return res.json()
            })
        .then(data=>(setError(''),setTwoblogs(data),console.log(data)))
        .catch(error=>setError(error.message))


       fetch('http://localhost:3000/blogs')
       .then(res=>{
            if(!res.ok){
                throw new Error ("Failed to fetch")
            }
                return res.json()
            })
       .then(data=>(setError(''),setBlogs(data),console.log(data)))
       .catch(error=>setError(error.message))


        fetch('http://localhost:3000/side blogs')
        .then(res=>{
            if(!res.ok){
                throw new Error ("Failed to fetch")
            }
                return res.json()
            })
        .then(data=>(setError(''),setSideblogs(data),console.log(data)))
        .catch(error=>setError(error.message))

        fetch('http://localhost:3000/world')
        .then(res=>{
            setLoading(true)
            if(!res.ok){
                throw new Error ("Failed to fetch")
            }
                return res.json()
            })
        .then(data=>(setError(''),setWorld(data),console.log(data),setLoading(false)))
        .catch(error=>setError(error.message))


        fetch('https://api.api-ninjas.com/v2/randomquotes ',{
                method:"GET",
                headers: {
                    "X-Api-Key" : "ST0N5TbZ1vOvLY1cnrENREiEG8cL4R5WKn2F29MW"
                }
            })
            .then(res=>{
            if(!res.ok){
                throw new Error ("Failed to fetch")
            }
                return res.json()
            })
            .then(data=>(setError(''),setQuotes(data),console.log(data),setAnimation(false)))
            .catch(error=>(setError(error.message),console.log(error.message)))
        
    },[])

    const quotefetch  = ()=>{
        fetch('https://api.api-ninjas.com/v2/randomquotes ',{
                method:"GET",
                headers: {
                    "X-Api-Key" : "ST0N5TbZ1vOvLY1cnrENREiEG8cL4R5WKn2F29MW"
                }
            })
            .then(res=>{
            if(!res.ok){
                throw new Error ("Failed to fetch")
               }
                return res.json()
            })
            .then(data=>(setError(''),setQuotes(data),setAnimation(false)))
            .catch(error=>(setError(error.message),console.log(error.message)))

    }
    


    return(
        <Blogcontext.Provider value={{twoblogs,setTwoblogs,input,setInput,selected,setSelected,error,loading,setLoading, world,setWorld,searchedBlogs,blogs,setBlogs,sideblogs,animation,setAnimation,setSideblogs,quotes,setQuotes,quotefetch}}>
            {children}
        </Blogcontext.Provider>
    )
}