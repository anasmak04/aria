import React, { useState } from 'react';
import facebook from "../images/fb.JPG";
import twitter from "../images/twit.JPG";
import instagram from "../images/insta.JPG";
import linkdin from "../images/linkd.JPG"
import be from "../images/be.JPG";
import pin from "../images/pin.JPG";
import axios from "axios"
function Contact () {
    const [data,setData] = useState({
        name : "",
        email : "",     
        message : ""    
    })
  
    const {name,email,message} = data
  
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
  if(data.name == "" || data.email == "" || data.phone == ""){
    alert('please enter you informations')
  }
  
  // document.getElementByClassName('name').value=""
  // document.getElementByClassName('email').value=""
  // document.getElementById('message').value=""
  // document.getElementById('check').value=""
  document.getElementsByClassName('name')
  document.getElementsByClassName('email')
   document.getElementById('message').value=""

    e.preventDefault()
    try{
      await axios.post("/Contact",{name,email,message})    
      }
  
    catch(err){
        console.log(err)
    }
  }
        return (
            <div>
                 <section className="contact">
                <div className="contact-parent">
                  <div className="contact-infos">
                    <pre>Contact</pre>
                    <h1>Get In Touch Using The Form</h1>
                    <p className="ptag">You can stop by our office for a cup of coffee and just use the contact<br /> form below for any questions and inquiries</p>
                    <p> <i class="fa fa-map-marker" ></i> &nbsp;&nbsp;&nbsp;22nd Innovative Street, San Francisco, CA 94043, US</p><br />
                    <p> <i class="fa fa-phone" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;D+81 720 22 126</p><br />
                    <p> <i class="fa fa-phone" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;+81 720 22 128</p><br />
                    <p> <i class="fa fa-envelope" aria-hidden="true"></i>  &nbsp;&nbsp;&nbsp;office@aria.com</p><br />
                    <h1>Follow Aria On Social Media</h1>
                    <div className="social">
                      <img src={facebook} alt="social"/>
                      <img src={instagram} alt="social"/>
                      <img src={twitter} alt="social"/>
                      <img src={linkdin} alt="social"/>
                      <img src={pin} alt="social"/>
                      <img src={be} alt="social"/>
                    </div>
                  </div>
                  <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                      <input onChange={handleChange} value={name} className="name" name="name" type="text" placeholder="Name"/><br />
                      <input onChange={handleChange} value={email} className="email" name="email" type="email" placeholder="Email"/><br />
                      <textarea onChange={handleChange} value={message} id="message" name="message"   placeholder="Your Message"></textarea><br />
                      <input type="checkbox"  required="" />  <span>I agree with Aria's stated Privacy Policy and Terms & Conditions</span><br />
                      <button>submit message</button>
                    </form>
                  </div>
                  </div>
                </section>
            </div>
        );
    
}

export default Contact;