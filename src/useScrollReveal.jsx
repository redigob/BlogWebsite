import { useEffect, useRef, useState } from "react"

export const useScrollReveal = ()=>{
    const [show,setShow] = useState(false)
    const elementref = useRef()

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setShow(true)
                }
            },
            {
                threshold:0.1
            }
        )

        observer.observe(elementref.current)

        return ()=>{
            observer.disconnect()
        }
    })

    return [elementref,show]
}