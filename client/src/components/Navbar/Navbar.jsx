import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import logo from "../images/logo.svg"
import "./Navbar.css";
import facebook from "../images/faceboka.JPG"
import twitter from "../images/twitera.JPG"
function Navbar () {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
        return (
            <div>
                <Router>
             <header>
                <nav className='navbar'>
                    <div className="logo">
                        <img src={logo} alt="logo" />    
                    </div>    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'><Link to="/" onClick={handleClick}  className='nav-link Home' href="">Home</Link></li>
                        <li className='nav-item'><Link to="/intro" onClick={handleClick}  className='nav-link' href="">intro</Link></li>
                        <li className='nav-item'><Link to="/services" onClick={handleClick}  className='nav-link' href="">services</Link></li>
                        <li className='nav-item'><Link to="/call" onClick={handleClick}  className='nav-link' href="">call me</Link></li>
                        <li className='nav-item'><Link to="/projects" onClick={handleClick}  className='nav-link' href="">projects</Link></li>
                        <li className='nav-item'><Link to="/about" onClick={handleClick}  className='nav-link' href="">about </Link>
   
                        </li>
                        <li className='nav-item'><Link to="/contact" onClick={handleClick}  className='nav-link' href="">contact</Link></li>
                        <li className='nav-item'><Link to="/#" onClick={handleClick}  className='nav-link nav-i' href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></Link></li>
                        <li className='nav-item'><Link to="/#" onClick={handleClick}  className='nav-link nav-i'><i class="fa fa-twitter-square" aria-hidden="true"></i></Link></li>
                    </ul>
                    <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                </nav> 

                <div className="infos">
                    <h1>BUSINESS TEMPLATE</h1>
                    <p>Aria is a top consultancy company specializing in business growth<br /> using online marketing and conversion optimization tactics</p>
                    <button>discover</button>
                    </div>   
            </header> 
            <Routes>
                    <Route path='/' element={<home />}></Route>
                    <Route path='/intro' element={<intro />}></Route>
                    <Route path='/services' element={<services />}></Route>
                    <Route path='/call' element={<call />}></Route>
                    <Route path='/projects' element={<projects />}></Route>
                    <Route path='/about' element={<about />}></Route>
                    <Route path='/contact' element={<contact />}></Route>
                </Routes>  
            </Router> 
            </div>
        );
    
}

export default Navbar;