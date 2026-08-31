import { useContext } from "react";
import { Blogcontext } from "./blogcontext";
import Blogcollection from "./Blogcollection";

const Wholeblog = () => {
    const {blogs} = useContext(Blogcontext)
    return (
       <div className="wholeblog">
        <h1>Explore Many Ideas</h1>
        <Blogcollection/>
       </div>
    );
}
 
export default Wholeblog;