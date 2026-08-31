import Navbar from "./Navbar";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Wholeblog from "./Wholeblog";
import Footer from "./footer";
import Showblog from "./Showblog";
import Showfull from "./Showfull";
import About from "./About";
import Contact from "./Contact";

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Showfull/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/wholeblog" element={<Wholeblog></Wholeblog>}></Route>
                <Route path='showblog/:id' element={<Showblog/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}
 
export default App;